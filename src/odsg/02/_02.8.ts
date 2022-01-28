class HomepageController {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public execute(request: Request): Response {
    const user = this.userRepository.getById(request.get("userId"));
  }
}
