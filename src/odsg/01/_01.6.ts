class Foo {
  public static create(): Foo {
    return new Foo();
  }
}

const obj = Foo.create();

export {};
