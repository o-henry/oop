abstract class Foo {
  abstract foo(): void;

  public bar(): void {}
}

class Baz extends Foo {
  public foo(): void {}
}

export {};
