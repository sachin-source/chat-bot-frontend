export default class storageService {
    // isPersistantStorage = true;
    // storage = isPersistantStorage ? localStorage : sessionStorage;

    constructor() {
        if (MyClass._instance) {
            return MyClass._instance
        }
        MyClass._instance = this;

        this.isPersistantStorage = true;
        this.storage = this.isPersistantStorage ? localStorage : sessionStorage;
        this.set({ key: "name", value: "Mounesh" })
        console.log(this.get("name"))
    }
    get(key) {
        return this.storage.getItem(key)
    }
    set({ key, value }) {
        this.storage.setItem(key, value)
    }
    setPersistancy(persistancy) {
        this.isPersistantStorage = persistancy;
    }
}