/** singleton */
class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

function client() {
    const s_one = Singleton.getInstance();
    const s_two = Singleton.getInstance();

    if (s_one === s_two) {
        console.log(
            "Singleton works, both varaibles contain the same instance"
        );
    } else {
        console.log("Singleton failed, variables contain different instance.");
    }
}
