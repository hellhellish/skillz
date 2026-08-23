// ===== PHP DEVELOPER STACK =====
registerStack('php', {
    meta: {
        icon: '🐘',
        title: 'PHP Developer',
        subtitle: 'Middle → Senior / Tech Lead',
        level: 'Middle+'
    },

    stats: {
        skills: { done: 13, total: 20 },
        faq: 22,
        experience: 5
    },

    sections: {
        // ===== ОБЗОР =====
        overview: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>📊 Обзор — ${d.meta.title}</h1>
                    <p>Уровень: <strong style="color:var(--accent)">${d.meta.subtitle}</strong></p>
                </div>
                <div class="stats-row">
                    <div class="stat-card">
                        <div class="stat-value">${d.stats.skills.done}/${d.stats.skills.total}</div>
                        <div class="stat-label">Навыков освоено</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${d.stats.faq}</div>
                        <div class="stat-label">Вопросов к собесам</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${d.stats.experience}+</div>
                        <div class="stat-label">Лет опыта</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">4</div>
                        <div class="stat-label">Активных цели</div>
                    </div>
                </div>
                <div class="card">
                    <h3>🚀 Быстрый доступ</h3>
                    <p style="font-size:14px;color:var(--muted)">
                        → <a href="#" onclick="switchSection('roadmap')" style="color:var(--accent)">Роадмап</a> — что изучаю прямо сейчас<br>
                        → <a href="#" onclick="switchSection('faq')" style="color:var(--accent)">FAQ</a> — тренировка перед собесом<br>
                        → <a href="#" onclick="switchSection('resume')" style="color:var(--accent)">Резюме</a> — актуализировать
                    </p>
                </div>
            </div>
        `,

        // ===== РЕЗЮМЕ =====
        resume: (d) => `
            <div class="section active">
                <div class="profile-header">
                    <div class="avatar">${d.meta.icon}</div>
                    <h2>Алексей Петров</h2>
                    <span class="title">${d.meta.title}</span><br>
                    <span class="level">🎖 ${d.meta.subtitle}</span>
                </div>
                
                <div class="card">
                    <h3>💡 Обо мне</h3>
                    <p style="font-size:14px">PHP-разработчик с 5+ годами опыта. Специализация: высоконагруженные системы, Laravel, Symfony, микросервисная архитектура. Работал с проектами от 10k до 5M+ пользователей. Хочу расти в Tech Lead / Architect.</p>
                </div>
                
                <div class="card-grid">
                    <div class="card">
                        <h3>🔑 Ключевые компетенции</h3>
                        <p>
                            <span class="badge badge-blue">PHP 8.x</span>
                            <span class="badge badge-blue">Laravel</span>
                            <span class="badge badge-blue">Symfony</span>
                            <span class="badge badge-blue">MySQL/PostgreSQL</span>
                            <span class="badge badge-blue">Redis</span>
                            <span class="badge badge-blue">RabbitMQ</span>
                            <span class="badge badge-blue">Docker</span>
                            <span class="badge badge-blue">REST API</span>
                            <span class="badge badge-blue">PHPUnit</span>
                        </p>
                    </div>
                    <div class="card">
                        <h3>🌍 Языки</h3>
                        <p style="font-size:14px">Русский — Native<br>English — B2 (читаю документацию, прохожу собесы)</p>
                    </div>
                </div>
                
                <div class="card">
                    <h3>🏢 Опыт работы</h3>
                    <div class="timeline">
                        <div class="tl-item">
                            <div class="tl-date">2023 — н.в.</div>
                            <div class="tl-role">Middle PHP Developer</div>
                            <div class="tl-company">HighLoad E-commerce</div>
                            <div class="tl-details">— Переписал критичные участки с монолита на сервисы<br>— Оптимизировал запросы: среднее время ответа упало с 800ms до 120ms<br>— Внедрил Redis-кеширование (hit rate 95%)<br>— Code review для 4 разработчиков</div>
                        </div>
                        <div class="tl-item">
                            <div class="tl-date">2020 — 2023</div>
                            <div class="tl-role">Junior PHP Developer</div>
                            <div class="tl-company">Digital Agency</div>
                            <div class="tl-details">— Разработка CRM на Laravel<br>— Интеграция платёжных систем (Stripe, PayPal)<br>— Написание тестов (покрытие 80%+)</div>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <h3>📈 Навыки</h3>
                    ${[
                        ['PHP 8.x (match, enum, fibers)', 88, 'var(--green)'],
                        ['Laravel (Eloquent, Queues, Events)', 90, 'var(--green)'],
                        ['Symfony (DI, Messenger, Workflow)', 65, 'var(--yellow)'],
                        ['MySQL (индексы, EXPLAIN, оптимизация)', 78, 'var(--accent)'],
                        ['PostgreSQL (JSONB, полнотекст)', 50, 'var(--yellow)'],
                        ['Redis (кеширование, очереди)', 75, 'var(--accent)'],
                        ['RabbitMQ / Kafka', 55, 'var(--yellow)'],
                        ['Docker / docker-compose', 70, 'var(--accent)'],
                        ['REST API (OpenAPI, версионирование)', 85, 'var(--green)'],
                        ['PHPUnit / TDD', 65, 'var(--yellow)'],
                        ['Архитектура (DDD, CQRS)', 45, 'var(--orange)'],
                        ['CI/CD (GitLab CI, GitHub Actions)', 60, 'var(--yellow)']
                    ].map(([name, lvl, color]) => `
                        <div class="skill-row">
                            <div class="skill-label"><span>${name}</span><span style="font-size:11px;color:var(--muted)">${lvl}%</span></div>
                            <div class="skill-bar"><div class="skill-fill" style="width:${lvl}%;background:${color}"></div></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,

        // ===== ЦЕЛИ =====
        goals: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>🎯 Цели</h1>
                    <p>Краткосрочные и долгосрочные</p>
                </div>
                <div class="card-grid">
                    <div class="card">
                        <h3>📅 6 месяцев</h3>
                        ${[
                            'Освоить Symfony на уровне Middle+',
                            'Написать микросервис с gRPC',
                            'Пройти курс по системному дизайну',
                            'Провести архитектурный ревью'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="php_goal_6m_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div class="card">
                        <h3>🏆 Год</h3>
                        ${[
                            'Вырасти до Senior PHP Developer',
                            'Вести backend-команду из 3+ человек',
                            'Выступить на PHP-конференции',
                            'Контрибьютить в Laravel/Symfony core'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="php_goal_year_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                </div>
            </div>
        `,

        // ===== РОАДМАП =====
        roadmap: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>🗺️ Роадмап → Senior / Tech Lead PHP</h1>
                    <p>Что уже умею, что в процессе, что в планах</p>
                </div>
                <div class="card-grid">
                    <div class="card">
                        <h3>✅ Завершено</h3>
                        ${[
                            'PHP 8.x: match, enum, readonly, promoted properties',
                            'Laravel: Eloquent ORM на продвинутом уровне',
                            'REST API с авторизацией через Sanctum/Passport',
                            'Очереди: Jobs, Failed Jobs, Horizon',
                            'Кеширование: Redis, Cache Tags, стратегии инвалидации',
                            'PHPUnit: Unit + Feature тесты, моки'
                        ].map(t => `<div class="check-item"><input type="checkbox" checked data-ct-id="php_done_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div class="card">
                        <h3>🔄 В процессе</h3>
                        ${[
                            'Symfony Messenger + Workflow Component',
                            'DDD: агрегаты, доменные события, bounded context',
                            'CQRS и Event Sourcing (на практике)',
                            'OpenTelemetry / мониторинг PHP-приложений'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="php_progress_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div class="card">
                        <h3>📋 План</h3>
                        ${[
                            'Swoole / RoadRunner (асинхронный PHP)',
                            'Микросервисы на PHP (gRPC, service mesh)',
                            'Архитектурный аудит: провести ревью крупного проекта',
                            'Менторство 3+ разработчиков',
                            'Выступление на PHP Russia / Podlodka PHP'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="php_plan_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                </div>
            </div>
        `,

        // ===== FAQ =====
        faq: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>❓ FAQ для собеседований</h1>
                    <p>${d.stats.faq} подготовленных вопросов</p>
                </div>
                <div class="card">
                    ${[
                        { 
                            q: 'Разница между абстрактным классом и интерфейсом в PHP?', 
                            a: '<strong>Абстрактный класс</strong> может содержать реализацию методов и свойства. Наследуется через extends (только один). <strong>Интерфейс</strong> только описывает сигнатуры методов без реализации (до PHP 8.0). Реализуется через implements (можно несколько). С PHP 8.0 в интерфейсах можно объявлять константы.' 
                        },
                        { 
                            q: 'Как работает autoloading в Composer?', 
                            a: 'Composer генерирует autoloader на основе PSR-4 и classmap. При первом обращении к классу PHP вызывает автозагрузчик, который по FQCN находит файл в указанной директории. Оптимизация: <code>composer dump-autoload -o</code> генерирует полный classmap, ускоряя загрузку в продакшене.' 
                        },
                        { 
                            q: 'Что такое N+1 проблема и как её решать в Laravel?', 
                            a: '<strong>N+1 проблема:</strong> выполняется 1 запрос для получения N записей + N запросов для связанных данных. <strong>Решение в Laravel:</strong> eager loading через <code>with(\'relation\')</code>. Для вложенных: <code>with(\'relation.nested\')</code>. Можно глобально запретить lazy loading в AppServiceProvider.' 
                        },
                        { 
                            q: 'Объясни жизненный цикл запроса в Laravel', 
                            a: '1. Entry point: public/index.php<br>2. Загрузка Composer autoloader<br>3. Создание Application (Service Container)<br>4. Загрузка Service Providers<br>5. Запрос попадает в HTTP Kernel<br>6. Проходит через Middleware stack<br>7. Роутер находит контроллер<br>8. Выполняется контроллер → возвращает Response<br>9. Response проходит обратно через Middleware<br>10. Отправляется клиенту' 
                        },
                        { 
                            q: 'Статическая и динамическая область видимости в PHP (late static binding)?', 
                            a: '<strong>self::</strong> привязывается на этапе компиляции к классу, где определён. <strong>static::</strong> — late static binding, резолвится во время выполнения к классу, который вызвал метод. Полезно при наследовании: static:: вернёт дочерний класс, даже если метод определён в родителе.' 
                        },
                        { 
                            q: 'Как оптимизировать медленный SQL-запрос?', 
                            a: '1. EXPLAIN ANALYZE — смотрю план выполнения<br>2. Проверяю индексы (WHERE, JOIN, ORDER BY колонки)<br>3. Избегаю SELECT *, беру только нужные колонки<br>4. Смотрю на размер данных (возможно нужен шардинг/партиционирование)<br>5. Кеширование результата в Redis если данные редко меняются<br>6. Рефакторинг на несколько простых запросов вместо одного сложного' 
                        },
                        { 
                            q: 'Разница между InnoDB и MyISAM в MySQL?', 
                            a: '<strong>InnoDB:</strong> поддерживает транзакции (ACID), внешние ключи, row-level locking. Лучше для частых записей. По умолчанию с MySQL 5.5.<br><strong>MyISAM:</strong> не поддерживает транзакции, table-level locking, быстрее на чтение. Раньше использовался для логов/аналитики. Сейчас почти всегда выбирают InnoDB.' 
                        }
                    ].map((item, i) => `
                        <div class="faq-item">
                            <div class="faq-q">${i+1}. ${item.q} <span>▼</span></div>
                            <div class="faq-a">${item.a}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,

        // ===== МАТЕРИАЛЫ =====
        materials: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>📚 Материалы</h1>
                    <p>Полезные ресурсы и ссылки</p>
                </div>
                <div class="card">
                    <h3>📖 Книги</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 "PHP 8: The Right Way"</li>
                        <li style="padding:6px 0;font-size:14px;">📌 "Laravel: Up & Running"</li>
                        <li style="padding:6px 0;font-size:14px;">📌 "Clean Code" — Robert Martin</li>
                        <li style="padding:6px 0;font-size:14px;">📌 "Design Patterns in PHP"</li>
                    </ul>
                </div>
                <div class="card">
                    <h3>🔧 Инструменты</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 PHPStorm / VS Code</li>
                        <li style="padding:6px 0;font-size:14px;">📌 XDebug — дебаггинг</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Blackfire — профилирование</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Docker + Laravel Sail</li>
                    </ul>
                </div>
                <div class="card">
                    <h3>📝 Блоги и сообщества</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 Laravel News</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Symfony Blog</li>
                        <li style="padding:6px 0;font-size:14px;">📌 PHP Subreddit</li>
                    </ul>
                </div>
            </div>
        `,

        // ===== БАЗА ЗНАНИЙ =====
        knowledge: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>🧠 База знаний</h1>
                    <p>Ключевые концепции и ссылки</p>
                </div>
                <div class="card">
                    <h3>🏗 Архитектура</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 DDD: Entity, Value Object, Aggregate, Repository</li>
                        <li style="padding:6px 0;font-size:14px;">📌 CQRS: разделение команд и запросов</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Event Sourcing: хранение событий вместо состояния</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Hexagonal Architecture (Ports & Adapters)</li>
                        <li style="padding:6px 0;font-size:14px;">📌 SOLID принципы в PHP</li>
                    </ul>
                </div>
                <div class="card">
                    <h3>⚡ Производительность</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 OPcache настройка и профилирование</li>
                        <li style="padding:6px 0;font-size:14px;">📌 JIT в PHP 8.x</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Swoole / RoadRunner для долгоживущих процессов</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Профилирование через XDebug / Blackfire</li>
                    </ul>
                </div>
                <div class="card">
                    <h3>🔒 Безопасность</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 OWASP Top 10 для PHP</li>
                        <li style="padding:6px 0;font-size:14px;">📌 SQL Injection: parameterized queries</li>
                        <li style="padding:6px 0;font-size:14px;">📌 XSS: htmlspecialchars(), CSP заголовки</li>
                        <li style="padding:6px 0;font-size:14px;">📌 CSRF защита в Laravel/Symfony</li>
                    </ul>
                </div>
            </div>
        `,

        // ===== ПРОМПТЫ =====
        prompts: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>⚡ Промпты для нейросетей</h1>
                    <p>Базовые промпты для работы с AI в PHP</p>
                </div>
                <div class="card">
                    <h3>🧠 Архитектура</h3>
                    <div style="background:var(--bg);padding:16px;border-radius:8px;font-size:13px;color:var(--muted);border-left:3px solid var(--accent);">
                        <p style="margin-bottom:8px;font-weight:600;color:var(--text);">Промпт:</p>
                        "Спроектируй архитектуру для [описание приложения] на PHP. Используй DDD и репозиторий-паттерн. Опиши структуру папок, основные классы и взаимодействие между слоями."
                    </div>
                </div>
                <div class="card">
                    <h3>📝 Генерация кода</h3>
                    <div style="background:var(--bg);padding:16px;border-radius:8px;font-size:13px;color:var(--muted);border-left:3px solid var(--green);">
                        <p style="margin-bottom:8px;font-weight:600;color:var(--text);">Промпт:</p>
                        "Напиши PHP класс для [задача]. Используй PHP 8.x синтаксис (match, enum, promoted properties). Добавь PHPDoc и базовые unit-тесты."
                    </div>
                </div>
                <div class="card">
                    <h3>🔍 Рефакторинг</h3>
                    <div style="background:var(--bg);padding:16px;border-radius:8px;font-size:13px;color:var(--muted);border-left:3px solid var(--orange);">
                        <p style="margin-bottom:8px;font-weight:600;color:var(--text);">Промпт:</p>
                        "Проанализируй этот PHP-код и предложи рефакторинг с улучшением: читаемости, производительности, соблюдения SOLID. Код: [вставить код]."
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
