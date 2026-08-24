// PHP - Cards
window.registerPhpCards = function(d) {
    const cards = [
        { question: 'Что такое PHP?', answer: 'PHP — язык программирования для веб-разработки, выполняемый на сервере. Расшифровывается как "PHP: Hypertext Preprocessor".' },
        { question: 'Какая разница между == и === в PHP?', answer: '== сравнивает значения после приведения типов, === сравнивает значения и типы без приведения.' },
        { question: 'Что такое Composer?', answer: 'Composer — менеджер зависимостей для PHP, позволяющий устанавливать и обновлять библиотеки.' },
        { question: 'Что такое PSR (PHP Standards Recommendations)?', answer: 'PSR — рекомендации по стандартизации кода в PHP, включая автозагрузку, интерфейсы и стиль написания.' },
        { question: 'Что такое Laravel Eloquent ORM?', answer: 'Eloquent — ActiveRecord реализация для работы с базами данных в Laravel, использующая модели для взаимодействия с таблицами.' },
        { question: 'Как работает middleware в Laravel?', answer: 'Middleware — это слой между запросом и контроллером, который может проверять, фильтровать или изменять запрос до его обработки.' },
        { question: 'Что такое autoloading в PHP?', answer: 'Автозагрузка — механизм, который автоматически загружает PHP-классы при их первом использовании, без необходимости явно подключать файлы.' }
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