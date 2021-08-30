class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || "2주";
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return ` 이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }

  isRewardsEligible(user) {
    return user.isRewardsEligible && user.active;
  }

  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.9;
    }
  }
}

// 부모 클래스에 추가하는 모든 메서드는 자식 클래스가 상속받는다. 자식클래스에 필요하지 않은 메서드를 부모클래스에 추가하면 자식 클래스가 쉽게 비대해진다.

const coupon = new Coupon(5);
coupon.getPriceText(); // '$ 5'
coupon.getExpirationMessage();

export default Coupon;
