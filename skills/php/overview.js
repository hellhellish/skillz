// PHP - Overview
window.registerPhpOverview = function(d) {
    return `
        <div class="section active">
            <div class="section-header">
                <h1>📊 Overview — ${d.meta.title}</h1>
                <p>Уровень: <strong style="color:var(--skin-color)">${d.meta.subtitle}</strong></p>
            </div>
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-value">${d.stats.skills.done}/${d.stats.skills.total}</div>
                    <div class="stat-label">Тем освоено</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${d.stats.faq}</div>
                    <div class="stat-label">Типовых решений</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${d.stats.experience}+</div>
                    <div class="stat-label">Лет опыта</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">3</div>
                    <div class="stat-label">Активных целей</div>
                </div>
            </div>
            <div class="card">
                <h3>🎯 Goals</h3>
                <div class="card-grid">
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">📅 6 месяцев</h4>
                        ${[
                            'Освоить Symfony 6+ на продвинутом уровне',
                            'Написать 3 микросервиса на PHP с RabbitMQ',
                            'Подготовиться к собеседованию на Senior',
                            'Внедрить DDD в текущий проект'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="php_goal_6m_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">🏆 Год</h4>
                        ${[
                            'Стать Senior PHP Developer',
                            'Освоить Go/Node.js для микросервисов',
                            'Выступить с докладом на PHP-конференции',
                            'Внедрить CI/CD с GitHub Actions'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="php_goal_year_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                </div>
            </div>
            <div class="card">
                <h3>🗺️ Roadmap → Senior</h3>
                <div class="card-grid">
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">✅ Освоено</h4>
                        ${[
                            'PHP 7/8 синтаксис, типизация',
                            'Laravel 8/9/10 (Eloquent, Blade, Queues)',
                            'REST API, JSON, XML, SOAP',
                            'MySQL, PostgreSQL, оптимизация запросов',
                            'Docker, docker-compose, базовые настройки',
                            'Git, Git Flow, работа в команде',
                            'ООП, SOLID, паттерны (Factory, Singleton)'
                        ].map(t => `<div class="check-item"><input type="checkbox" checked data-ct-id="php_done_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">🔄 В процессе</h4>
                        ${[
                            'Symfony 6+ (Doctrine, Security, Events)',
                            'DDD (Domain-Driven Design)',
                            'Микросервисы, RabbitMQ, Kafka',
                            'Redis, кеширование, очереди',
                            'Продвинутый SQL (оконные функции, CTE)'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="php_progress_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">📋 План</h4>
                        ${[
                            'Kubernetes, Helm, облачные платформы (AWS/GCP)',
                            'Go/Node.js для микросервисов',
                            'Паттерны распределённых систем (Saga, Circuit Breaker)',
                            'Elasticsearch, Logstash, Kibana (ELK)',
                            'Системы мониторинга (Prometheus, Grafana)'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="php_plan_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};