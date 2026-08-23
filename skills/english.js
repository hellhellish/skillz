// ===== ENGLISH LANGUAGE STACK =====
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
                    <h3>🚀 Быстрый доступ</h3>
                    <p style="font-size:14px;color:var(--muted)">
                        → <a href="#" onclick="switchSection('roadmap')" style="color:var(--accent)">Роадмап</a> — что учу прямо сейчас<br>
                        → <a href="#" onclick="switchSection('faq')" style="color:var(--accent)">Speaking Templates</a> — готовые ответы для собесов<br>
                        → <a href="#" onclick="switchSection('resume')" style="color:var(--accent)">Языковое резюме</a>
                    </p>
                </div>
            </div>
        `,

        // ===== РЕЗЮМЕ =====
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
                        ['Reading (чтение документации, статей)', 70, 'var(--accent)'],
                        ['Listening (подкасты, конференции)', 50, 'var(--yellow)'],
                        ['Speaking (разговорная речь)', 40, 'var(--orange)'],
                        ['Writing (email, документация)', 55, 'var(--yellow)'],
                        ['Grammar (времена, модальные глаголы)', 60, 'var(--yellow)'],
                        ['Vocabulary (технический)', 65, 'var(--yellow)'],
                        ['Vocabulary (бизнес)', 45, 'var(--orange)'],
                        ['Pronunciation (акцент, интонация)', 30, 'var(--orange)']
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
                            'Сдать mock IELTS на 6.5+',
                            'Пройти техническое собеседование на английском',
                            '100 дней speaking practice (Everyday English)',
                            'Прочитать 3 технические книги в оригинале'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="english_goal_6m_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div class="card">
                        <h3>🏆 Год</h3>
                        ${[
                            'Подтверждённый уровень B2/C1',
                            'Свободно проходить собеседования на английском',
                            'Выступить на англоязычной конференции',
                            'Смотреть фильмы/сериалы без субтитров'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="english_goal_year_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                </div>
            </div>
        `,

        // ===== РОАДМАП =====
        roadmap: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>🗺️ Роадмап → C1 Advanced</h1>
                    <p>Что уже умею, что в процессе, что в планах</p>
                </div>
                <div class="card-grid">
                    <div class="card">
                        <h3>✅ Освоено</h3>
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
                    <div class="card">
                        <h3>🔄 В процессе</h3>
                        ${[
                            'Past Perfect / Future Perfect',
                            'Условные предложения (0,1,2,3 Conditionals)',
                            'Бизнес-лексика (meetings, negotiations)',
                            'Фразовые глаголы (топ-100)',
                            'Аудирование подкастов без субтитров'
                        ].map(t => `<div class="check-item"><input type="checkbox" data-ct-id="english_progress_${t.replace(/\s/g,'_').slice(0,20)}"> ${t}</div>`).join('')}
                    </div>
                    <div class="card">
                        <h3>📋 План</h3>
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
        `,

        // ===== FAQ =====
        faq: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>❓ Speaking Templates & Ответы</h1>
                    <p>Заготовки для собеседований и общения</p>
                </div>
                <div class="card">
                    ${[
                        { 
                            q: 'Tell me about yourself (для собеса)', 
                            a: '<strong>Template:</strong> "I\'m a [role] with [X] years of experience in [field]. I specialize in [skills]. In my current role at [company], I [achievement]. I\'m looking for [what you want]."<br><br><strong>Пример:</strong> "I\'m a Flutter developer with 4 years of experience in mobile development. I specialize in cross-platform apps using Bloc and Clean Architecture. In my current role at FinTech Startup, I built a banking app and reduced app size by 40%. I\'m looking for a senior role where I can lead mobile projects."' 
                        },
                        { 
                            q: 'What are your strengths?', 
                            a: '<strong>Template:</strong> "I\'m good at [skill] because [reason/example]."<br><br><strong>Пример:</strong> "I\'m good at problem-solving. For example, when our app had performance issues, I profiled it with DevTools, found unnecessary rebuilds, and improved scroll performance by 60%."' 
                        },
                        { 
                            q: 'What are your weaknesses?', 
                            a: '<strong>Template:</strong> "I\'m working on [weakness]. To improve, I [action]."<br><br><strong>Пример:</strong> "I\'m working on my public speaking skills. To improve, I\'ve been presenting at team meetings and joined a local Toastmasters club."' 
                        },
                        { 
                            q: 'Why do you want to work here?', 
                            a: '<strong>Template:</strong> "I admire [company] because [reason]. I believe my skills in [area] can help with [goal]."<br><br><strong>Пример:</strong> "I admire your company because you\'re pushing Flutter for web. I believe my skills in widget optimization can help improve your web app performance."' 
                        },
                        { 
                            q: 'Describe a challenging project (STAR method)', 
                            a: '<strong>Template:</strong><br><strong>S</strong>ituation: "In my project..."<br><strong>T</strong>ask: "I needed to..."<br><strong>A</strong>ction: "I decided to..."<br><strong>R</strong>esult: "As a result..."' 
                        },
                        { 
                            q: 'Email: requesting something', 
                            a: '<strong>Subject:</strong> Request for [thing]<br><br><strong>Body:</strong><br>"Hi [Name],<br><br>I hope this email finds you well. I\'m writing to request [specific thing] for [reason].<br><br>Could you please [action] by [deadline]?<br><br>Thank you in advance!<br>Best regards,<br>[Your name]"' 
                        },
                        { 
                            q: 'Useful phrases for meetings', 
                            a: '<strong>Agreeing:</strong> "That\'s a good point." / "I completely agree."<br><strong>Disagreeing politely:</strong> "I see your point, but..." / "I\'m not sure I agree. Have we considered...?"<br><strong>Clarifying:</strong> "Could you elaborate on that?" / "Just to clarify..."<br><strong>Interrupting:</strong> "Sorry to interrupt, but..." / "Can I jump in here?"' 
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
                    <h1>📚 Ресурсы и материалы</h1>
                    <p>Что использую для изучения</p>
                </div>
                <div class="card">
                    <h3>📱 Приложения</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 Duolingo — ежедневная практика</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Anki — карточки с технической лексикой</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Italki — занятия с носителями</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Grammarly — проверка письма</li>
                    </ul>
                </div>
                <div class="card">
                    <h3>🎧 Подкасты / YouTube</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 BBC 6 Minute English</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Syntax.fm (web dev podcast)</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Flutter YouTube channel</li>
                    </ul>
                </div>
                <div class="card">
                    <h3>📖 Книги</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 English Grammar in Use (Murphy)</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Technical Writing for Software Engineers</li>
                    </ul>
                </div>
            </div>
        `,

        // ===== БАЗА ЗНАНИЙ =====
        knowledge: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>🧠 База знаний</h1>
                    <p>Грамматика, лексика, полезные фразы</p>
                </div>
                <div class="card">
                    <h3>📚 Грамматика B1-B2</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 Present Perfect vs Past Simple</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Conditionals (0,1,2,3)</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Passive Voice</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Reported Speech</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Modal Verbs (must, should, have to, may)</li>
                    </ul>
                </div>
                <div class="card">
                    <h3>💬 Техническая лексика</h3>
                    <ul style="list-style:none;padding:0;">
                        <li style="padding:6px 0;font-size:14px;">📌 Deployment, CI/CD pipeline</li>
                        <li style="padding:6px 0;font-size:14px;">📌 API endpoints, payload, authentication</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Agile, Scrum, sprint, backlog</li>
                        <li style="padding:6px 0;font-size:14px;">📌 Bug, feature, improvement, refactoring</li>
                    </ul>
                </div>
            </div>
        `,

        // ===== ПРОМПТЫ =====
        prompts: (d) => `
            <div class="section active">
                <div class="section-header">
                    <h1>⚡ Промпты для изучения языка</h1>
                    <p>Промпты для практики английского</p>
                </div>
                <div class="card">
                    <h3>📝 Practice writing</h3>
                    <div style="background:var(--bg);padding:16px;border-radius:8px;font-size:13px;color:var(--muted);border-left:3px solid var(--accent);">
                        <p style="margin-bottom:8px;font-weight:600;color:var(--text);">Промпт:</p>
                        "Write a professional email to [client/colleague] about [topic]. Use formal tone, include greeting, purpose, details, call to action, and closing."
                    </div>
                </div>
                <div class="card">
                    <h3>💬 Speaking practice</h3>
                    <div style="background:var(--bg);padding:16px;border-radius:8px;font-size:13px;color:var(--muted);border-left:3px solid var(--green);">
                        <p style="margin-bottom:8px;font-weight:600;color:var(--text);">Промпт:</p>
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