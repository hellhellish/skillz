// PHP - Prompts
const PHP_PROMPT_CATEGORIES = {
    pinned: { title: '📌 Закрепленные', order: 0 },
    review: { title: '💻 Code Review & Refactoring', order: 1 },
    architecture: { title: '🏗 Architecture & Design', order: 2 },
    debug: { title: '🔧 Debugging & Troubleshooting', order: 3 },
    performance: { title: '⚡ Performance Optimization', order: 4 },
    security: { title: '🔒 Security & Authentication', order: 5 },
    testing: { title: '🧪 Testing & Quality', order: 6 }
};

function renderPhpPrompts(promptsData) {
    const groupedPrompts = {};
    
    Object.keys(PHP_PROMPT_CATEGORIES).forEach(cat => {
        groupedPrompts[cat] = [];
    });

    promptsData.forEach(prompt => {
        if (groupedPrompts[prompt.category]) {
            groupedPrompts[prompt.category].push(prompt);
        }
    });

    let promptsHtml = '';
    
    const sortedCategories = Object.entries(PHP_PROMPT_CATEGORIES)
        .sort((a, b) => a[1].order - b[1].order);

    sortedCategories.forEach(([categoryKey, categoryInfo]) => {
        const prompts = groupedPrompts[categoryKey] || [];
        if (prompts.length === 0) return;
        
        if (categoryKey !== 'pinned') {
            promptsHtml += `<div class="prompt-category-title">${categoryInfo.title}</div>`;
        }
        
        prompts.forEach(prompt => {
            const cardClass = `prompt-category-${prompt.category}`;
            
            promptsHtml += `
                <div class="card prompt-card ${cardClass}">
                    <h3 class="prompt-title">${prompt.title}</h3>
                    ${prompt.category === 'pinned' ? `<span class="prompt-badge prompt-badge-pinned">📌 Закреплено</span>` : ''}
                    <div class="prompt-content">
                        <p class="prompt-label">Промпт:</p>
                        "${prompt.text}"
                    </div>
                </div>
            `;
        });
    });

    return promptsHtml;
}

window.registerPhpPrompts = function(d) {
    const promptsData = window.PHP_PROMPTS_DATA || [];
    const promptsHtml = renderPhpPrompts(promptsData);

    return `
        <div class="section active">
            <div class="section-header">
                <h1>⚡ Промпты</h1>
                <p>Промпты для кодинга и изучения PHP</p>
            </div>
            <div class="prompts-grid">
                ${promptsHtml}
            </div>
        </div>
    `;
};