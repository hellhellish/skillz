// script.js

const STACKS = {};
let currentStack = null;
let currentSection = 'overview';
let currentLearningLevel = 'base';
let cardsViewMode = 'single';

// =============================================
// STACK REGISTRATION
// =============================================
window.registerStack = function(id, data) {
    STACKS[id] = data;
    const select = document.getElementById('stackSelect');
    const option = document.createElement('option');
    option.value = id;
    option.textContent = data.meta.icon + ' ' + data.meta.title;
    select.appendChild(option);

    if (Object.keys(STACKS).length === 1) {
        select.value = id;
        switchStack(id);
    }
};

// =============================================
// STACK SWITCHING
// =============================================
function switchStack(id) {
    if (!id || !STACKS[id]) {
        document.getElementById('mainContent').innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:18px;">
                <p>👋 Select a stack in the left panel</p>
            </div>
        `;
        currentStack = null;
        removeStack();
        return;
    }

    currentStack = id;
    saveStack(id);
    
    const savedSection = getStoredSection();
    switchSection(savedSection || 'overview');
}

// =============================================
// SECTION SWITCHING
// =============================================
function switchSection(sectionId) {
    if (!currentStack && sectionId !== 'settings') {
        return;
    }

    currentSection = sectionId;
    saveSection(sectionId);

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });

    // if it's a learning section - save the level and reset thread
    if (sectionId && sectionId.startsWith('learning-')) {
        currentLearningLevel = sectionId.replace('learning-', '');
        // Сбрасываем выбранный тред при переходе на уровень
        if (typeof setLearningState === 'function') {
            setLearningState(currentLearningLevel, { threadId: null });
        }
    }

    cardsViewMode = 'single';
    renderContent();
}

// =============================================
// CONTENT RENDERING
// =============================================
function renderContent() {
    const container = document.getElementById('mainContent');

    // settings
    if (currentSection === 'settings') {
        container.innerHTML = renderSettings();
        applyFontFromStorage();
        bindSettingsEvents();
        return;
    }

    if (!currentStack || !STACKS[currentStack]) {
        container.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:18px;flex-direction:column;gap:16px;">
                <p>📦 No stacks loaded</p>
                <p style="font-size:14px;">Connect stack files (seo.js, flutter.js, etc.)</p>
            </div>
        `;
        return;
    }

    const data = STACKS[currentStack];
    
    // check if it's a learning section
    if (currentSection && currentSection.startsWith('learning-')) {
        const levelKey = currentSection; // 'learning-base', 'learning-light', etc.
        const renderFn = data.sections[levelKey];
        
        if (typeof renderFn === 'function') {
            // pass the level (base, light, etc.)
            const level = currentLearningLevel;
            container.innerHTML = renderFn(data, level);
            
            // Для learning-секций — только восстановление чекбоксов и toggle
            restoreLearningCheckboxes();
            bindLearningToggles();
            bindLearningThreadCards();
        } else {
            container.innerHTML = `<div class="section active"><p>Learning section "${levelKey}" not found</p></div>`;
        }
        return;
    }

    // regular sections (overview, resume, cards, materials, prompts)
// resume — статичная секция, не зависит от стека
if (currentSection === 'resume') {
    if (typeof window.renderResume === 'function') {
        container.innerHTML = window.renderResume();
    } else {
        container.innerHTML = `<div class="section active"><p>Resume not loaded</p></div>`;
    }
    restoreCheckboxes();
    bindFaqToggles();
    return;
}

// regular sections (overview, cards, materials, prompts)
const renderFn = data.sections[currentSection];
    if (!renderFn) {
        container.innerHTML = `<div class="section active"><p>Section in development</p></div>`;
        return;
    }

    let html = renderFn(data);
    container.innerHTML = html;

    restoreCheckboxes();
    bindFaqToggles();
    bindCardButtons();

    if (currentSection === 'cards' && cardsViewMode === 'all') {
        showAllCards();
    }
}

// =============================================
// LEARNING: чекбоксы, toggle, клики по тредам
// =============================================

// Восстановление чекбоксов тем в learning-секциях
function restoreLearningCheckboxes() {
    document.querySelectorAll('input[type="checkbox"][data-ct-id^="learning_"]').forEach(cb => {
        const key = cb.dataset.ctId;
        const saved = getCheckbox(key);
        if (saved !== null) {
            cb.checked = saved;
            // Обновляем состояние в данных
            syncTopicCompletedFromCheckbox(key, saved);
        }
        cb.addEventListener('change', (e) => {
            saveCheckbox(key, e.target.checked);
        });
    });
}

// Синхронизирует topic.completed в window.LEARNING_THREADS
// Ключ имеет вид: learning_{level}_{threadId}_{topicId}
function syncTopicCompletedFromCheckbox(key, completed) {
    if (!window.LEARNING_THREADS) return;
    const parts = key.split('_');
    // parts[0] = 'learning', parts[1] = level, parts[2] = threadId, parts[3] = topicId
    if (parts.length < 4) return;
    const level = parts[1];
    const threadId = parts[2];
    const topicId = parts[3];
    
    const thread = window.LEARNING_THREADS[level] && window.LEARNING_THREADS[level][threadId];
    if (!thread || !thread.topics) return;
    
    // topicId в данных — число или строка, приводим к строке для сравнения
    const topic = thread.topics.find(t => String(t.id) === String(topicId));
    if (topic) {
        topic.completed = completed;
    }
}

// Привязка toggle-стрелок и кликов по темам
function bindLearningToggles() {
    // toggleTopic уже глобальная функция из template.js,
    // но на всякий случай подстрахуемся, если onclick не сработал
    document.querySelectorAll('.learning-card').forEach(card => {
        // Клик по заголовку — toggle
        const header = card.querySelector('div[onclick]');
        if (header && typeof window.toggleTopic !== 'function') {
            header.addEventListener('click', function() {
                const content = card.querySelector('.topic-content');
                const arrow = card.querySelector('.toggle-arrow');
                if (!content) return;
                if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'block';
                    if (arrow) arrow.style.transform = 'rotate(180deg)';
                } else {
                    content.style.display = 'none';
                    if (arrow) arrow.style.transform = 'rotate(0deg)';
                }
            });
        }
    });
}

// Привязка кликов по карточкам тредов и кнопке "Назад"
function bindLearningThreadCards() {
    // Клик по карточке треда
    document.querySelectorAll('.thread-card').forEach(card => {
        card.addEventListener('click', function() {
            const threadId = this.dataset.threadId;
            const level = currentLearningLevel;
            if (typeof setLearningState === 'function') {
                setLearningState(level, { threadId });
            }
            renderContent();
        });
        
        // Hover-эффект
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Кнопка "Назад к тредам"
    const backBtn = document.querySelector('.back-to-threads-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            const level = this.dataset.level || currentLearningLevel;
            if (typeof setLearningState === 'function') {
                setLearningState(level, { threadId: null });
            }
            renderContent();
        });
        
        backBtn.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--skin-color)';
            this.style.color = 'var(--skin-color)';
        });
        backBtn.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--bg-black50)';
            this.style.color = 'var(--text-black700)';
        });
    }
}

// =============================================
// CHECKBOXES (общие)
// =============================================
function restoreCheckboxes() {
    document.querySelectorAll('input[type="checkbox"][data-ct-id]').forEach(cb => {
        const key = cb.dataset.ctId;
        const saved = getCheckbox(key);
        if (saved !== null) {
            cb.checked = saved;
        }
        cb.addEventListener('change', (e) => {
            saveCheckbox(key, e.target.checked);
        });
    });
}

// =============================================
// FAQ
// =============================================
function bindFaqToggles() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
}

// =============================================
// CARDS: показать все
// =============================================
function showAllCards() {
    const cards = window._cardsData || [];
    if (cards.length === 0) return;

    const container = document.getElementById('card-container');
    if (!container) return;

    const singleCardMode = container.querySelector('.card-box');
    const nextBtn = document.getElementById('next-card-btn');
    const showAllBtn = document.querySelector('.show-all-cards-btn');
    const backBtn = document.querySelector('.back-to-cards-btn');

    if (singleCardMode) singleCardMode.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (showAllBtn) showAllBtn.style.display = 'none';

    const oldGrid = container.querySelector('.cards-grid-all');
    if (oldGrid) oldGrid.remove();

    const grid = document.createElement('div');
    grid.className = 'cards-grid-all';
    grid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 16px;
        margin: 20px 0;
    `;

    cards.forEach((card) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-item-all';
        cardEl.innerHTML = `
            <div style="font-weight:600;font-size:14px;color:var(--text-black900);margin-bottom:8px;">${card.question}</div>
            <div style="font-size:13px;color:var(--text-black700);display:none;" class="card-answer-all">${card.answer}</div>
            <div style="margin-top:8px;font-size:12px;color:var(--skin-color);cursor:pointer;">👆 Нажмите для ответа</div>
        `;

        cardEl.addEventListener('click', function() {
            const answer = this.querySelector('.card-answer-all');
            const hint = this.querySelector('div:last-child');
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                hint.textContent = '👆 Нажмите чтобы скрыть ответ';
            } else {
                answer.style.display = 'none';
                hint.textContent = '👆 Нажмите для ответа';
            }
        });

        cardEl.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 12px rgba(48, 46, 77, 0.1)';
            this.style.transform = 'translateY(-2px)';
        });
        cardEl.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });

        grid.appendChild(cardEl);
    });

    container.appendChild(grid);

    if (!backBtn) {
        const backButton = document.createElement('button');
        backButton.className = 'back-to-cards-btn';
        backButton.textContent = '← Назад к карточкам';
        backButton.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--skin-color)';
            this.style.background = 'var(--skin-color)';
            this.style.color = '#fff';
        });
        backButton.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--bg-black50)';
            this.style.background = 'var(--bg-black100)';
            this.style.color = 'var(--text-black900)';
        });
        backButton.addEventListener('click', function() {
            cardsViewMode = 'single';
            renderContent();
        });
        container.appendChild(backButton);
    }

    const counter = document.querySelector('.cards-counter');
    if (counter) {
        counter.textContent = `Всего карточек: ${cards.length}`;
    }
}

// =============================================
// CARDS: кнопки
// =============================================
function bindCardButtons() {
    const revealBtn = document.querySelector('.card-reveal-btn');
    const nextBtn = document.getElementById('next-card-btn');
    const showAllBtn = document.querySelector('.show-all-cards-btn');

    if (revealBtn) {
        revealBtn.addEventListener('click', function() {
            const answer = document.querySelector('.card-answer');
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                this.textContent = 'Скрыть ответ';
            } else {
                answer.style.display = 'none';
                this.textContent = 'Показать ответ';
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const cards = window._cardsData || [];
            if (cards.length === 0) return;
            const randomIndex = Math.floor(Math.random() * cards.length);
            const card = cards[randomIndex];
            const questionEl = document.querySelector('.card-question');
            const answerEl = document.querySelector('.card-answer');
            const revealBtnEl = document.querySelector('.card-reveal-btn');
            if (questionEl) questionEl.textContent = card.question;
            if (answerEl) {
                answerEl.textContent = card.answer;
                answerEl.style.display = 'none';
            }
            if (revealBtnEl) revealBtnEl.textContent = 'Показать ответ';
        });
    }

    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            cardsViewMode = 'all';
            showAllCards();
        });
    }
}

// =============================================
// INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // navigation
    const select = document.getElementById('stackSelect');
    if (select) {
        select.addEventListener('change', function() {
            switchStack(this.value);
        });
    }

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.dataset.section;
            if (currentStack || section === 'settings') {
                switchSection(section);
            }
        });
    });

    applyFontFromStorage();

    // restore stack
    const savedStack = getStoredStack();
    if (savedStack && STACKS[savedStack]) {
        document.getElementById('stackSelect').value = savedStack;
        currentStack = savedStack;

        const savedSection = getStoredSection();
        switchSection(savedSection || 'overview');
    } else {
        // check if there are any loaded stacks
        const stackKeys = Object.keys(STACKS);
        if (stackKeys.length > 0) {
            // activate the first stack
            const firstStack = stackKeys[0];
            document.getElementById('stackSelect').value = firstStack;
            switchStack(firstStack);
        } else {
            document.getElementById('mainContent').innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:18px;flex-direction:column;gap:16px;">
                    <p>📦 No stacks loaded</p>
                    <p style="font-size:14px;">Connect stack files (php.js, english.js, etc.)</p>
                </div>
            `;
        }
    }

    initTheme();
    setupThemeToggles();
});

// =============================================
// THEME MANAGEMENT
// =============================================
const STORAGE_THEME = 'ct_theme';

function setTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    saveTheme(theme);
    syncAllToggles(theme);
}

function syncAllToggles(theme) {
    const isDark = theme === 'dark';
    document.querySelectorAll('.theme-toggle, .settings-theme-toggle, [data-theme-toggle]').forEach(toggle => {
        if (toggle.type === 'checkbox' || toggle.classList.contains('toggle-input')) {
            toggle.checked = isDark;
        } else {
            toggle.textContent = isDark ? '☀️' : '🌙';
        }
    });
}

function initTheme() {
    const savedTheme = getStoredTheme();
    setTheme(savedTheme);
}

function setupThemeToggles() {
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        const newBtn = themeToggleBtn.cloneNode(true);
        themeToggleBtn.parentNode.replaceChild(newBtn, themeToggleBtn);
        newBtn.addEventListener('click', function() {
            const isDark = document.body.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    }
    
    document.querySelectorAll('.settings-theme-toggle, .theme-toggle-settings').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const newTheme = this.checked ? 'dark' : 'light';
            setTheme(newTheme);
        });
    });
    
    document.querySelectorAll('[data-theme-toggle]').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const isDark = document.body.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    });
}

// =============================================
// SYNC BETWEEN TABS
// =============================================
window.addEventListener('storage', function(e) {
    if (e.key === STORAGE_THEME) {
        const newTheme = e.newValue || 'light';
        document.body.classList.toggle('dark', newTheme === 'dark');
        syncAllToggles(newTheme);
    }
});

// =============================================
// EXPORT GLOBAL FUNCTIONS
// =============================================
window.setTheme = setTheme;
window.getStoredTheme = getStoredTheme;
window.clearAllStorage = clearAllStorage;