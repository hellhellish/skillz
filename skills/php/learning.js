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