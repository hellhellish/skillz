// =============================================
// ДАННЫЕ ДЛЯ УРОВНЯ HARD (🚀)
// =============================================

window.LEARNING_DATA_HARD = {
    description: 'Экспертный уровень. Микросервисы, DDD, тестирование, DevOps.',
    totalDuration: '10 часов',
    topics: [
        {
            id: 'microservices',
            icon: '☁️',
            title: 'Микросервисная архитектура',
            description: 'Проектирование, взаимодействие, масштабирование микросервисов',
            difficulty: 5,
            duration: '120 мин',
            completed: false,
            lessons: [
                { title: 'Принципы микросервисов', completed: false },
                { title: 'Межсервисное взаимодействие', completed: false },
                { title: 'API Gateway', completed: false },
                { title: 'Service Discovery', completed: false }
            ]
        },
        {
            id: 'ddd',
            icon: '🧩',
            title: 'Domain-Driven Design',
            description: 'Предметно-ориентированное проектирование, агрегаты, события',
            difficulty: 5,
            duration: '90 мин',
            completed: false,
            lessons: [
                { title: 'Введение в DDD', completed: false },
                { title: 'Агрегаты и Value Objects', completed: false },
                { title: 'Domain Events', completed: false },
                { title: 'Repository Pattern', completed: false }
            ]
        }
    ],
    resources: [
        { title: 'Microservices Patterns', url: 'https://microservices.io/', icon: '☁️' },
        { title: 'Domain-Driven Design', url: 'https://www.domainlanguage.com/', icon: '🧩' }
    ]
};