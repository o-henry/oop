/** Retrieving information */
class Counter {
    private count: number = 0; /* state */

    /* command */
    increment(): number {
        this.count++;
        return this.count;
    }

    /* query */
    currentCount(): number {
        return this.count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter);

export {};
