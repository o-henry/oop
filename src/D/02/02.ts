/**
 * p68
 * @TODO 구현된 코드를 보고 아키텍처에 맞게 리팩토링 하자
 * @role infrastructure
 *
 * 개별 테스트가 가능한지 확인하기 → 불가능하다면 의존성에 문제가 있는 것이다.
 */

class Container {}

class ThisClassInfrastructureThing {
    private container: Container[];

    constructor() {}
    evalute(name: string, item: string[]) {
        try {
            this.container.includes(name);
            item.push(name);
        } catch {
            /* ... */
        }
    }
}

/** @role application service */
class ThisClassApplicationService {
    private thisClassInfrastructureThing: ThisClassInfrastructureThing;
    constructor() {}

    calculate(user: User) {
        const _name = user.getName();
        this.thisClassInfrastructureThing.evalute(_name, []); // anti pattern
    }
}

class User {
    constructor(private name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

export {};
