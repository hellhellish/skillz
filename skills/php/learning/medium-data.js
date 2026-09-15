// =============================================
// ДАННЫЕ ДЛЯ УРОВНЯ MEDIUM (📚)
// =============================================

window.LEARNING_DATA_MEDIUM = {
    description: 'Продвинутые техники PHP. Паттерны, архитектура, оптимизация.',
    totalDuration: '8 часов',
    topics: [
        {
            id: 'patterns',
            icon: '🎨',
            title: 'Паттерны проектирования',
            description: 'Основные паттерны: Singleton, Factory, Observer, MVC',
            difficulty: 4,
            duration: '90 мин',
            completed: false,
            lessons: [
                { title: 'Паттерн Singleton', completed: false },
                { title: 'Паттерн Factory Method', completed: false },
                { title: 'Паттерн Observer', completed: false },
                { title: 'Архитектура MVC', completed: false }
            ]
        },
        {
            id: 'security',
            icon: '🛡️',
            title: 'Безопасность',
            description: 'Защита от SQL injection, XSS, CSRF, валидация данных',
            difficulty: 4,
            duration: '90 мин',
            completed: false,
            lessons: [
                { title: 'Защита от SQL Injection', completed: false },
                { title: 'Защита от XSS', completed: false },
                { title: 'Защита от CSRF', completed: false },
                { title: 'Хеширование паролей', completed: false }
            ]
        }
    ],
    resources: [
        { title: 'Design Patterns in PHP', url: 'https://refactoring.guru/design-patterns/php', icon: '🎨' },
        { title: 'OWASP Security', url: 'https://owasp.org/', icon: '🛡️' }
    ]
};