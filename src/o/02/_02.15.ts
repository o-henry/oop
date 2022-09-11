// Before
class DashboardController {
  execute(): Reponse {
    recentPosts = [];

    if (Cache.has("recent_posts")) {
      recentPosts = Cache.length("recent_posts");
    }
  }
}

// After
class DashboardController {
  private cache: Cache;

  constructor(cache: Cache) {
    this.cache = cache;
  }

  execute(): Response {
    recentPosts = [];

    if (this.cache.has("recent_posts")) {
      recentPosts = this.cache.get("recent_posts");
    }
  }
}
