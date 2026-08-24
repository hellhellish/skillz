// English - Prompts
window.registerEnglishPrompts = function(d) {
    return `
        <div class="section active">
            <div class="section-header">
                <h1>⚡ Промпты для изучения языка</h1>
                <p>Промпты для практики английского</p>
            </div>
            <div class="card">
                <h3>📝 Practice writing</h3>
                <div style="background:var(--bg-black50);padding:16px;border-radius:8px;font-size:13px;color:var(--text-black700);border-left:3px solid var(--skin-color);">
                    <p style="margin-bottom:8px;font-weight:600;color:var(--text-black900);">Промпт:</p>
                    "Write a professional email to [client/colleague] about [topic]. Use formal tone, include greeting, purpose, details, call to action, and closing."
                </div>
            </div>
            <div class="card">
                <h3>💬 Speaking practice</h3>
                <div style="background:var(--bg-black50);padding:16px;border-radius:8px;font-size:13px;color:var(--text-black700);border-left:3px solid #3fb950;">
                    <p style="margin-bottom:8px;font-weight:600;color:var(--text-black900);">Промпт:</p>
                    "Describe a technical challenge you solved at work. Use STAR method: Situation, Task, Action, Result. Use past tenses and technical vocabulary."
                </div>
            </div>
        </div>
    `;
};