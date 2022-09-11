class HomepageController {
    constructor(private userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public execute(request: Request): Response {
        const user = this.userRepository.getById(request.get("userId"));
        user.change_password(new_password);
        this.userRepository.save(user);
    }
}

export {};
