class SalesInvoice {
    /**
     * @var Line[]
     */
    private lines: [] = [];
    private finalized: boolean = false;
    private salesInvoiceId: SalesInvoiceId;

    public static create(): SalesInvoice {
        const object = new SalesInvoice();
        object.salesInvoiceId = salesInvoiceId;
        return object;
    }

    public addLine(): void {
        if (this.finalized) throw new RuntimeException(/* ... */);
        this.lines = Line.create(/* ... */);
    }

    public finalize(): void {
        this.finalize = true;
    }

    public totalNetAmount(): Money {
        // ...
    }

    public totalAmonutIncludingTaxes(): Money {}
}
