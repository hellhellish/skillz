// skills/seo/seo.js

const seoStack = {
    meta: {
        icon: '🐘',
        title: 'SEO',
        subtitle: 'Senior',
        description: 'SEO'
    },
    stats: {
        skills: { done: 20, total: 45 },
        faq: 15,
        experience: 4
    },

    // data
    cards:     window.SEO_CARDS_DATA,
    materials: window.SEO_MATERIALS_DATA,
    prompts:   window.SEO_PROMPTS_DATA,

    // sections: neutral renderers from core templates
    sections: {}
};

// ---------- SECTION REGISTRATION ----------
function registerSeoSections() {
    const registrars = {
        cards:     window.renderCardsSection,
        materials: window.renderMaterialsSection,
        prompts:   window.renderPromptsSection
    };

    let registered = 0;

    for (const [section, fn] of Object.entries(registrars)) {
        if (typeof fn === 'function') {
            seoStack.sections[section] = fn;
            registered++;
        } else {
            console.warn(`⚠️ Renderer for "${section}" is not loaded`);
        }
    }

    // ---------- LEARNING LEVELS (THREADS) ----------
    const levels = ['base', 'light', 'medium', 'hard', 'exam'];

    levels.forEach(level => {
        const sectionKey = 'learning-' + level;

        seoStack.sections[sectionKey] = function(d, lvl) {
            if (typeof window.renderLearning !== 'function') {
                return `
                    <div class="section active">
                        <div class="section-header">
                            <h1>⚠️ Ошибка загрузки</h1>
                            <p>Шаблон обучения не загружен. Проверьте подключение template.js</p>
                        </div>
                    </div>
                `;
            }

            const state = getLearningState(level);
            return window.renderLearning(d, level, state);
        };

        registered++;
    });

    return registered;
}

// ---------- LEARNING STATE (localStorage) ----------
const LEARNING_STATE_KEY = 'ct_learning_state';

function getLearningState(level) {
    try {
        const raw = localStorage.getItem(LEARNING_STATE_KEY);
        const all = raw ? JSON.parse(raw) : {};
        return all[level] || { threadId: null };
    } catch (e) {
        console.warn('⚠️ Failed to read learning state:', e);
        return { threadId: null };
    }
}

function setLearningState(level, state) {
    try {
        const raw = localStorage.getItem(LEARNING_STATE_KEY);
        const all = raw ? JSON.parse(raw) : {};
        all[level] = state;
        localStorage.setItem(LEARNING_STATE_KEY, JSON.stringify(all));
    } catch (e) {
        console.warn('⚠️ Failed to save learning state:', e);
    }
}

// ---------- STACK REGISTRATION ----------
function registerSeoStack() {
    if (seoStack._registered) {
        return;
    }

    const registered = registerSeoSections();

    if (registered === 0) {
        console.error('❌ Не зарегистрировано ни одной секции!');
        seoStack._registered = false;
        return;
    }

    if (typeof registerStack === 'function') {
        registerStack('seo', seoStack);
        seoStack._registered = true;
        console.log(`✅ SEO stack registered (${registered} sections)`);
    } else {
        console.error('❌ registerStack не определена!');
        seoStack._registered = false;
    }
}

// ---------- INITIALIZATION ----------
function initSeoStack() {
    const waitForTemplate = () => {
        return new Promise((resolve) => {
            if (typeof window.renderLearning === 'function') {
                resolve();
                return;
            }

            const onTemplateLoaded = () => {
                document.removeEventListener('templateLoaded', onTemplateLoaded);
                resolve();
            };
            document.addEventListener('templateLoaded', onTemplateLoaded);

            setTimeout(() => {
                document.removeEventListener('templateLoaded', onTemplateLoaded);
                resolve();
            }, 2000);
        });
    };

    waitForTemplate().then(() => {
        if (typeof registerStack === 'function') {
            registerSeoStack();
        } else {
            document.addEventListener('stackSystemReady', function onReady() {
                document.removeEventListener('stackSystemReady', onReady);
                if (typeof registerStack === 'function') {
                    registerSeoStack();
                } else {
                    console.error('❌ registerStack не найдена после события!');
                }
            });

            setTimeout(() => {
                if (!seoStack._registered && typeof registerStack === 'function') {
                    registerSeoStack();
                }
            }, 3000);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSeoStack);
} else {
    initSeoStack();
}

// ---------- EXPORTS ----------
window.getLearningState = getLearningState;
window.setLearningState = setLearningState;