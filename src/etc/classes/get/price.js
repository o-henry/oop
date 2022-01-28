class Copuon {
  constructor(price, expiration) {
    this._price = price;
    this.expiration = expiration || "2주";
  }

  get priceText() {
    return `$ ${this.price}`;
  }

  get expirationMessage() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    const newPrice = price.toString().replace(/[^\d]/g, "");
    this._price = parseInt(newPrice, 10);
  }
}
