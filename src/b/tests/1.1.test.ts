import { pipe } from "fp-ts/lib/function";

describe("", () => {
    it("", () => {
        const double = (n: number): number => n * 2;

        expect(pipe(2, double, double)).toBe(16);
    });
});
