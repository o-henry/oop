import * as R from "ramda";

class Order {
    private constructor() {}
    /**
     * @role API
     * impure
     * */
    cancel(orderLine: string[] = []): void {
        R.empty(orderLine);
    }

    /** @role API */
    // changeDeliveryAddress(deliveryAddress: DeliveryAddress): void {
    //     if (this.wasCancelled) {
    //         throw new Error(`Order was already cancelled`);
    //     }
    // }
}

export {};
