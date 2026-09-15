// base/thread-18-async.js

window.registerLearningThread('base', {
    id: 'thread-18-async',
    order: 18,
    icon: '',
    title: 'Асинхронность и очереди',
    summary: 'Swoole, RoadRunner, Fibers, RabbitMQ, Kafka, Redis Queue.',
    topics: [
        {
            id: 1801,
            title: 'Swoole и RoadRunner',
            summary: 'Асинхронные рантаймы для PHP. Чем отличаются от классического FPM.',
            content: `<p>Содержание в разработке...</p>`
        },
        {
            id: 1802,
            title: 'Fibers',
            summary: 'Механизм приостановки и возобновления выполнения. Отличие от генераторов.',
            content: `<p>Содержание в разработке...</p>`
        },
        {
            id: 1803,
            title: 'RabbitMQ',
            summary: 'Очереди сообщений: exchange, queue, consumer. Гарантии доставки.',
            content: `<p>Содержание в разработке...</p>`
        },
        {
            id: 1804,
            title: 'Kafka',
            summary: 'Event streaming, партиции, consumer groups. Когда выбирать вместо RabbitMQ.',
            content: `<p>Содержание в разработке...</p>`
        },
        {
            id: 1805,
            title: 'Redis Queue и фоновые задачи',
            summary: 'Очереди на Redis, Horizon, воркеры, retry, dead letter queue.',
            content: `<p>Содержание в разработке...</p>`
        }
    ]
});