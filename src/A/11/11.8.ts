import { OrderRepository } from "./11.3";

class OrderService {
    private constructor(private orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    createOrder(): OrderId {
        const orderId = this.orderRepository;
        return orderId;
    }

    changeDeliveryAddress(): void {}

    markAsDelivered(): void {}

    cancel(): void {}
}
1;

export { OrderService };
