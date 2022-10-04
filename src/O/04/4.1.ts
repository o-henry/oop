/** @role Entity */

class SalesInvoice {
    /**
     * @var Line[]
     */
    private lines: [] = [];
    private finalized: boolean = false;
    private salesInvoiceId: SalesInvoiceId; // entity is mutable.

    public static create(): SalesInvoice {
        const object = new SalesInvoice();
        object.salesInvoiceId = salesInvoiceId;
        return object;
    }

    public addLine(): void {
        if (this.finalized) throw new Error(/* ... */);
        this.lines = Line.create(/* ... */);
    }

    public finalize(): void {
        this.finalized = true;
    }

    public totalNetAmount(): Money {
        // ...
        return;
    }

    public totalAmonutIncludingTaxes(): Money {
        return;
    }
}

class Money {}
class SalesInvoiceId {}

export {};
