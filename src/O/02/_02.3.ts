class ApiClinet {
    constructor(private username: string, private password: string) {
        // break cohesion.
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
