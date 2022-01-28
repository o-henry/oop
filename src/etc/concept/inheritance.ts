/**
 * 상속
 * 재사용 + 확장
 * 상위 클래스의 특성을 하위 클래스에서 물려받는 것, 하위 클래스에서는 더 필요한 속성을 확장할 수 있다.
 */

class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
