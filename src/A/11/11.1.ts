/**
 * @role domain events 11.4
 * Keeping track of internally recorded domain events in a private array
 * */
class OrderWasCancelled {
    constructor(private orderId: OrderId) {
        this.orderId = orderId;
    }

    // static create(orderId: OrderId): OrderWasCancelled {
    //     return new OrderWasCancelled(orderId);
    // }
}

type Events = {};

class Order {
    private wasCancelled: boolean = false; /* anti-pattern > state */
    private wasDelivered: boolean = false;
    private events: Events[] = []; // need to pass for parameter

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

    /** @role api */
    changeDeliveryAddress(deliveryAddress: DeliveryAddress): void {
        if (this.wasCancelled) {
            throw new Error(`Order was already cancelled`);
        }
    }

    /** @role api */
    cancel(): void {
        if (this.wasDelivered) {
            throw new Error(`Order has already been delivered`);
        }
        this.wasCancelled = true;
        this.events.push(new OrderWasCancelled(this.orderId)); // mutable
    }

    getOrderId(): OrderId {
        return this.orderId;
    }

    releaseEvents(): Events {
        const event = this.events;
        this.events = [];
        return event;
    }
}

class CustomerId {}
class DeliveryAddress {}

export { Order, DeliveryAddress };
