const STACKS = {};
let currentStack = null;
let currentSection = 'overview';
let currentLearningLevel = 'base';

window.registerStack = function(id, data) {
    STACKS[id] = data;
    const select = document.getElementById('stackSelect');
    const option = document.createElement('option');
    option.value = id;
    option.textContent = data.meta.icon + ' ' + data.meta.title;
    select.appendChild(option);
};

function switchStack(id) {
    if (!id || !STACKS[id]) {
        document.getElementById('mainContent').innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:18px;">
                <p>👋 Select a stack in the left panel</p>
            </div>
        `;
        currentStack = null;
        localStorage.removeItem('ct_stack');
        return;
    }

    currentStack = id;
    localStorage.setItem('ct_stack', id);

    const data = STACKS[id];
    document.querySelector('.logo').textContent = data.meta.icon + ' ' + data.meta.title;

    switchSection('overview');
}

function switchSection(sectionId) {
    if (!currentStack || !STACKS[currentStack]) return;

    currentSection = sectionId;
    localStorage.setItem('ct_section', sectionId);

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });

    // Если раздел начинается с "learning-", извлекаем уровень
    if (sectionId.startsWith('learning-')) {
        currentLearningLevel = sectionId.replace('learning-', '');
    }

    renderContent();
}

function renderContent() {
    const container = document.getElementById('mainContent');
    const data = STACKS[currentStack];

    // Определяем, какой раздел рендерить
    let sectionToRender = currentSection;
    let level = null;

    // Если это один из новых learning-разделов, используем основной 'learning'
    if (currentSection.startsWith('learning-')) {
        sectionToRender = 'learning';
        level = currentLearningLevel;
    }

    const renderFn = data.sections[sectionToRender];
    if (!renderFn) {
        container.innerHTML = `<div class="section active"><p>Section in development</p></div>`;
        return;
    }

    // Передаем уровень в функцию рендеринга, если он есть
    let html = renderFn(data, level);

    if (data.footer && data.footer[sectionToRender]) {
        html += data.footer[sectionToRender](data);
    }

    container.innerHTML = html;

    restoreCheckboxes();
    bindFaqToggles();
    bindCardButtons();

    // Если это раздел learning, показываем только нужный уровень
    if (currentSection.startsWith('learning-') && level) {
        // Показываем только контент нужного уровня
        document.querySelectorAll('.level-content').forEach(el => {
            el.style.display = 'none';
            if (el.dataset.level === level) {
                el.style.display = 'block';
            }
        });
    }
}

function restoreCheckboxes() {
    document.querySelectorAll('input[type="checkbox"][data-ct-id]').forEach(cb => {
        const key = 'ct_' + cb.dataset.ctId;
        cb.checked = localStorage.getItem(key) === 'true';
        cb.addEventListener('change', (e) => {
            localStorage.setItem(key, e.target.checked);
        });
    });
}

function bindFaqToggles() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
}

function bindCardButtons() {
    const revealBtn = document.querySelector('.card-reveal-btn');
    const nextBtn = document.getElementById('next-card-btn');
    const cardAnswer = document.querySelector('.card-answer');
    const cardQuestion = document.querySelector('.card-question');

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
}

document.addEventListener('keydown', (e) => {
    if (!e.ctrlKey) return;

    const map = {
        '1': 'overview',
        '2': 'resume',
        '3': 'learning-base',
        '4': 'cards',
        '5': 'materials',
        '6': 'prompts'
    };

    if (map[e.key]) {
        e.preventDefault();
        switchSection(map[e.key]);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('stackSelect').addEventListener('change', function() {
        switchStack(this.value);
    });

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });

    const savedStack = localStorage.getItem('ct_stack');
    if (savedStack && STACKS[savedStack]) {
        document.getElementById('stackSelect').value = savedStack;
        switchStack(savedStack);

        const savedSection = localStorage.getItem('ct_section');
        if (savedSection) {
            switchSection(savedSection);
        }
    } else {
        if (Object.keys(STACKS).length === 0) {
            document.getElementById('mainContent').innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--muted);font-size:18px;flex-direction:column;gap:16px;">
                    <p>📦 No stacks loaded</p>
                    <p style="font-size:14px;">Connect stack files (seo.js, flutter.js, etc.)</p>
                </div>
            `;
        }
    }
});