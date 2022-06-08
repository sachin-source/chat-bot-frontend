import constants from "./constants";
import httpService from "./http.service";
import storageService from "./storage.service"

// const StorageService = new storageService()
const HttpService = new httpService()

export default class loginService {
    constructor() {
        if (loginService._instance) {
            return loginService._instance
        }
        loginService._instance = this;
    }
    getAuthenticationStatus(callback){
        while(!this.authenticationChecked);
        callback(this.isLoggedIn, this.userInfo)
    }
    adminAuthentication(callback=()=>{}){
        HttpService.getApiResponse({ url : "admin-api/auth", params : {}, headers : {}}, (err, response) => {
            this.isLoggedIn = Boolean(response?.status);
            this.userInfo = response.userInfo;
            this.authenticationChecked = true
            callback({ isLoggedIn : this.isLoggedIn, userInfo : this.userInfo })
        })
    }
}
