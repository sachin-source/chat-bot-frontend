import storageService from "./storage.service"

const StorageService = new storageService()

function LoginService() {
    return StorageService.exists("adminToken");
}

export { LoginService }
