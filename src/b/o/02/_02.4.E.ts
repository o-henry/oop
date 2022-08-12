class Information {
    constructor(
        private host: string,
        private port: number,
        private username: string,
        private password: string,
        private database: string,
        private table: string
    ) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.database = database;
        this.table = table;
    }

    /**
     * getter..
     * */
}

class MySQLTableGateway {
    constructor(private information: Information) {
        this.information = information;
    }
}
