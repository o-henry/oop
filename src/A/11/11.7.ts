import { DeliveryAddress, Order } from "./11.1";
import { OrderRepository } from "./11.5";

/** @role service */
class CreateOrderService {
    private constructor(private orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    invoke(): OrderId {
        const orderId = this.orderRepository;
        const order = Order.create(orderId, "henry");
        this.orderRepository.save(order);
        return order.getOrderId();
    }
}

/** @role service */
class ChangeDeliveryAddressService {
    private constructor(private orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    invoke(orderId: OrderId): void {
        const order = this.orderRepository.getById(orderId);
        order.changeDeliveryAddress(new DeliveryAddress());
        this.orderRepository.save(order);
    }
}

export {};
