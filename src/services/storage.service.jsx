export default class storageService {
    // isPersistantStorage = true;
    // storage = isPersistantStorage ? localStorage : sessionStorage;

    constructor() {
        if (storageService._instance) {
            return storageService._instance
        }
        storageService._instance = this;


/**
 * 
 * need to do :
 * fetching from local,
 * setting default persistancy to session
 * 
 */

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