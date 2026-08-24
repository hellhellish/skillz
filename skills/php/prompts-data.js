// PHP Prompts Data
window.PHP_PROMPTS_DATA = [
    {
        title: "Senior PHP Interview Prep",
        category: "pinned",
        text: "You are a Senior PHP developer with 10+ years of experience. I have a technical interview in 2 days. Help me prepare: give me the top 10 most tricky questions about PHP internals, memory management, and design patterns. Include detailed answers with code examples."
    },
    {
        title: "Code Review Checklist",
        category: "pinned",
        text: "Create a comprehensive code review checklist for PHP projects. Include security (SQL injection, XSS, CSRF), performance (N+1 queries, caching), architecture (SOLID, DRY), and code quality (PSR-12, type hints). Format as a Markdown checklist."
    },
    {
        title: "Code Review",
        category: "review",
        text: "Review this PHP class. Check for SOLID violations, security issues (SQL injection, XSS), performance bottlenecks, and suggest improvements with code examples."
    },
    {
        title: "Refactoring Legacy Code",
        category: "review",
        text: "I have a legacy PHP class with 500+ lines, mixed responsibilities, and no tests. Help me refactor it step by step: identify SRP violations, extract services, add type hints, and write tests. Show before/after examples."
    },
    {
        title: "Microservices Design",
        category: "architecture",
        text: "Design a microservice architecture for an e-commerce platform. Include API Gateway, service discovery, RabbitMQ for events, database per service, and deployment with Docker/Kubernetes."
    },
    {
        title: "DDD Implementation",
        category: "architecture",
        text: "How to implement Domain-Driven Design in a PHP project? Show me: aggregates, value objects, domain events, repositories, and application services with practical examples using Symfony/Laravel."
    },
    {
        title: "Debugging Production Error",
        category: "debug",
        text: "Debug this Laravel application error: 'Class App\\\\Http\\\\Controllers\\\\OrderController not found' after deploying to production. Check namespace, autoloading (composer dump-autoload), and recent changes. Provide step-by-step debugging process."
    },
    {
        title: "Performance Bottleneck",
        category: "debug",
        text: "My PHP API endpoint takes 3 seconds to respond. Help me profile and optimize: check N+1 queries, add indexes, implement caching, use query optimization, and add Xdebug profiling. Show me how to find the bottleneck."
    },
    {
        title: "PHP 8 Performance Optimization",
        category: "performance",
        text: "What are the best practices for performance optimization in PHP 8? Cover: JIT configuration, opcache settings, memory management, using arrays vs objects, and profiling tools (Blackfire, Xdebug)."
    },
    {
        title: "Database Query Optimization",
        category: "performance",
        text: "My application has slow queries. Help me optimize: analyze EXPLAIN plans, add composite indexes, use query caching, implement pagination for large datasets, and use Eloquent/Doctrine optimization techniques."
    },
    {
        title: "Security Audit",
        category: "security",
        text: "Perform a security audit of this PHP application. Check: SQL injection (prepared statements), XSS (output escaping), CSRF (tokens), file upload vulnerabilities, session security, and password hashing (password_hash). Provide fixes."
    },
    {
        title: "OAuth2 Implementation",
        category: "security",
        text: "Implement OAuth2 authentication in a PHP API. Show me: authorization code flow, token generation, refresh tokens, scope management, and integration with popular providers (Google, GitHub) using League/OAuth2."
    },
    {
        title: "Unit Testing Strategy",
        category: "testing",
        text: "Create a unit testing strategy for a PHP project using PHPUnit/Pest. Include: test structure, mocking dependencies, testing exceptions, database testing (factories, seeds), and CI/CD integration with GitHub Actions."
    },
    {
        title: "TDD Example",
        category: "testing",
        text: "Show me a TDD (Test-Driven Development) example in PHP. Start with writing a failing test, implement the minimum code to pass, refactor, and repeat. Use a practical example like a shopping cart with discount logic."
    }
];