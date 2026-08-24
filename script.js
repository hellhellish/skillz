const STACKS = {};
let currentStack = null;
let currentSection = 'overview';
let currentLearningLevel = 'base';
let cardsViewMode = 'single'; // 'single' или 'all'

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

    // Сбрасываем режим просмотра карточек при переключении секции
    cardsViewMode = 'single';
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

    // Если это раздел cards и режим all, показываем все карточки
    if (currentSection === 'cards' && cardsViewMode === 'all') {
        showAllCards();
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

function showAllCards() {
    const cards = window._cardsData || [];
    if (cards.length === 0) return;

    const container = document.getElementById('card-container');
    if (!container) return;

    // Сохраняем текущее содержимое
    const singleCardMode = container.querySelector('.card-box');
    const nextBtn = document.getElementById('next-card-btn');
    const showAllBtn = document.querySelector('.show-all-cards-btn');
    const backBtn = document.querySelector('.back-to-cards-btn');

    // Скрываем одиночный режим
    if (singleCardMode) singleCardMode.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (showAllBtn) showAllBtn.style.display = 'none';

    // Удаляем старую сетку если есть
    const oldGrid = container.querySelector('.cards-grid-all');
    if (oldGrid) oldGrid.remove();

    // Создаем сетку со всеми карточками
    const grid = document.createElement('div');
    grid.className = 'cards-grid-all';
    grid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 16px;
        margin: 20px 0;
    `;

    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-item-all';
        cardEl.style.cssText = `
            background: var(--bg-black100);
            border: 1px solid var(--bg-black50);
            border-radius: 8px;
            padding: 16px;
            transition: all 0.3s ease;
            cursor: pointer;
        `;
        cardEl.innerHTML = `
            <div style="font-weight:600;font-size:14px;color:var(--text-black900);margin-bottom:8px;">${card.question}</div>
            <div style="font-size:13px;color:var(--text-black700);display:none;" class="card-answer-all">${card.answer}</div>
            <div style="margin-top:8px;font-size:12px;color:var(--skin-color);cursor:pointer;">👆 Нажмите для ответа</div>
        `;
        
        // Клик для показа/скрытия ответа
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

    // Добавляем кнопку "Назад"
    if (!backBtn) {
        const backButton = document.createElement('button');
        backButton.className = 'back-to-cards-btn';
        backButton.textContent = '← Назад к карточкам';
        backButton.style.cssText = `
            padding: 10px 28px;
            background: var(--bg-black100);
            border: 1px solid var(--bg-black50);
            border-radius: 25px;
            font-size: 14px;
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
            color: var(--text-black900);
            cursor: pointer;
            transition: all 0.3s ease;
            display: block;
            margin: 20px auto 0;
        `;
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

    // Обновляем счетчик
    const counter = document.querySelector('.cards-counter');
    if (counter) {
        counter.textContent = `Всего карточек: ${cards.length}`;
    }
}

function bindCardButtons() {
    const revealBtn = document.querySelector('.card-reveal-btn');
    const nextBtn = document.getElementById('next-card-btn');
    const showAllBtn = document.querySelector('.show-all-cards-btn');
    const cardAnswer = document.querySelector('.card-answer');
    const cardQuestion = document.querySelector('.card-question');

    // Обработчик "Показать ответ"
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

    // Обработчик "Следующая карточка"
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

    // Обработчик "Показать все карточки"
    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            cardsViewMode = 'all';
            showAllCards();
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