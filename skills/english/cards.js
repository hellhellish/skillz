// English - Cards
window.registerEnglishCards = function(d) {
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
};