interface Foo {
  foo(): void; // interface only have a method signatures
}

class Bar implements Foo {
  public foo(): void {}
}

export {};
