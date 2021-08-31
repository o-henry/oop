/*
 *  캡슐화 (data hiding1)
 *  객체의 속성과 행위를 하나의 클래스라는 캡슐에 묶는 것
 *  캡슐화는 외부에서 객체의 내부 데이터로 접근하지 못하게 통제하여 정보를 은닉.
 *  데이터가 우연히 변경되거나 하는 등의 일을 방지한다.
 */

class BankAccount {
  constructor(balance: number) {
    this._balance = balance;
  }

  private _balance: number;

  public get balance(): number {
    return this._balance;
  }

  public set balnace(p: number) {
    this._balance = p;
  }

  public deposit(amount: number): void {
    this._balance += amount;
  }
}

let henry = new BankAccount(4000);

console.log(henry.balance);
henry.deposit(100);
console.log(henry.balance);
henry.balnace = 5000;
console.log(henry.balance);

export {};
