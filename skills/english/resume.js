// English - Resume
window.registerEnglishResume = function(d) {
    return `
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
    `;
};