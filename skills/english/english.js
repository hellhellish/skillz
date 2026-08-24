// English - Main
registerStack('english', {
    meta: {
        icon: '🇬🇧',
        title: 'English Language',
        subtitle: 'B1 → C1 Advanced',
        level: 'Intermediate (B1+)'
    },

    stats: {
        skills: { done: 8, total: 16 },
        faq: 18,
        experience: 3
    },

    sections: {
        overview: (d) => window.registerEnglishOverview(d),
        resume: (d) => window.registerEnglishResume(d),
        learning: (d, level) => window.registerEnglishLearning(d, level),
        cards: (d) => window.registerEnglishCards(d),
        materials: (d) => window.registerEnglishMaterials(d),
        prompts: (d) => window.registerEnglishPrompts(d)
    },

    footer: {
        overview: (d) => `
            <div class="section-footer">
                <div class="footer-left">
                    <span>📅 Последнее обновление: сегодня</span>
                </div>
                <div class="footer-right">
                    <button class="btn-print" onclick="window.print()">🖨️ Печать / PDF</button>
                </div>
            </div>
        `
    }
});