interface Cache {}

class FileCache implements Cache {
    constructor(private appConfig: AppConfig) {
        this.appConfig = appConfig;
    }

    public get(cacheKey: string): string {
        const directory = this.appConfig.get("cache.directory");
    }
}
