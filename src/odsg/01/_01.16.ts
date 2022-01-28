class Foo {
  public instantiatesMethod(): void {
    const logger = new Logger();
    logger.debug("..."); // Foo instantiates a Logger when needed.
  }

  public fetchMethod(): void {
    const logger = ServiceLocator.getLogger();
    logger.debug("...");
  }
}

class DependencyInjection {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  public someMethod(): void {
    this.logger.debug("...");
  }
}

class Logger {
  public debug(msg: string) {
    console.log(msg);
  }
}
export {};
