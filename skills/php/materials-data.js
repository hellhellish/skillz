// skills/php/materials-data.js

window.PHP_MATERIALS_DATA = {
    categories: [
        {
            title: '📖 Документация',
            items: [
                { title: 'PHP Manual (php.net)', url: '#' },
                { title: 'Laravel Documentation', url: '#' },
                { title: 'Symfony Documentation', url: '#' },
                { title: '📖 Официальная документация PHP', url: 'https://www.php.net/docs.php' },
                { title: '🎓 PHP The Right Way', url: 'https://phptherightway.com/' }
            ]
        },
        {
            title: '📚 Книги',
            items: [
                '"PHP 8.0 — Официальное руководство"',
                '"Laravel: The Ultimate Guide"',
                '"Clean Code" — Robert Martin',
                '"Patterns of Enterprise Application Architecture"'
            ]
        },
        {
            title: '🎓 Курсы',
            items: [
                'Laracasts — видеоуроки по Laravel',
                'SymfonyCasts — по Symfony',
                'PHP Academy — базовый PHP'
            ]
        },
        {
            title: '📚 Архитектура и паттерны',
            items: [
                'DDD (Domain-Driven Design)',
                'SOLID принципы',
                'Паттерны: Factory, Singleton, Repository',
                'CQRS, Event Sourcing'
            ]
        },
        {
            title: '🛠 Инструменты',
            items: [
                'PHPStan / Psalm — статический анализ',
                'PHPUnit — тестирование',
                'Xdebug — отладка',
                'Blackfire — профилирование'
            ]
        }
    ],

    faqTitle: '🎯 Топ-10 вопросов на собеседовании по эволюции PHP',

    faq: [
        {
            question: 'Почему в PHP 7 скорость выросла в разы, а в PHP 8 с JIT — не так сильно?',
            answer: 'PHP 7 переписали движок (Zend Engine III): уменьшили потребление памяти, оптимизировали работу с переменными. PHP 8 добавил JIT, но в вебе (I/O bound: БД, сеть, файлы) он не даёт прироста — там узкое место не CPU. JIT полезен для вычислений: парсинг, графы, ML.',
            color: 'var(--skin-color)'
        },
        {
            question: 'Чем match отличается от switch?',
            answer: 'Match возвращает значение, использует строгое сравнение (===), не требует break, выбрасывает UnhandledMatchError если нет совпадения.',
            color: '#3fb950'
        },
        {
            question: 'Что такое Nullsafe оператор и чем он лучше isset?',
            answer: '$user?->getAddress()?->getCity() — возвращает null если любой элемент цепочки null. Короче, но главное — работает только с методами/свойствами, а isset с чем угодно.',
            color: '#d2991d'
        },
        {
            question: 'Что такое Attributes и зачем они, если были Docblock-аннотации?',
            answer: 'Нативный синтаксис #[Route(\'/path\')] вместо @Route в комментариях. Парсятся через Reflection API, не требуют внешних библиотек, проверяются на этапе компиляции, типизированы.',
            color: 'var(--skin-color)'
        },
        {
            question: 'Что такое Enums и чем они лучше констант?',
            answer: 'Enum — это полноценный класс: может иметь методы, интерфейсы, трейты, типизированные значения. Status::Active — объект со строгой типизацией, исключает «магические строки».',
            color: '#3fb950'
        },
        {
            question: 'Что такое readonly и зачем это нужно?',
            answer: 'Свойство/класс, которые можно инициализировать только один раз. Иммутабельность для DTO, Value Objects — защита от случайных изменений.',
            color: '#d2991d'
        },
        {
            question: 'Union Types и Intersection Types — в чём разница?',
            answer: 'Union (int|float) — значение может быть ОДНИМ из перечисленных типов. Intersection (Countable&Iterator) — значение должно удовлетворять ВСЕМ типам одновременно.',
            color: 'var(--skin-color)'
        },
        {
            question: 'Что такое Constructor Property Promotion?',
            answer: 'Сокращённый синтаксис: __construct(private string $name, public int $age) {} — автоматически создаёт свойства, присваивает значения и типизирует.',
            color: '#3fb950'
        },
        {
            question: 'Что такое never тип?',
            answer: 'Функция НИКОГДА не возвращает значение: всегда бросает исключение или вызывает exit/die. Помогает статическому анализу понимать, что код после вызова недостижим.',
            color: '#d2991d'
        },
        {
            question: 'Какие изменения обратной совместимости чаще всего ломают проекты при апгрейде?',
            answer: 'PHP 8: неявное преобразование null в пустую строку — strlen(null) теперь Warning. PHP 8: сравнение строки с числом — 0 == "foo" теперь false. PHP 8: удалены старые функции (each(), create_function()). PHP 8.1: implicit incompatible float to int — Deprecated.',
            color: 'var(--skin-color)'
        }
    ]
};