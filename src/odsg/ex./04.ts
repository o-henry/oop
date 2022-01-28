class MySQLTableGateway {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }
}

class Config {
  private host: string;
  private port: number;
  private username: string;
  private password: string;
  private database: string;
  private table: string;

  constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    table: string
  ) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.database = database;
    this.table = table;
  }
}
