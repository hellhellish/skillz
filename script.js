const STACKS = {};
let currentStack = null;
let currentSection = 'overview';

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
    
    renderContent();
}

function renderContent() {
    const container = document.getElementById('mainContent');
    const data = STACKS[currentStack];
    
    const renderFn = data.sections[currentSection];
    if (!renderFn) {
        container.innerHTML = `<div class="section active"><p>Section in development</p></div>`;
        return;
    }
    
    let html = renderFn(data);
    
    if (data.footer && data.footer[currentSection]) {
        html += data.footer[currentSection](data);
    }
    
    container.innerHTML = html;
    
    restoreCheckboxes();
    
    bindFaqToggles();
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

document.addEventListener('keydown', (e) => {
    if (!e.ctrlKey) return;
    
    const map = {
        '1': 'overview',
        '2': 'resume',
        '3': 'goals',
        '4': 'roadmap',
        '5': 'faq',
        '6': 'materials',
        '7': 'knowledge',
        '8': 'prompts'
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

console.log('🌳 Career Tree ready!');
console.log('📦 Stacks loaded:', Object.keys(STACKS).length);
console.log('⌨️ Ctrl+1..8 for navigation');
