// PHP - Prompts
window.registerPhpPrompts = function(d) {
    return `
        <div class="section active">
            <div class="section-header">
                <h1>⚡ Промпты</h1>
                <p>Промпты для кодинга и изучения PHP</p>
            </div>
            <div class="card">
                <h3>💻 Code review</h3>
                <div style="background:var(--bg-black50);padding:16px;border-radius:8px;font-size:13px;color:var(--text-black700);border-left:3px solid var(--skin-color);">
                    <p style="margin-bottom:8px;font-weight:600;color:var(--text-black900);">Промпт:</p>
                    "Review this PHP class. Check for SOLID violations, security issues (SQL injection, XSS), performance bottlenecks, and suggest improvements with code examples."
                </div>
            </div>
            <div class="card">
                <h3>🏗 Architecture design</h3>
                <div style="background:var(--bg-black50);padding:16px;border-radius:8px;font-size:13px;color:var(--text-black700);border-left:3px solid #3fb950;">
                    <p style="margin-bottom:8px;font-weight:600;color:var(--text-black900);">Промпт:</p>
                    "Design a microservice architecture for an e-commerce platform. Include API Gateway, service discovery, RabbitMQ for events, database per service, and deployment with Docker/Kubernetes."
                </div>
            </div>
            <div class="card">
                <h3>🔧 Debugging</h3>
                <div style="background:var(--bg-black50);padding:16px;border-radius:8px;font-size:13px;color:var(--text-black700);border-left:3px solid #d2991d;">
                    <p style="margin-bottom:8px;font-weight:600;color:var(--text-black900);">Промпт:</p>
                    "Debug this Laravel application error: 'Class App\\\\Http\\\\Controllers\\\\OrderController not found' after deploying to production. Check namespace, autoloading, and recent changes."
                </div>
            </div>
        </div>
    `;
};