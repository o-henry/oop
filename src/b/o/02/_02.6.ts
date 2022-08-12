import { ServiceLocator } from "./_02.5";

class HomepageController {
  private locator: ServiceLocator;

  constructor(locator: ServiceLocator) {
    this.locator = locator;
  }

  public excute(request: Request): Response { 
      user = this.locator.get(EntityManger.className)
            .getRepository(User.className)
            .getById(request.get(;userId))

      return this.locator.get(ResponseFactory.className)
        .create().withContent(this.locator.get(TemplateRenderer.className).render('homepage.html.twig', ['user' => user]), 'text/html')
  }
}

export {};
