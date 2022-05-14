import constants from "./constants";
import httpService from "./http.service";
import storageService from "./storage.service"

const StorageService = new storageService()
const HttpService = new httpService()

export default class loginService {
    constructor() {
        if (loginService._instance) {
            return loginService._instance
        }
        loginService._instance = this;
        HttpService.getApiResponse({ url : "admin-api/auth", params : {}, headers : {}}, (err, response) => {
            this.isLoggedIn = Boolean(response?.status);
            console.log(response)
        })
    }
}
