describe("chapter 01", () => {
    it("should be false", () => {
        // GIVEN
        class Foo {}
        // WHEN
        const object1 = new Foo();
        const object2 = new Foo();
        // THEN
        expect(object1).not.toBe(object2);
    });

    it("static method can be called without an instance", () => {
        class Foo {
            public anObjectMethod(): string {
                return "I'm obj";
            }

            public static aStaticMethod(): string {
                return "I'm static";
            }
        }

        expect(Foo.aStaticMethod()).toBe("I'm static");
    });

    it("constructor will be called before a reference to the object gets returned", () => {});

    it("static factory method on the class itself, which returns a new instance of the class", () => {
        class Foo {
            public static create(): Foo {
                return new Foo();
            }
        }

        const obj = Foo.create();

        expect(obj instanceof Foo).toBeTruthy();
    });

    it("object can contain data(properties)", () => {
        class Foo {
            private some_number: number;
            #some_string: string;
            public pub_string: string;

            constructor() {
                this.some_number = 10;
                this.#some_string = "Hello, world!";
                this.pub_string = "Anyone";
            }
        }

        const obj = new Foo();

        expect(obj.pub_string).toBe("Anyone");
    });

    it("initial value (client provide) as a constructor argument", () => {
        class Foo {
            #some_number: number;

            /**
             *  named-argument
             **/
            // public constructor({ initial_number }: { initial_number?: number }) {
            //     this.#some_number = initial_number;
            // }

            public constructor(private args: { initial_number?: number }) {
                this.#some_number = args.initial_number;
            }

            public get(): number {
                return this.#some_number;
            }
        }

        const obj = new Foo({ initial_number: 5 });

        expect(obj.get()).toBe(5);
    });

    it("mutable", () => {
        class Mutable {
            /**
             * private keyword vs private fields(#)
             * compile time annotation vs runtime annotation
             */
            private some_number: number;

            public constructor(init_number: number) {
                this.some_number = init_number;
            }

            public increase(): void {
                this.some_number = this.some_number + 1;
            }

            public get = (): number => this.some_number;
        }

        const obj = new Mutable(5);
        obj.increase();

        expect(obj.get()).toBe(6);
    });

    it("immutable", () => {
        class Immutable {
            #some_number: number;

            public constructor(init_number: number) {
                this.#some_number = init_number;
            }

            public increase(): Immutable {
                return new Immutable(this.#some_number + 1);
            }

            public get = (): number => this.#some_number;
        }

        const obj = new Immutable(5);
        const n_obj = obj.increase();

        expect(obj.get()).toBe(5);
        expect(n_obj.get()).toBe(6);
    });

    it("dependency with service location", () => {
        class ServiceLocator {
            public static getLogger = () => {}; // ..do something
        }
        class Foo {
            constructor() {}

            public some_method(): void {
                const logger = ServiceLocator.getLogger();
            }
        }
    });

    it("dependency with dependency injection", () => {
        class Logger {}
        class Foo {
            public constructor(private logger: Logger) {
                this.logger = logger;
            }
        }
    });
});
