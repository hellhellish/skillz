// =============================================
// ДАННЫЕ ДЛЯ УРОВНЯ EXAM (🏆)
// =============================================

window.LEARNING_DATA_EXAM = {
    description: 'Мастерский уровень. Архитектура, высоконагруженные системы, лидерство.',
    totalDuration: '12 часов',
    topics: [
        {
            id: 'highload',
            icon: '🏗️',
            title: 'Высоконагруженные системы',
            description: 'Архитектура высоконагруженных систем, балансировка, кеширование',
            difficulty: 5,
            duration: '120 мин',
            completed: false,
            lessons: [
                { title: 'Архитектура высоконагруженных приложений', completed: false },
                { title: 'Балансировка нагрузки', completed: false },
                { title: 'Кеширование на всех уровнях', completed: false },
                { title: 'Шардирование баз данных', completed: false }
            ]
        },
        {
            id: 'architecture',
            icon: '🏛️',
            title: 'Архитектура приложений',
            description: 'Чистая архитектура, Hexagonal, Layered Architecture',
            difficulty: 5,
            duration: '90 мин',
            completed: false,
            lessons: [
                { title: 'Clean Architecture', completed: false },
                { title: 'Hexagonal Architecture', completed: false },
                { title: 'Layered Architecture', completed: false },
                { title: 'Event-Driven Architecture', completed: false }
            ]
        },
        {
            id: 'leadership',
            icon: '👨‍💼',
            title: 'Техническое лидерство',
            description: 'Team Lead, код-ревью, наставничество, архитектурные решения',
            difficulty: 4,
            duration: '60 мин',
            completed: false,
            lessons: [
                { title: 'Роль Team Lead', completed: false },
                { title: 'Код-ревью и стандарты', completed: false },
                { title: 'Наставничество (Mentoring)', completed: false },
                { title: 'Архитектурные решения', completed: false }
            ]
        }
    ],
    resources: [
        { title: 'System Design Interview', url: 'https://www.systemdesigninterview.com/', icon: '🏗️' },
        { title: 'Software Architecture Patterns', url: 'https://www.oreilly.com/', icon: '🏛️' },
        { title: 'Tech Lead Skills', url: 'https://thetechlead.substack.com/', icon: '👨‍💼' }
    ]
};