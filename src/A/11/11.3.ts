import { Order } from "./11.1";

interface OrderRepository {
    /** @throws CouldNotSaveOrder */
    save(order: Order): void;
    /** @throws CouldNotFindOrder */
    getById(orderId: OrderId): Order;
}

/** test-double */
class InMemoryOrderRepository implements OrderRepository {
    private orders: Order[] = [];

    save(order: Order): void {
        this.orders.push(order); // mutable
    }

    getById(orderId: string): Order {
        // if (!this.orders.includes(orderId)) {} // lens
        return Order.create("blah" as OrderId, "blah");
    }
}

export { OrderRepository };
