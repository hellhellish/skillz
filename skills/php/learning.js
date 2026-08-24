// PHP - Learning
window.registerPhpLearning = function(d, level) {
    const levelsData = {
        base: {
            title: 'Base — Основы PHP',
            items: [
                'Синтаксис: переменные, типы, операторы',
                'Условные конструкции, циклы (for, foreach, while)',
                'Функции: объявление, параметры, return',
                'Массивы: работа с индексированными и ассоциативными массивами',
                'Суперглобальные массивы ($_GET, $_POST, $_SESSION)',
                '<strong>Эволюция версий PHP (от 5.6 до 8.3):</strong>',
                '<div style="background:var(--bg-black50);padding:12px;border-radius:8px;margin:8px 0;font-size:13px;line-height:1.6;">' +
                '<strong>PHP 5.6 → 7.0 (Эпоха скорости):</strong> Zend Engine III, скорость в 2-3 раза выше, скалярные типы (int, float, string, bool), типы возврата, операторы ?? и <=>, Throwable.<br><br>' +
                '<strong>PHP 7.1 → 7.3 (Эра удобства):</strong> Nullable типы (?string), void, деструктуризация массивов, гибкий Heredoc.<br><br>' +
                '<strong>PHP 7.4 (Мост к PHP 8):</strong> Стрелочные функции (fn), типизированные свойства, null coalescing assignment (??=), spread в массивах.<br><br>' +
                '<strong>PHP 8.0 (Революция синтаксиса):</strong> JIT, Union Types (int|float), Named Arguments, Атрибуты (#[Route]), Match выражение, Nullsafe оператор (?->), Constructor Property Promotion.<br><br>' +
                '<strong>PHP 8.1:</strong> Enums, Fibers, Readonly свойства, тип never, spread для строковых ключей.<br><br>' +
                '<strong>PHP 8.2:</strong> Readonly классы, DNF Types ((A&B)|null), константы в трейтах.<br><br>' +
                '<strong>PHP 8.3 (актуальный минимум):</strong> Типизированные константы класса (const string VERSION), json_validate(), атрибут #[Override].' +
                '</div>'
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
};