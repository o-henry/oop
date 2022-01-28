/* excercise */
export class FileCache implements Cache {
  private appConfig: AppConfig;

  constructor(appConfig: AppConfig) {
    this.appConfig = appConfig;
  }

  get(cacheKey: string): string {
    const directory = this.appConfig.get("cache.directory");
  }
}

/* answer */
class FileCache implements Cache {
  private cacheDirectory: string;

  constructor(cacheDirectory: string) {
    this.cacheDirectory = cacheDirectory;
  }
}
