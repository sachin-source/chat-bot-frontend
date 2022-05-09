import storageService from "./storage.service"

const StorageService = new storageService()

function LoginService() {
    return Boolean(StorageService.get("adminToken"))
}

export {LoginService}
