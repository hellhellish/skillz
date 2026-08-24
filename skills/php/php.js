// PHP - Main
registerStack('php', {
    meta: {
        icon: '🐘',
        title: 'PHP Developer',
        subtitle: 'Middle → Senior',
        level: 'Middle (4+ years)'
    },

    stats: {
        skills: { done: 12, total: 20 },
        faq: 14,
        experience: 4
    },

    sections: {
        overview: (d) => window.registerPhpOverview(d),
        resume: (d) => window.registerPhpResume(d),
        learning: (d, level) => window.registerPhpLearning(d, level),
        cards: (d) => window.registerPhpCards(d),
        materials: (d) => window.registerPhpMaterials(d),
        prompts: (d) => window.registerPhpPrompts(d)
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