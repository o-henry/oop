class Credentials {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public _username(): string {
    return this.username;
  }

  public _password(): string {
    return this.password;
  }
}

export class ApiClinet {
  private credentials: Credentials;

  constructor(credentials: Credentials) {
    this.credentials = credentials;
  }
}
