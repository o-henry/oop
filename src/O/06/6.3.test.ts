describe("CQRS", () => {
    it("should be immutable", () => {
        class Counter {
            private count: number = 0;

            incremented(): Counter {
                const copy = this;
                copy.count++;
                return copy;
            }

            currentCount(): number {
                return this.count;
            }
        }

        expect(new Counter().incremented().currentCount()).toBe(1);
        expect(new Counter().incremented().incremented().currentCount()).toBe(
            2
        );
    });
});

export {};
