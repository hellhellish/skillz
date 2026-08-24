// English - Learning
window.registerEnglishLearning = function(d, level) {
    const levelsData = {
        base: {
            title: 'Base — Основы',
            items: [
                'Алфавит, произношение, базовые звуки',
                'To be, to have, to do — базовые глаголы',
                'Present Simple vs Present Continuous',
                'Базовые предлоги (in, on, at, to, for)',
                'Числительные, время, дни недели, месяцы'
            ],
            progress: 80
        },
        light: {
            title: 'Light — Начальный',
            items: [
                'Past Simple, Past Continuous',
                'Будущее время: will vs going to',
                'Модальные глаголы (can, could, must, should)',
                'Степени сравнения прилагательных',
                'Базовые фразовые глаголы (get up, turn on, etc.)'
            ],
            progress: 60
        },
        medium: {
            title: 'Medium — Средний',
            items: [
                'Present Perfect vs Past Simple',
                'Условные предложения (0,1,2 типы)',
                'Passive Voice (страдательный залог)',
                'Reported Speech (косвенная речь)',
                'Техническая лексика: разработка, IT-термины'
            ],
            progress: 40
        },
        hard: {
            title: 'Hard — Продвинутый',
            items: [
                'Past Perfect, Future Perfect',
                'Условные 3-го типа (Mixed Conditionals)',
                'Inversion (инверсия) и cleft sentences',
                'Идиомы и продвинутая лексика для бизнеса',
                'Акцент, интонация, связная речь'
            ],
            progress: 20
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
                        <p>1. Выберите правильную форму: "I ___ to the store yesterday."</p>
                        <div class="exam-options">
                            <label><input type="radio" name="q1" value="a"> go</label>
                            <label><input type="radio" name="q1" value="b"> went</label>
                            <label><input type="radio" name="q1" value="c"> have gone</label>
                        </div>
                    </div>
                    <div class="exam-question">
                        <p>2. "If I ___ you, I would study more." — правильный вариант:</p>
                        <div class="exam-options">
                            <label><input type="radio" name="q2" value="a"> was</label>
                            <label><input type="radio" name="q2" value="b"> were</label>
                            <label><input type="radio" name="q2" value="c"> had been</label>
                        </div>
                    </div>
                    <div class="exam-question">
                        <p>3. "She said she ___ the report by Friday."</p>
                        <div class="exam-options">
                            <label><input type="radio" name="q3" value="a"> will finish</label>
                            <label><input type="radio" name="q3" value="b"> would finish</label>
                            <label><input type="radio" name="q3" value="c"> finished</label>
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