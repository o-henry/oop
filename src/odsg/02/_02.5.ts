class ServiceLocator {
  private services: [];

  constructor() {
      this.services = [
          'logger' => new FileLogger(/* ... */)
      ]
  }
}

export {};
