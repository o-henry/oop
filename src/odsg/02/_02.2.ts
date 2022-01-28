interface Logger {
  log(message: string): void;
}

class FileLogger implements Logger {
  private formatter: Formatter;
  private logFilePath: string;

  constructor(formatter: Formatter, logFilePath: string) {
    // Formatter is a dependency of FileLogger.
    this.formatter = formatter;
    this.logFilePath = logFilePath;
  }

  public log(message: string): void {
    const formattedMessage = this.formatter.format(message);

    file_put_contents(this.logFilePath, formattedMessage, FILE_APPEND);
  }
}

class Formatter {
  public format(msg: string) {
    msg.split("");
  }
}

const logger = new FileLogger(new Formatter(), "..src");
logger.log("A message");

export {};
