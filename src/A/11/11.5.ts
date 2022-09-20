import { Order } from "./11.1";

export interface OrderRepository {
    save(order: Order): void;
    getById(orderId: OrderId): Order;
}
