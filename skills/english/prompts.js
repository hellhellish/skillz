// English - Prompts
const ENGLISH_PROMPT_CATEGORIES = {
    pinned: { title: '📌 Закрепленные', order: 0 },
    writing: { title: '📝 Writing & Documentation', order: 1 },
    speaking: { title: '💬 Speaking & Presentations', order: 2 },
    vocabulary: { title: '📚 Vocabulary & Terminology', order: 3 },
    grammar: { title: '📖 Grammar & Structure', order: 4 },
    listening: { title: '🎧 Listening & Comprehension', order: 5 }
};

function renderEnglishPrompts(promptsData) {
    const groupedPrompts = {};
    
    Object.keys(ENGLISH_PROMPT_CATEGORIES).forEach(cat => {
        groupedPrompts[cat] = [];
    });

    promptsData.forEach(prompt => {
        if (groupedPrompts[prompt.category]) {
            groupedPrompts[prompt.category].push(prompt);
        }
    });

    let promptsHtml = '';
    
    const sortedCategories = Object.entries(ENGLISH_PROMPT_CATEGORIES)
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

window.registerEnglishPrompts = function(d) {
    const promptsData = window.ENGLISH_PROMPTS_DATA || [];
    const promptsHtml = renderEnglishPrompts(promptsData);

    return `
        <div class="section active">
            <div class="section-header">
                <h1>⚡ Промпты для изучения языка</h1>
                <p>Промпты для практики английского</p>
            </div>
            <div class="prompts-grid">
                ${promptsHtml}
            </div>
        </div>
    `;
};