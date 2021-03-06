/**
 * @Topic { OOP }
 * 실제를 객체를 통해 모델링 한다.
 * 객체를 독립된 단위 로 파악하고자 하는것.
 * 데이터를 encapsulate하고 namespace 안에 보관한다.
 *
 * @Topic { abstract }
 *
 * Person 객체를 구현한다고 해보자.
 * 사람이 갖을 수 있는 상태와 행동을 구분할 수 있다.
 * 상태로 이름, 나이, 성별, 취미 등등 을 갖을 수 있다.
 * 행동으로 소개말과 인사말 등을 갖을 수 있다.
 *
 * 복잡한 것들을 단순한 모델로 변환하는,
 * 위와 같은 과정을 추상화 라고 한다.
 * 클래스를 통해 추상화 할 수 있고, 이를 통해 만들 객체들의 blueprint가 된다.
 *
 * @Topic { instance }
 * 객체 인스턴스는 클래스를 통해서 생성할 수 있다.
 * 객체는 클래스에 정의된 데이터와 함수(메서드) 를 갖는다.
 * 여러 객체는 공통된 기능을 갖을 수 있고, 따로 정의 할 수도 있다.
 *
 * @Topic { polymorphism }
 * 여러 객체 타입에 같은 기능을 정의할 수 있는 능력을 다형성 이라고한다.
 *
 * 자식 클래스로부터 또 다른 객체 인스턴스를 생성할 수 있다.
 */

// type Obj<T> = { [key: string]: T };

function createNewPerson(name: string) {
  let obj: Record<string, any> = {};

  obj.name = name;
  obj.greeting = function () {
    console.log(`Hi! I'm '${this.name}'.`);
  };
  return obj;
}

let henry = createNewPerson("Henry");

henry.greeting();

/* <-----------------refactoring-----------------> */

class Person {
  constructor(private name: string) {}

  public greeting() {
    console.log(`Hi! I'm '${this.name}'.`);
  }
}

let personA = new Person("Bob");
personA.greeting();
