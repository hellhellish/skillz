const STACKS = {};
let currentStack = null;
let currentSection = 'overview';
let currentLearningLevel = 'base';
let cardsViewMode = 'single';

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

    const savedSection = localStorage.getItem('ct_section') || 'overview';
    switchSection(savedSection);
}

function switchSection(sectionId) {
    if (!currentStack || !STACKS[currentStack]) {
        if (sectionId === 'settings') {
            currentSection = sectionId;
            localStorage.setItem('ct_section', sectionId);
            renderContent();
            return;
        }
        return;
    }

    currentSection = sectionId;
    localStorage.setItem('ct_section', sectionId);

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });

    if (sectionId.startsWith('learning-')) {
        currentLearningLevel = sectionId.replace('learning-', '');
    }

    cardsViewMode = 'single';
    renderContent();
}

function renderContent() {
    const container = document.getElementById('mainContent');

    if (currentSection === 'settings') {
        container.innerHTML = renderSettings();
        applyThemeFromStorage();
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
    let sectionToRender = currentSection;
    let level = null;

    if (currentSection.startsWith('learning-')) {
        sectionToRender = 'learning';
        level = currentLearningLevel;
    }

    const renderFn = data.sections[sectionToRender];
    if (!renderFn) {
        container.innerHTML = `<div class="section active"><p>Section in development</p></div>`;
        return;
    }

    let html = renderFn(data, level);

    if (data.footer && data.footer[sectionToRender]) {
        html += data.footer[sectionToRender](data);
    }

    container.innerHTML = html;

    restoreCheckboxes();
    bindFaqToggles();
    bindCardButtons();

    if (currentSection.startsWith('learning-') && level) {
        document.querySelectorAll('.level-content').forEach(el => {
            el.style.display = 'none';
            if (el.dataset.level === level) {
                el.style.display = 'block';
            }
        });
    }

    if (currentSection === 'cards' && cardsViewMode === 'all') {
        showAllCards();
    }
}

function renderSettings() {
    const savedFont = localStorage.getItem('ct_font') || 'poppins';
    const savedTheme = localStorage.getItem('ct_theme') || 'light';
    const fontNames = { poppins: 'Poppins', monospace: 'Monospace', inter: 'Inter' };
    
    return `
        <div class="section active">
            <div class="section-header">
                <h1>⚙️ Settings</h1>
                <p>Настройки интерфейса и внешнего вида</p>
            </div>
            
            <div class="card">
                <h3>🎨 Тема</h3>
                <p style="color:var(--text-black700);font-size:14px;margin-bottom:16px;">Выберите светлую или тёмную тему</p>
                
                <div class="theme-switcher" style="display:flex;gap:12px;flex-wrap:wrap;">
                    <button class="theme-option ${savedTheme === 'light' ? 'active' : ''}" data-theme="light" style="
                        padding:12px 24px;
                        border:2px solid ${savedTheme === 'light' ? 'var(--skin-color)' : 'var(--bg-black50)'};
                        border-radius:10px;
                        background:${savedTheme === 'light' ? 'var(--bg-black50)' : 'var(--bg-black100)'};
                        color:var(--text-black900);
                        cursor:pointer;
                        font-family:'Poppins',sans-serif;
                        font-size:14px;
                        font-weight:500;
                        transition:all 0.3s ease;
                    ">
                        ☀️ Светлая
                    </button>
                    
                    <button class="theme-option ${savedTheme === 'dark' ? 'active' : ''}" data-theme="dark" style="
                        padding:12px 24px;
                        border:2px solid ${savedTheme === 'dark' ? 'var(--skin-color)' : 'var(--bg-black50)'};
                        border-radius:10px;
                        background:${savedTheme === 'dark' ? 'var(--bg-black50)' : 'var(--bg-black100)'};
                        color:var(--text-black900);
                        cursor:pointer;
                        font-family:'Poppins',sans-serif;
                        font-size:14px;
                        font-weight:500;
                        transition:all 0.3s ease;
                    ">
                        🌙 Тёмная
                    </button>
                </div>
                
                <div style="margin-top:16px;padding:12px 16px;background:var(--bg-black50);border-radius:8px;font-size:13px;color:var(--text-black700);">
                    <strong>Текущая тема:</strong> <span id="currentThemeDisplay" style="font-weight:600;color:var(--text-black900);">${savedTheme === 'light' ? 'Светлая' : 'Тёмная'}</span>
                    <span style="display:inline-block;margin-left:12px;padding:2px 12px;background:var(--skin-color);color:#fff;border-radius:12px;font-size:11px;font-weight:600;">активна</span>
                </div>
            </div>
            
            <div class="card">
                <h3>🔤 Шрифт интерфейса</h3>
                <p style="color:var(--text-black700);font-size:14px;margin-bottom:16px;">Выберите основной шрифт для всего приложения</p>
                
                <div class="font-switcher" style="display:flex;gap:12px;flex-wrap:wrap;">
                    <button class="font-option ${savedFont === 'poppins' ? 'active' : ''}" data-font="poppins" style="
                        padding:12px 24px;
                        border:2px solid ${savedFont === 'poppins' ? 'var(--skin-color)' : 'var(--bg-black50)'};
                        border-radius:10px;
                        background:${savedFont === 'poppins' ? 'var(--bg-black50)' : 'var(--bg-black100)'};
                        color:var(--text-black900);
                        cursor:pointer;
                        font-family:'Poppins',sans-serif;
                        font-size:14px;
                        font-weight:500;
                        transition:all 0.3s ease;
                    ">
                        Poppins (по умолчанию)
                    </button>
                    
                    <button class="font-option ${savedFont === 'monospace' ? 'active' : ''}" data-font="monospace" style="
                        padding:12px 24px;
                        border:2px solid ${savedFont === 'monospace' ? 'var(--skin-color)' : 'var(--bg-black50)'};
                        border-radius:10px;
                        background:${savedFont === 'monospace' ? 'var(--bg-black50)' : 'var(--bg-black100)'};
                        color:var(--text-black900);
                        cursor:pointer;
                        font-family:'Courier New',monospace;
                        font-size:14px;
                        font-weight:500;
                        transition:all 0.3s ease;
                    ">
                        Monospace
                    </button>
                    
                    <button class="font-option ${savedFont === 'inter' ? 'active' : ''}" data-font="inter" style="
                        padding:12px 24px;
                        border:2px solid ${savedFont === 'inter' ? 'var(--skin-color)' : 'var(--bg-black50)'};
                        border-radius:10px;
                        background:${savedFont === 'inter' ? 'var(--bg-black50)' : 'var(--bg-black100)'};
                        color:var(--text-black900);
                        cursor:pointer;
                        font-family:'Inter',sans-serif;
                        font-size:14px;
                        font-weight:500;
                        transition:all 0.3s ease;
                    ">
                        Inter
                    </button>
                </div>
                
                <div style="margin-top:16px;padding:12px 16px;background:var(--bg-black50);border-radius:8px;font-size:13px;color:var(--text-black700);">
                    <strong>Текущий шрифт:</strong> <span id="currentFontDisplay" style="font-weight:600;color:var(--text-black900);">${fontNames[savedFont] || 'Poppins'}</span>
                    <span style="display:inline-block;margin-left:12px;padding:2px 12px;background:var(--skin-color);color:#fff;border-radius:12px;font-size:11px;font-weight:600;">активен</span>
                </div>
            </div>
            
            <div class="card">
                <h3>💾 Хранилище</h3>
                <div style="display:flex;gap:12px;flex-wrap:wrap;">
                    <button onclick="localStorage.clear();location.reload();" style="
                        padding:10px 24px;
                        background:#f85149;
                        color:#fff;
                        border:none;
                        border-radius:8px;
                        cursor:pointer;
                        font-family:'Poppins',sans-serif;
                        font-size:14px;
                        font-weight:500;
                        transition:all 0.3s ease;
                    ">
                        🗑️ Очистить все данные
                    </button>
                    <button onclick="showStorageInfo()" style="
                        padding:10px 24px;
                        background:var(--bg-black100);
                        border:1px solid var(--bg-black50);
                        border-radius:8px;
                        color:var(--text-black900);
                        cursor:pointer;
                        font-family:'Poppins',sans-serif;
                        font-size:14px;
                        font-weight:500;
                        transition:all 0.3s ease;
                    ">
                        ℹ️ Информация о хранилище
                    </button>
                </div>
            </div>
        </div>
    `;
}

function showStorageInfo() {
    let total = 0;
    let count = 0;
    let items = [];
    
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const value = localStorage.getItem(key);
            const size = new Blob([value]).size;
            total += size;
            count++;
            if (count <= 10) {
                items.push(`${key}: ${size} bytes`);
            }
        }
    }
    
    const totalKB = (total / 1024).toFixed(2);
    alert(`📊 Информация о хранилище\n\nВсего ключей: ${count}\nОбщий размер: ${totalKB} KB\n\nПоследние 10 записей:\n${items.join('\n')}`);
}

function applyThemeFromStorage() {
    const theme = localStorage.getItem('ct_theme') || 'light';
    applyTheme(theme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

function applyFontFromStorage() {
    const font = localStorage.getItem('ct_font') || 'poppins';
    applyFont(font);
}

function applyFont(font) {
    document.documentElement.style.fontFamily = '';
    if (font === 'poppins') {
        document.documentElement.style.fontFamily = "'Poppins', sans-serif";
    } else if (font === 'monospace') {
        document.documentElement.style.fontFamily = "'Courier New', 'Consolas', monospace";
    } else if (font === 'inter') {
        document.documentElement.style.fontFamily = "'Inter', 'Segoe UI', sans-serif";
    }
}

function bindSettingsEvents() {
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.removeEventListener('click', handleThemeClick);
        btn.addEventListener('click', handleThemeClick);
    });
    
    document.querySelectorAll('.font-option').forEach(btn => {
        btn.removeEventListener('click', handleFontClick);
        btn.addEventListener('click', handleFontClick);
    });
}

function handleThemeClick(e) {
    const btn = e.currentTarget;
    const theme = btn.dataset.theme;
    applyTheme(theme);
    localStorage.setItem('ct_theme', theme);
    
    document.querySelectorAll('.theme-option').forEach(b => {
        b.style.borderColor = 'var(--bg-black50)';
        b.style.background = 'var(--bg-black100)';
        b.classList.remove('active');
        if (b.dataset.theme === theme) {
            b.style.borderColor = 'var(--skin-color)';
            b.style.background = 'var(--bg-black50)';
            b.classList.add('active');
        }
    });
    
    const display = document.getElementById('currentThemeDisplay');
    if (display) {
        const names = { light: 'Светлая', dark: 'Тёмная' };
        display.textContent = names[theme] || theme;
        const badge = display.nextElementSibling;
        if (badge) badge.textContent = 'активна';
    }
}

function handleFontClick(e) {
    const btn = e.currentTarget;
    const font = btn.dataset.font;
    applyFont(font);
    localStorage.setItem('ct_font', font);
    
    document.querySelectorAll('.font-option').forEach(b => {
        b.style.borderColor = 'var(--bg-black50)';
        b.style.background = 'var(--bg-black100)';
        b.classList.remove('active');
        if (b.dataset.font === font) {
            b.style.borderColor = 'var(--skin-color)';
            b.style.background = 'var(--bg-black50)';
            b.classList.add('active');
        }
    });
    
    const display = document.getElementById('currentFontDisplay');
    if (display) {
        const names = { poppins: 'Poppins', monospace: 'Monospace', inter: 'Inter' };
        display.textContent = names[font] || font;
        const badge = display.nextElementSibling;
        if (badge) badge.textContent = 'активен';
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

    const counter = document.querySelector('.cards-counter');
    if (counter) {
        counter.textContent = `Всего карточек: ${cards.length}`;
    }
}

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

document.addEventListener('keydown', (e) => {
    if (!e.ctrlKey) return;

    const map = {
        '1': 'overview',
        '2': 'resume',
        '3': 'learning-base',
        '4': 'cards',
        '5': 'materials',
        '6': 'prompts',
        '7': 'settings'
    };

    if (map[e.key]) {
        e.preventDefault();
        if (currentStack || map[e.key] === 'settings') {
            switchSection(map[e.key]);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('stackSelect').addEventListener('change', function() {
        switchStack(this.value);
    });

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.dataset.section;
            if (currentStack || section === 'settings') {
                switchSection(section);
            }
        });
    });

    applyThemeFromStorage();
    applyFontFromStorage();

    const savedStack = localStorage.getItem('ct_stack');
    if (savedStack && STACKS[savedStack]) {
        document.getElementById('stackSelect').value = savedStack;
        currentStack = savedStack;
        const data = STACKS[savedStack];
        document.querySelector('.logo').textContent = data.meta.icon + ' ' + data.meta.title;
        
        const savedSection = localStorage.getItem('ct_section');
        if (savedSection) {
            switchSection(savedSection);
        } else {
            switchSection('overview');
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