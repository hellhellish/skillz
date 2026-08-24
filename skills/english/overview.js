// English - Overview
window.registerEnglishOverview = function(d) {
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
                    <div class="stat-label">Типовых ответов</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${d.stats.experience}+</div>
                    <div class="stat-label">Лет изучения</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">2</div>
                    <div class="stat-label">Активных цели</div>
                </div>
            </div>
            <div class="card">
                <h3>🎯 Goals</h3>
                <div class="card-grid">
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">📅 6 месяцев</h4>
                        ${[
                            'Сдать mock IELTS на 6.5+',
                            'Пройти техническое собеседование на английском',
                            '100 дней speaking practice (Everyday English)',
                            'Прочитать 3 технические книги в оригинале'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="english_goal_6m_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">🏆 Год</h4>
                        ${[
                            'Подтверждённый уровень B2/C1',
                            'Свободно проходить собеседования на английском',
                            'Выступить на англоязычной конференции',
                            'Смотреть фильмы/сериалы без субтитров'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="english_goal_year_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                </div>
            </div>
            <div class="card">
                <h3>🗺️ Roadmap → C1 Advanced</h3>
                <div class="card-grid">
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">✅ Освоено</h4>
                        ${[
                            'Present/Past/Future Simple, Continuous',
                            'Модальные глаголы (can, must, should, may)',
                            'Базовые времена Perfect (Present Perfect)',
                            'Техническая документация на английском',
                            'Написание простых email',
                            'Базовый small talk',
                            'Понимание субтитров к фильмам'
                        ].map(t => `<div class="check-item"><input type="checkbox" checked data-ct-id="english_done_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">🔄 В процессе</h4>
                        ${[
                            'Past Perfect / Future Perfect',
                            'Условные предложения (0,1,2,3 Conditionals)',
                            'Бизнес-лексика (meetings, negotiations)',
                            'Фразовые глаголы (топ-100)',
                            'Аудирование подкастов без субтитров'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="english_progress_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div>
                        <h4 style="font-size:16px;margin-bottom:8px;">📋 План</h4>
                        ${[
                            'C1 Advanced Grammar (inversion, cleft sentences)',
                            'Спонтанная речь без подготовки',
                            'Акцент — American English произношение',
                            'IELTS/TOEFL на 7.5+',
                            'Провести презентацию на английском',
                            'Пройти техническое собеседование полностью на английском'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="english_plan_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};