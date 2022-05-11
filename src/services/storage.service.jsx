export default class storageService {

    constructor() {
        if (storageService._instance) {
            return storageService._instance
        }
        storageService._instance = this;
        /**
         * Need to do :
         * Fetching from local
         */
        
        /**
         * Done with :
         * Setting default persistancy to session
         */

        this.isPersistantStorage = false;
        this.storage = this.isPersistantStorage ? localStorage : sessionStorage;
    }
    get(key) {
        return this.storage.getItem(key)
    }
    exists (key) {
        return Boolean(this.get(key))
    }
    set({ key, value }) {
        this.storage.setItem(key, value)
    }
    setPersistancy(persistancy) {
        this.isPersistantStorage = persistancy;
    }
    remove (key) {
        this.storage.removeItem(key);
    }
    clearStorage () {
        this.storage.clear();
    }
}