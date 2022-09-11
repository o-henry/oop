
class FileLogger {}

interface Service  { 
  // "logger
}

class ServiceLocator {
  private services: [];

  constructor() {
      // client can retrieve by key like 'logger', 'debugger' ... etc
      this.services = [ 
          'logger' => new FileLogger(/* ... */),
          'debugger' => new debugger(/* ... */),
          'calculator' => new calculator(/* ... */)
      ]
  }

  public get(id: string): Map<K, V> { 

  }
}

export { ServiceLocator};
