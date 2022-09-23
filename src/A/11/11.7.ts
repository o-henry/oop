import { DeliveryAddress, Order } from "./11.1";
import { OrderRepository } from "./11.3";

/**
 *  @role service
 *  SRP를 유지하지만, ChangeDelivery... 서비스와 같은 의존성(OrderRepository)을 사용하므로
 *  한 곳에서 처리하는 것이 좋다.
 * */
class CreateOrderService {
    private constructor(private orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }

    invoke(/* ... */): OrderId {
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
