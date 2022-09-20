/** @role domain events */
class OrderWasCancelled {
    constructor(private orderId: OrderId) {
        this.orderId = orderId;
    }

    // static create(orderId: OrderId): OrderWasCancelled {
    //     return new OrderWasCancelled(orderId);
    // }
}

class Order {
    private wasCancelled: boolean = false; /* anti-pattern > state */
    private wasDelivered: boolean = false;
    private events: unknown = [];

    private constructor(
        private orderId: OrderId,
        private customerId: CustomerId
    ) {
        this.orderId = orderId;
        this.customerId = customerId;
    }

    static create(orderId: OrderId, customerId: CustomerId): Order {
        return new Order(orderId, customerId);
    }

    changeDeliveryAddress(deliveryAddress: DeliveryAddress): void {
        if (this.wasCancelled) {
            throw new Error(`Order was already cancelled`);
        }
    }

    cancel(): void {
        if (this.wasDelivered) {
            throw new Error(`Order has already been delivered`);
        }
        this.wasCancelled = true;
        this.events = new OrderWasCancelled(this.orderId);
    }

    getOrderId(): OrderId {
        return this.orderId;
    }
}

class CustomerId {}
class DeliveryAddress {}

export { Order, DeliveryAddress };
