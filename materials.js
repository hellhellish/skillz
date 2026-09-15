// materials.js

function renderMaterialsSection(d) {
    const m = d.materials || {};

    const categories = m.categories || [];
    const faq = m.faq || [];

    if (categories.length === 0 && faq.length === 0) {
        return `
            <div class="section active">
                <div class="section-header">
                    <h1>📚 Materials & Knowledge Base</h1>
                </div>
                <p>No materials for this stack.</p>
            </div>
        `;
    }

    let categoriesHtml = '';
    categories.forEach(cat => {
        const items = (cat.items || []).map(item => {
            if (typeof item === 'string') {
                return `<li>${item}</li>`;
            }
            return `<li><a href="${item.url || '#'}">${item.title}</a></li>`;
        }).join('');

        categoriesHtml += `
            <div class="material-category">
                <h3>${cat.title}</h3>
                <ul>${items}</ul>
            </div>
        `;
    });

    let faqHtml = '';
    if (faq.length > 0) {
        faqHtml = `
            <div class="material-category" style="grid-column: 1 / -1;">
                <h3>${m.faqTitle || 'FAQ'}</h3>
                <div style="font-size:14px;color:var(--text-black700);line-height:1.8;">
                    ${faq.map((item, i) => {
                        const borderColor = item.color || 'var(--skin-color)';
                        return `
                            <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid ${borderColor};">
                                <strong>${i + 1}. ${item.question}</strong><br>
                                ${item.answer}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    return `
        <div class="section active">
            <div class="section-header">
                <h1>📚 Materials & Knowledge Base</h1>
                <p>Ресурсы и база знаний</p>
            </div>
            <div class="materials-grid">
                ${categoriesHtml}
                ${faqHtml}
            </div>
        </div>
    `;
}

window.renderMaterialsSection = renderMaterialsSection;