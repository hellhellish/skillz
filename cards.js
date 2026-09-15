// cards.js

function renderCardsSection(d) {
    const cards = d.cards || [];

    if (cards.length === 0) {
        return `
            <div class="section active">
                <div class="section-header">
                    <h1>Cards</h1>
                </div>
                <p class="cards-description">No cards for this stack.</p>
            </div>
        `;
    }

    // used by bindCardButtons() and showAllCards()
    window._cardsData = cards;

    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    return `
        <div class="section active">
            <div class="section-header">
                <h1>Cards</h1>
                <p>Изучайте новые термины с помощью карточек</p>
            </div>
            <div class="cards-actions">
                <button class="show-all-cards-btn">📚 Показать все карточки</button>
            </div>
            <div id="card-container">
                <div class="card-box">
                    <div class="card-question">${randomCard.question}</div>
                    <button class="card-reveal-btn">Показать ответ</button>
                    <div class="card-answer">${randomCard.answer}</div>
                </div>
                <button id="next-card-btn">Следующая карточка</button>
            </div>
            <div class="cards-counter">Всего карточек: ${cards.length}</div>
        </div>
    `;
}

window.renderCardsSection = renderCardsSection;