// 작업 관련 데이터는 생성자 대신 메서드 인자로 전달한다.

class EntityManager {
  private entity: object;

  constructor(entity: object) {
    this.entity = entity;
  }

  public save(): void {}
}

const user = new User();
const comment = new Comment();

let entityManager = new EntityManager(user);
entityManger.save();
