/**
 * 추첨을 통해 선정된 관람객에게 공연을 무료로 관람할 수 있는 초대장 발송.
 * 이벤트 당첨된 사람
 *  - 초대장을 티켓으로 교환후 입장
 * 이벤트 당첨되지 않은 사람
 *  - 티켓을 구매후 입장
 */

class Invitation {
  private when: Date;
}

class Ticket {
  private fee: number;

  getFee() {
    return this.fee;
  }
}

class Bag {
  private amount: number;
  private invitation: Invitation;
  private ticket: Ticket;

  hasInvitational() {
    return this.invitation !== null;
  }

  hasTicket() {
    return this.ticket !== null;
  }

  setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  minusAmount(amount: number) {
    this.amount -= amount;
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }
}
