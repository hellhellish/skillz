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
        overview: (d) => `
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
        `,

        resume: (d) => `
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
        `,

        learning: (d, level) => {
            const levelsData = {
                base: {
                    title: 'Base — Основы PHP',
                    items: [
                        'Синтаксис: переменные, типы, операторы',
                        'Условные конструкции, циклы (for, foreach, while)',
                        'Функции: объявление, параметры, return',
                        'Массивы: работа с индексированными и ассоциативными массивами',
                        'Суперглобальные массивы ($_GET, $_POST, $_SESSION)'
                    ],
                    progress: 90
                },
                light: {
                    title: 'Light — Начальный',
                    items: [
                        'ООП: классы, объекты, наследование, инкапсуляция',
                        'Исключения (try-catch-finally)',
                        'Работа с файлами (fopen, fwrite, file_get_contents)',
                        'Работа с базами данных через PDO и MySQLi',
                        'Composer: установка и автозагрузка'
                    ],
                    progress: 85
                },
                medium: {
                    title: 'Medium — Средний',
                    items: [
                        'Laravel: MVC, маршруты, контроллеры, Blade',
                        'Eloquent ORM: модели, отношения, скоупы',
                        'REST API: создание, версионирование, документация',
                        'Middleware, события, очереди',
                        'Тестирование (PHPUnit, Pest)'
                    ],
                    progress: 65
                },
                hard: {
                    title: 'Hard — Продвинутый',
                    items: [
                        'Symfony: компоненты, сервисы, конфигурация',
                        'Doctrine ORM: продвинутые запросы, события',
                        'Архитектура: DDD, Clean Architecture, CQRS',
                        'Микросервисы: RabbitMQ, Kafka, API Gateway',
                        'Кеширование: Redis, Memcached'
                    ],
                    progress: 40
                },
                exam: {
                    title: 'Exam — Экзамен',
                    items: [],
                    progress: 0,
                    isExam: true
                }
            };

            const activeLevel = level || 'base';
            const levelData = levelsData[activeLevel];

            let levelsHtml = '';

            for (const [key, data] of Object.entries(levelsData)) {
                const isActive = (key === activeLevel);
                const contentClass = `level-content ${isActive ? 'active' : ''}`;
                
                let itemsHtml = data.items.map(item => `<li>${item}</li>`).join('');
                let progressHtml = '';

                if (data.isExam) {
                    itemsHtml = `
                        <div class="exam-questions">
                            <div class="exam-question">
                                <p>1. Какой метод используется для соединения с MySQL через PDO?</p>
                                <div class="exam-options">
                                    <label><input type="radio" name="q1" value="a"> mysqli_connect()</label>
                                    <label><input type="radio" name="q1" value="b"> new PDO()</label>
                                    <label><input type="radio" name="q1" value="c"> mysql_connect()</label>
                                </div>
                            </div>
                            <div class="exam-question">
                                <p>2. Что делает метод __construct() в классе?</p>
                                <div class="exam-options">
                                    <label><input type="radio" name="q2" value="a"> Вызывается автоматически при создании объекта</label>
                                    <label><input type="radio" name="q2" value="b"> Уничтожает объект</label>
                                    <label><input type="radio" name="q2" value="c"> Клонирует объект</label>
                                </div>
                            </div>
                            <div class="exam-question">
                                <p>3. Какой паттерн используется в Laravel для работы с базой данных?</p>
                                <div class="exam-options">
                                    <label><input type="radio" name="q3" value="a"> Active Record</label>
                                    <label><input type="radio" name="q3" value="b"> Data Mapper</label>
                                    <label><input type="radio" name="q3" value="c"> Repository</label>
                                </div>
                            </div>
                            <button class="exam-submit-btn">Проверить ответы</button>
                        </div>
                    `;
                } else {
                    progressHtml = `
                        <div class="progress-bar"><div class="progress-fill" style="width:${data.progress}%;background:#3fb950"></div></div>
                        <p style="font-size:14px;color:var(--text-black700)">Прогресс: ${data.progress}%</p>
                    `;
                }

                levelsHtml += `
                    <div class="${contentClass}" data-level="${key}">
                        <h4>${data.title}</h4>
                        <ul>${itemsHtml}</ul>
                        ${progressHtml}
                    </div>
                `;
            }

            return `
                <div class="section active">
                    <div class="section-header">
                        <h1>📖 Learning — ${d.meta.title}</h1>
                    </div>
                    ${levelsHtml}
                </div>
            `;
        },

        cards: (d) => {
            const cards = [
                { question: 'Что такое PHP?', answer: 'PHP — язык программирования для веб-разработки, выполняемый на сервере. Расшифровывается как "PHP: Hypertext Preprocessor".' },
                { question: 'Какая разница между == и === в PHP?', answer: '== сравнивает значения после приведения типов, === сравнивает значения и типы без приведения.' },
                { question: 'Что такое Composer?', answer: 'Composer — менеджер зависимостей для PHP, позволяющий устанавливать и обновлять библиотеки.' },
                { question: 'Что такое PSR (PHP Standards Recommendations)?', answer: 'PSR — рекомендации по стандартизации кода в PHP, включая автозагрузку, интерфейсы и стиль написания.' },
                { question: 'Что такое Laravel Eloquent ORM?', answer: 'Eloquent — ActiveRecord реализация для работы с базами данных в Laravel, использующая модели для взаимодействия с таблицами.' },
                { question: 'Как работает middleware в Laravel?', answer: 'Middleware — это слой между запросом и контроллером, который может проверять, фильтровать или изменять запрос до его обработки.' },
                { question: 'Что такое autoloading в PHP?', answer: 'Автозагрузка — механизм, который автоматически загружает PHP-классы при их первом использовании, без необходимости явно подключать файлы.' }
            ];
            window._cardsData = cards;
            const randomCard = cards[Math.floor(Math.random() * cards.length)];
            return `
                <div class="section active">
                    <div class="section-header">
                        <h1>🃏 Cards</h1>
                        <p>Изучайте новые термины с помощью карточек</p>
                    </div>
                    <p class="cards-description">Нажмите "Показать ответ", чтобы проверить себя.</p>
                    <div id="card-container">
                        <div class="card-box">
                            <div class="card-question">${randomCard.question}</div>
                            <button class="card-reveal-btn">Показать ответ</button>
                            <div class="card-answer">${randomCard.answer}</div>
                        </div>
                        <button id="next-card-btn">Следующая карточка</button>
                    </div>
                </div>
            `;
        },

        materials: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>📚 Materials & Knowledge Base</h1>
                    <p>Ресурсы и база знаний</p>
                </div>
                <div class="materials-grid">
                    <div class="material-category">
                        <h3>📖 Документация</h3>
                        <ul>
                            <li><a href="#">PHP Manual (php.net)</a></li>
                            <li><a href="#">Laravel Documentation</a></li>
                            <li><a href="#">Symfony Documentation</a></li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h3>📚 Книги</h3>
                        <ul>
                            <li>"PHP 8.0 — Официальное руководство"</li>
                            <li>"Laravel: The Ultimate Guide"</li>
                            <li>"Clean Code" — Robert Martin</li>
                            <li>"Patterns of Enterprise Application Architecture"</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h3>🎓 Курсы</h3>
                        <ul>
                            <li>Laracasts — видеоуроки по Laravel</li>
                            <li>SymfonyCasts — по Symfony</li>
                            <li>PHP Academy — базовый PHP</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h3>📚 Архитектура и паттерны</h3>
                        <ul>
                            <li>DDD (Domain-Driven Design)</li>
                            <li>SOLID принципы</li>
                            <li>Паттерны: Factory, Singleton, Repository</li>
                            <li>CQRS, Event Sourcing</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h3>🛠 Инструменты</h3>
                        <ul>
                            <li>PHPStan / Psalm — статический анализ</li>
                            <li>PHPUnit — тестирование</li>
                            <li>Xdebug — отладка</li>
                            <li>Blackfire — профилирование</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,

        prompts: (d) => `
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
        `
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