class HomepageController {
    constructor(
        private entityManager: EntityManager,
        private responseFactory: ResponseFactory,
        private templateRenderer: TemplateRenderer
    ) {
        this.entityManager = entityManager;
        this.responseFactory = responseFactory;
        this.templateRenderer = templateRenderer;
    }
}

export {};
