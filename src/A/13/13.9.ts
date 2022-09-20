/**
 * @role abstraction for the hexagon port adapter
 *
 * ApplicationInterrface defines all the use-cases that incoming port adapters
 * */
interface ApplicationInterface {
    /** API */
    createOrder(cmd: CreateOrder): OrderId;

    listAvaliableEbooks(): Ebook[];
}

class EbookController {
    private constructor(private application: ApplicationInterface) {
        this.application = application;
    }

    listAvaiableEbooksAction() {
        const ebooks = this.application.listAvaliableEbooks();
        return ebooks;
    }
}

class OrderController {
    private constructor(private application: ApplicationInterface) {
        this.application = application;
    }

    orderEbookAction(request: Request) {
        const orderId = this.application.createOrder(
            request
            /** parsing or serialization requset */
        );
        return orderId;
    }
}

/** @role proxy */
class Application implements ApplicationInterface {
    private constructor(
        private ebookOrderService: EbookOrderSerivce,
        private listAvailableEbooksRepository: ListAvaliableEbooksRepository
    ) {
        this.ebookOrderService = ebookOrderService;
        this.listAvailableEbooksRepository = listAvailableEbooksRepository;
    }

    createOrder(cmd: CreateOrder): OrderId {
        return this.ebookOrderService.create(cmd);
    }

    listAvaliableEbooks(): Ebook[] {
        return this.listAvailableEbooksRepository.listAll();
    }
}

export {};
