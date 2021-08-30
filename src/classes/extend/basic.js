import Coupon from "../constructor/problem";

// 2시간 동안만 사용할 수 있는 쿠폰을 생성
class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    // super 는 부모클래스의 생성자를 호출하기 때문에 부모클래스의 생성자에서 필요한 인수가 있다면 super를 이용해서 넘겨줄 수 있다.
    super(price);
    this.expiration = expiration || "2시간";
  }

  isRewardsEligible(user) {
    return super.isRewardsEligible(user) && this.price > 20;
  }

  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.8;
    }
  }
}

const flash = new FlashCoupon(10);
flash.price;

// getExpirationMessage는 부모 클래스에 있는 메서드지만, expiration 속성은 자식 클래스에 있는 값을 사용한다.
// chaining
flash.getExpirationMessage(); // '이 쿠폰은 2시간 후에 만료됩니다'

export { FlashCoupon };
