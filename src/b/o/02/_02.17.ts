class MeetupRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  public findUpcmoingMeetups(area: string): array {
    const now = new Date();
    return this.findUpcmoingMeetups(now, area);
  }
}
