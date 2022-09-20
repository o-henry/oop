import * as R from "ramda";

class Order {
    private constructor() {}
    /** impure */
    cancel(orderLine: string[] = []): void {
        R.empty(orderLine);
    }
}

export {};
