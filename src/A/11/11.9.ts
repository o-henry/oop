/**
 *
 */

import { OrderService } from "./11.8";

class OrderController {
    private orderService: OrderService;

    createOrderAction(request: Request) {
        const orderId = this.orderService.createOrder(/* ... */);
        // const order = this.orderRepository
    }
}

export {};
