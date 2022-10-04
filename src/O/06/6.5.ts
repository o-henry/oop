class User {
    private userRepository: UserRepository;
    /* ... */
    getById(id: string): User {
        const user = this.userRepository.getById(id); // anti-pattern
        if (!user) {
            throw Error(`User not found ${id}`);
        }
        return user;
    }
}

// anti-pattern : need to use interface
class UserRepository {
    getById(id: string): User {
        return new User();
    }
}

export {};
