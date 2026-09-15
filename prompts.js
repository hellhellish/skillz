// prompts.js

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderPrompts(promptsData) {
    let html = '';
    promptsData.forEach(prompt => {
        html += `
            <div class="card prompt-card">
                <div class="prompt-header">
                    <h3 class="prompt-title">${prompt.title}</h3>
                    <button class="prompt-copy-btn" data-prompt="${escapeHtml(prompt.text)}">Copy</button>
                </div>
                <div class="prompt-content">
                    "${prompt.text}"
                </div>
            </div>
        `;
    });
    return html;
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            resolve();
        } catch (e) {
            reject(e);
        }
        document.body.removeChild(ta);
    });
}

function initPromptCopyButtons(root) {
    root.querySelectorAll('.prompt-copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.getAttribute('data-prompt');
            copyToClipboard(text).then(() => {
                const original = btn.textContent;
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = original;
                    btn.classList.remove('copied');
                }, 1500);
            }).catch(() => {
                btn.textContent = 'Failed';
                setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
            });
        });
    });
}

function renderPromptsSection(d) {
    const prompts = d.prompts || [];

    if (prompts.length === 0) {
        return `
            <div class="section active">
                <div class="section-header"><h1>Prompts</h1></div>
                <p>No prompts for this stack.</p>
            </div>
        `;
    }

    const promptsHtml = renderPrompts(prompts);

    setTimeout(() => {
        const container = document.querySelector('.prompts-grid');
        if (container) initPromptCopyButtons(container);
    }, 0);

    return `
        <div class="section active">
            <div class="section-header">
                <h1>Prompts</h1>
            </div>
            <div class="prompts-grid">
                ${promptsHtml}
            </div>
        </div>
    `;
}

window.renderPromptsSection = renderPromptsSection;