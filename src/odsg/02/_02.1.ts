interface Logger {
  log(message: string): void;
}

class FileLogger implements Logger {
  private formatter: Formatter;

  constructor(formatter: Formatter) {
    // Formatter is a dependency of FileLogger.
    this.formatter = formatter;
  }
  // ________ : the service ready for use immediately after instantiation.

  public log(message: string): void {
    const formattedMessage = this.formatter.format(message);
  }
}

class Formatter {
  public format(msg: string) {
    msg.split("");
  }
}

const logger = new FileLogger(new Formatter());
logger.log("A message");

export {};
