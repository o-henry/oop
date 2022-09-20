/**
 * @role command-bus
 * It accepts an untyped command object, examines the type of the command object, and uses it
 * to find a service that can “handle” the command. There usually is some kind of
 * mapping from command class to service class.
 * */
interface CommandBus {
    handle<T>(cmd: T): T;
}

class HardWiredCommandBus implements CommandBus {
    private constructor(private ebookOrderService: EbookOrderSerivce) {
        this.ebookOrderService = ebookOrderService;
    }

    handle(cmd: any): any {
        if (cmd instanceof CreateOrder) {
            return this.ebookOrderService.create(cmd);
        } else if(cmd instanceof /* ... */) {
            // so on
        } else {
            throw new Error(`Unkown command type: ${cmd}`)
        }
    }
}

class OrderController { 
    private constructor(private cmdBus: CommandBus) {
        this.cmdBus = cmdBus
    }

    orderEbookAction(request: Request) { 
        const orderId = this.cmdBus.handle(
            CreateOrder
        )
        return /* ... */
    }
}

export {};
