// PHP - Resume
window.registerPhpResume = function(d) {
    return `
        <div class="section active">
            <div class="profile-header">
                <div class="avatar">🐘</div>
                <h2>PHP Developer</h2>
                <span class="title">${d.meta.title}</span><br>
                <span class="level">🎖 ${d.meta.subtitle}</span>
            </div>

            <div class="card">
                <h3>💡 О себе</h3>
                <p style="font-size:14px">PHP-разработчик с 4+ годами опыта. Специализируюсь на бэкенд-разработке, проектировании API, оптимизации производительности и архитектуре. Работал с Laravel, Symfony, микросервисами и высоконагруженными проектами. Стремлюсь к позиции Senior/Team Lead.</p>
            </div>

            <div class="card-grid">
                <div class="card">
                    <h3>🔑 Ключевые навыки</h3>
                    <p>
                        <span class="badge badge-blue">PHP 8</span>
                        <span class="badge badge-blue">Laravel</span>
                        <span class="badge badge-blue">Symfony</span>
                        <span class="badge badge-blue">MySQL</span>
                        <span class="badge badge-blue">PostgreSQL</span>
                        <span class="badge badge-blue">Docker</span>
                        <span class="badge badge-blue">Redis</span>
                        <span class="badge badge-blue">RabbitMQ</span>
                        <span class="badge badge-blue">REST API</span>
                        <span class="badge badge-blue">GraphQL</span>
                    </p>
                </div>
                <div class="card">
                    <h3>📊 Текущий уровень</h3>
                    <p style="font-size:14px">PHP: 8/10<br>Laravel: 8/10<br>Symfony: 6/10<br>MySQL: 7/10<br>Docker: 7/10<br>Архитектура: 6/10</p>
                </div>
            </div>

            <div class="card">
                <h3>📖 Опыт работы</h3>
                <div class="timeline">
                    <div class="tl-item">
                        <div class="tl-date">2022 — н.в.</div>
                        <div class="tl-role">Senior PHP Developer</div>
                        <div class="tl-company">FinTech Company</div>
                        <div class="tl-details">— Разработка платежной системы на Symfony<br>— Архитектура микросервисов с RabbitMQ<br>— Оптимизация запросов (10x ускорение)<br>— Внедрение CI/CD</div>
                    </div>
                    <div class="tl-item">
                        <div class="tl-date">2019 — 2022</div>
                        <div class="tl-role">Middle PHP Developer</div>
                        <div class="tl-company">E-commerce Platform</div>
                        <div class="tl-details">— Разработка на Laravel, MySQL<br>— Интеграция с платежными системами<br>— Написание API для мобильных приложений</div>
                    </div>
                </div>
            </div>

            <div class="card">
                <h3>📈 Навыки</h3>
                ${[
                    ['PHP (синтаксис, типизация, 8+)', 85, 'var(--skin-color)'],
                    ['Laravel (Eloquent, Blade, Queues)', 80, 'var(--skin-color)'],
                    ['Symfony (Doctrine, Security)', 60, '#d2991d'],
                    ['MySQL/PostgreSQL (оптимизация)', 70, '#d2991d'],
                    ['Docker (контейнеризация)', 70, '#d2991d'],
                    ['Redis (кеширование, очереди)', 60, '#d2991d'],
                    ['RabbitMQ (брокеры)', 55, '#d2991d'],
                    ['Архитектура (DDD, Clean)', 50, '#f85149'],
                    ['CI/CD (GitHub Actions, GitLab)', 60, '#d2991d'],
                    ['Go/Node.js (микросервисы)', 30, '#f85149']
                ].map(([name, lvl, color]) => `
                    <div class="skill-row">
                        <div class="skill-label"><span>${name}</span><span style="font-size:11px;color:var(--text-black700)">${lvl}%</span></div>
                        <div class="skill-bar"><div class="skill-fill" style="width:${lvl}%;background:${color}"></div></div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};