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
                <div class="material-category" style="grid-column: 1 / -1;">
                    <h3>🎯 Топ-10 вопросов на собеседовании по эволюции PHP</h3>
                    <div style="font-size:14px;color:var(--text-black700);line-height:1.8;">
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid var(--skin-color);">
                            <strong>1. Почему в PHP 7 скорость выросла в разы, а в PHP 8 с JIT — не так сильно?</strong><br>
                            PHP 7 переписали движок (Zend Engine III): уменьшили потребление памяти, оптимизировали работу с переменными. PHP 8 добавил JIT, но в вебе (I/O bound: БД, сеть, файлы) он не даёт прироста — там узкое место не CPU. JIT полезен для вычислений: парсинг, графы, ML.
                        </div>
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid #3fb950;">
                            <strong>2. Чем match отличается от switch?</strong><br>
                            Match возвращает значение, использует строгое сравнение (===), не требует break, выбрасывает UnhandledMatchError если нет совпадения.
                        </div>
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid #d2991d;">
                            <strong>3. Что такое Nullsafe оператор и чем он лучше isset?</strong><br>
                            $user?->getAddress()?->getCity() — возвращает null если любой элемент цепочки null. Короче, но главное — работает только с методами/свойствами, а isset с чем угодно.
                        </div>
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid var(--skin-color);">
                            <strong>4. Что такое Attributes и зачем они, если были Docblock-аннотации?</strong><br>
                            Нативный синтаксис #[Route('/path')] вместо @Route в комментариях. Парсятся через Reflection API, не требуют внешних библиотек, проверяются на этапе компиляции, типизированы.
                        </div>
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid #3fb950;">
                            <strong>5. Что такое Enums и чем они лучше констант?</strong><br>
                            Enum — это полноценный класс: может иметь методы, интерфейсы, трейты, типизированные значения. Status::Active — объект со строгой типизацией, исключает «магические строки».
                        </div>
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid #d2991d;">
                            <strong>6. Что такое readonly и зачем это нужно?</strong><br>
                            Свойство/класс, которые можно инициализировать только один раз. Иммутабельность для DTO, Value Objects — защита от случайных изменений.
                        </div>
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid var(--skin-color);">
                            <strong>7. Union Types и Intersection Types — в чём разница?</strong><br>
                            Union (int|float) — значение может быть ОДНИМ из перечисленных типов. Intersection (Countable&Iterator) — значение должно удовлетворять ВСЕМ типам одновременно.
                        </div>
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid #3fb950;">
                            <strong>8. Что такое Constructor Property Promotion?</strong><br>
                            Сокращённый синтаксис: __construct(private string $name, public int $age) {} — автоматически создаёт свойства, присваивает значения и типизирует.
                        </div>
                        <div style="margin-bottom:12px;padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid #d2991d;">
                            <strong>9. Что такое never тип?</strong><br>
                            Функция НИКОГДА не возвращает значение: всегда бросает исключение или вызывает exit/die. Помогает статическому анализу понимать, что код после вызова недостижим.
                        </div>
                        <div style="padding:12px;background:var(--bg-black50);border-radius:8px;border-left:3px solid var(--skin-color);">
                            <strong>10. Какие изменения обратной совместимости чаще всего ломают проекты при апгрейде?</strong><br>
                            PHP 8: неявное преобразование null в пустую строку — strlen(null) теперь Warning. PHP 8: сравнение строки с числом — 0 == "foo" теперь false. PHP 8: удалены старые функции (each(), create_function()). PHP 8.1: implicit incompatible float to int — Deprecated.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};