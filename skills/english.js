registerStack('english', {
    meta: {
        icon: '🇬🇧',
        title: 'English Language',
        subtitle: 'B1 → C1 Advanced',
        level: 'Intermediate (B1+)'
    },

    stats: {
        skills: { done: 8, total: 16 },
        faq: 18,
        experience: 3
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
        `,

        resume: (d) => `
            <div class="section active">
                <div class="profile-header">
                    <div class="avatar">🇬🇧</div>
                    <h2>English Learning</h2>
                    <span class="title">${d.meta.title}</span><br>
                    <span class="level">🎖 ${d.meta.subtitle}</span>
                </div>

                <div class="card">
                    <h3>💡 О себе (на английском)</h3>
                    <p style="font-size:14px">I'm a software developer learning English to work in international teams and pass technical interviews. Currently at B1+ level, aiming for C1. I can read technical documentation, watch conferences, and hold conversations on work topics. I need to improve fluency, accent reduction, and business vocabulary.</p>
                </div>

                <div class="card-grid">
                    <div class="card">
                        <h3>🔑 Фокус-области</h3>
                        <p>
                            <span class="badge badge-blue">Technical English</span>
                            <span class="badge badge-blue">Business Communication</span>
                            <span class="badge badge-blue">Interview Practice</span>
                            <span class="badge badge-blue">Writing (emails/docs)</span>
                            <span class="badge badge-blue">Listening (podcasts)</span>
                        </p>
                    </div>
                    <div class="card">
                        <h3>📊 Текущий уровень</h3>
                        <p style="font-size:14px">Общий: B1+<br>Чтение: B2<br>Аудирование: B1<br>Говорение: A2-B1<br>Письмо: B1</p>
                    </div>
                </div>

                <div class="card">
                    <h3>📖 История изучения</h3>
                    <div class="timeline">
                        <div class="tl-item">
                            <div class="tl-date">2024 — н.в.</div>
                            <div class="tl-role">Самостоятельное изучение + разговорный клуб</div>
                            <div class="tl-company">English for Tech</div>
                            <div class="tl-details">— 2 раза в неделю разговорная практика<br>— Читаю технические статьи на Medium/Dev.to<br>— Смотрю доклады с конференций без субтитров<br>— Веду дневник на английском</div>
                        </div>
                        <div class="tl-item">
                            <div class="tl-date">2022 — 2023</div>
                            <div class="tl-role">Курсы Intermediate English</div>
                            <div class="tl-company">SkyEng / Italki</div>
                            <div class="tl-details">— Занятия с носителем 1 раз в неделю<br>— Грамматика B1 (все времена, модальные глаголы)<br>— Начало технического английского</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>📈 Языковые навыки</h3>
                    ${[
                        ['Reading (чтение документации, статей)', 70, 'var(--skin-color)'],
                        ['Listening (подкасты, конференции)', 50, '#d2991d'],
                        ['Speaking (разговорная речь)', 40, '#f85149'],
                        ['Writing (email, документация)', 55, '#d2991d'],
                        ['Grammar (времена, модальные глаголы)', 60, '#d2991d'],
                        ['Vocabulary (технический)', 65, '#d2991d'],
                        ['Vocabulary (бизнес)', 45, '#f85149'],
                        ['Pronunciation (акцент, интонация)', 30, '#f85149']
                    ].map(([name, lvl, color]) => `
                        <div class="skill-row">
                            <div class="skill-label"><span>${name}</span><span style="font-size:11px;color:var(--text-black700)">${lvl}%</span></div>
                            <div class="skill-bar"><div class="skill-fill" style="width:${lvl}%;background:${color}"></div></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,

        learning: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>📖 Learning</h1>
                    <p>Уровни сложности</p>
                </div>
                <div class="learning-levels">
                    <button class="level-btn active" data-level="base">Base</button>
                    <button class="level-btn" data-level="light">Light</button>
                    <button class="level-btn" data-level="medium">Medium</button>
                    <button class="level-btn" data-level="hard">Hard</button>
                    <button class="level-btn" data-level="exam">Exam</button>
                </div>
                <div class="level-content active" data-level="base">
                    <h4>Base — Основы</h4>
                    <ul>
                        <li>Алфавит, произношение, базовые звуки</li>
                        <li>To be, to have, to do — базовые глаголы</li>
                        <li>Present Simple vs Present Continuous</li>
                        <li>Базовые предлоги (in, on, at, to, for)</li>
                        <li>Числительные, время, дни недели, месяцы</li>
                    </ul>
                    <div class="progress-bar"><div class="progress-fill" style="width:80%;background:#3fb950"></div></div>
                    <p style="font-size:14px;color:var(--text-black700)">Прогресс: 80%</p>
                </div>
                <div class="level-content" data-level="light">
                    <h4>Light — Начальный</h4>
                    <ul>
                        <li>Past Simple, Past Continuous</li>
                        <li>Будущее время: will vs going to</li>
                        <li>Модальные глаголы (can, could, must, should)</li>
                        <li>Степени сравнения прилагательных</li>
                        <li>Базовые фразовые глаголы (get up, turn on, etc.)</li>
                    </ul>
                    <div class="progress-bar"><div class="progress-fill" style="width:60%;background:#d2991d"></div></div>
                    <p style="font-size:14px;color:var(--text-black700)">Прогресс: 60%</p>
                </div>
                <div class="level-content" data-level="medium">
                    <h4>Medium — Средний</h4>
                    <ul>
                        <li>Present Perfect vs Past Simple</li>
                        <li>Условные предложения (0,1,2 типы)</li>
                        <li>Passive Voice (страдательный залог)</li>
                        <li>Reported Speech (косвенная речь)</li>
                        <li>Техническая лексика: разработка, IT-термины</li>
                    </ul>
                    <div class="progress-bar"><div class="progress-fill" style="width:40%;background:#d2991d"></div></div>
                    <p style="font-size:14px;color:var(--text-black700)">Прогресс: 40%</p>
                </div>
                <div class="level-content" data-level="hard">
                    <h4>Hard — Продвинутый</h4>
                    <ul>
                        <li>Past Perfect, Future Perfect</li>
                        <li>Условные 3-го типа (Mixed Conditionals)</li>
                        <li>Inversion (инверсия) и cleft sentences</li>
                        <li>Идиомы и продвинутая лексика для бизнеса</li>
                        <li>Акцент, интонация, связная речь</li>
                    </ul>
                    <div class="progress-bar"><div class="progress-fill" style="width:20%;background:#f85149"></div></div>
                    <p style="font-size:14px;color:var(--text-black700)">Прогресс: 20%</p>
                </div>
                <div class="level-content" data-level="exam">
                    <h4>Exam — Экзамен</h4>
                    <p>Проверьте свои знания!</p>
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
                </div>
            </div>
        `,

        cards: (d) => {
            const cards = [
                { question: 'Что значит "break a leg"?', answer: 'Это идиома, означающая "удачи!" (перед выступлением).' },
                { question: 'Какая разница между "affect" и "effect"?', answer: 'Affect — глагол (влиять), effect — существительное (результат).' },
                { question: 'Что такое "phrasal verb" в английском?', answer: 'Фразовый глагол — сочетание глагола с предлогом или наречием, которое меняет смысл (give up, turn on, etc.).' },
                { question: 'Как сказать на английском: "Мне нужно привыкнуть к этому"?', answer: 'I need to get used to this.' },
                { question: 'Что означает "hit the nail on the head"?', answer: 'Точно сказать, попасть в точку.' },
                { question: 'Когда используется "Present Perfect" вместо "Past Simple"?', answer: 'Present Perfect используется, когда важен результат или связь с настоящим, а не точное время действия.' },
                { question: 'Как правильно: "I have a lot of work" или "I have many work"?', answer: 'Правильно: "I have a lot of work" (work — неисчисляемое существительное).' }
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
                        <h3>📱 Приложения</h3>
                        <ul>
                            <li>Duolingo — ежедневная практика</li>
                            <li>Anki — карточки с технической лексикой</li>
                            <li>Italki — занятия с носителями</li>
                            <li>Grammarly — проверка письма</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h3>🎧 Подкасты / YouTube</h3>
                        <ul>
                            <li>BBC 6 Minute English</li>
                            <li>Syntax.fm (web dev podcast)</li>
                            <li>Flutter YouTube channel</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h3>📖 Книги</h3>
                        <ul>
                            <li>English Grammar in Use (Murphy)</li>
                            <li>Technical Writing for Software Engineers</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h3>📚 Грамматика B1-B2</h3>
                        <ul>
                            <li>Present Perfect vs Past Simple</li>
                            <li>Conditionals (0,1,2,3)</li>
                            <li>Passive Voice</li>
                            <li>Reported Speech</li>
                            <li>Modal Verbs (must, should, have to, may)</li>
                        </ul>
                    </div>
                    <div class="material-category">
                        <h3>💬 Техническая лексика</h3>
                        <ul>
                            <li>Deployment, CI/CD pipeline</li>
                            <li>API endpoints, payload, authentication</li>
                            <li>Agile, Scrum, sprint, backlog</li>
                            <li>Bug, feature, improvement, refactoring</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,

        prompts: (d) => `
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