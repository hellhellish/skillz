// PHP - Materials
window.registerPhpMaterials = function(d) {
    return `
        <div class="section active">
            <div class="section-header">
                <h1>📚 Materials & Knowledge Base</h1>
                <p>Ресурсы и база знаний</p>
            </div>
            <div class="materials-grid">
                <div class="material-category">
                    <h3>📖 Документация</h3>
                    <ul>
                        <li><a href="#">PHP Manual (php.net)</a></li>
                        <li><a href="#">Laravel Documentation</a></li>
                        <li><a href="#">Symfony Documentation</a></li>
                    </ul>
                </div>
                <div class="material-category">
                    <h3>📚 Книги</h3>
                    <ul>
                        <li>"PHP 8.0 — Официальное руководство"</li>
                        <li>"Laravel: The Ultimate Guide"</li>
                        <li>"Clean Code" — Robert Martin</li>
                        <li>"Patterns of Enterprise Application Architecture"</li>
                    </ul>
                </div>
                <div class="material-category">
                    <h3>🎓 Курсы</h3>
                    <ul>
                        <li>Laracasts — видеоуроки по Laravel</li>
                        <li>SymfonyCasts — по Symfony</li>
                        <li>PHP Academy — базовый PHP</li>
                    </ul>
                </div>
                <div class="material-category">
                    <h3>📚 Архитектура и паттерны</h3>
                    <ul>
                        <li>DDD (Domain-Driven Design)</li>
                        <li>SOLID принципы</li>
                        <li>Паттерны: Factory, Singleton, Repository</li>
                        <li>CQRS, Event Sourcing</li>
                    </ul>
                </div>
                <div class="material-category">
                    <h3>🛠 Инструменты</h3>
                    <ul>
                        <li>PHPStan / Psalm — статический анализ</li>
                        <li>PHPUnit — тестирование</li>
                        <li>Xdebug — отладка</li>
                        <li>Blackfire — профилирование</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};