/** @role outport */
interface OrderRepository {
    save(order: Order): void;
}

/** @role entity */
class Order {}

/** @role value-object */
class OrderId {}

class Connection {}

/** @role using-sql adapter */
class OrderRepositoryUsingSql implements OrderRepository {
    private constructor(private connection: Connection) {
        this.connection = connection;
    }

    static create(connection: Connection): OrderRepositoryUsingSql {
        return new OrderRepositoryUsingSql(connection);
    }

    save(order: Order): void {}
}

/** @role in-memory adapter */
class InMemoryOrderRepository implements OrderRepository {
    private constructor() {}

    static create() {}

    /** anything for In-memory adapter */
    save(order: Order): void {}
}

/** @role command */
class CreateOrder {}

/** @role incoming-port */
interface EbookOrderSerivceInterface {
    create(cmd: CreateOrder): OrderId;
}

/** @role controller(incoming adapter and HTTP adapter) */
class OrderController {
    private constructor(private ebookOrderService: EbookOrderSerivce) {
        this.ebookOrderService = ebookOrderService;
    }

    orderEbookAction(request: Request): Response {
        const orderId = this.ebookOrderService.create("abc");
        return new Response(/* ... */);
    }
}

/** @role service */
class EbookOrderSerivce implements EbookOrderSerivceInterface {
    create(cmd: CreateOrder): OrderId {
        return new OrderId();
    }
}

/** @role incoming-port */
interface ListAvaliableEbooksRepository {
    /**
     * @return Ebook[]
     * @method listAll : API
     */
    listAll<T>(): T[];
}

/** @role DTO */
class Ebook {
    private constructor(private title: string) {
        this.title = title;
    }

    static create(title: string): Ebook {
        return new Ebook(title);
    }

    getTitle(): string {
        return this.title;
    }
}

/** @role adapter */
class EbookController {
    private constructor(
        private ebookRepository: ListAvaliableEbooksRepository
    ) {
        this.ebookRepository = ebookRepository;
    }

    /** @Get ebook list */
    listAvailableEbooksAction() {
        const ebooks = this.ebookRepository.listAll<Ebook>();
        return ebooks.map((ebook) => ebook.getTitle);
    }
}
