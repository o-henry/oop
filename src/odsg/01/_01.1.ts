class Foo {
  public anObjectMethod() {
    console.log("basic");
  }

  public static aStaticMethod() {
    console.log("static");
  }
}

const obj = new Foo();
const obj2 = new Foo();

obj.anObjectMethod();
// obj.aStaticMethod(); Property 'aStaticMethod' does not exist on type 'Foo'.
Foo.aStaticMethod();
