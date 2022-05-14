import React, { Component } from 'react'
import constants from './constants';
import storageService from './storage.service'
const StorageService = new storageService();


export default class httpService {
    constructor(){ 
        this.baseUrl = "http://localhost:3500/"
    }
    getApiResponse = function ({ url="", params={}, headers={} }, callback) {
        const apiUrl = this.apiUrlMaker(url, params)
        fetch(apiUrl, this.getApiRequestmaker({ method : "GET", headers })).then(res => {
            this.responseHandler(res)
            return res.json()
        }).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    putApiResponse = function ({url="", params={}, headers={}, data={}}, callback) {
        const apiUrl = this.apiUrlMaker(url, params)
        fetch(apiUrl, this.ApiRequestmaker({ body : data, method : "PUT", headers })).then(res => {
            this.responseHandler(res)
            return res.json()
        }).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    postApiResponse = function ({url="", params={}, headers={}, data={}}, callback) {
        const apiUrl = this.apiUrlMaker(url, params)
        fetch(apiUrl, this.ApiRequestmaker({ body : data, headers })).then(res => {
            this.responseHandler(res)
            return res.json()
        }).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    ApiRequestmaker = function ( inputs ) {
        const { body={}, method="POST", headers={} } = inputs;
        return { method, headers : Object.assign({ 'Content-Type': 'application/json', adminToken : StorageService.get(constants.storageTerminologies.ADMINTOKEN) }, headers), body : JSON.stringify(body) }
    }
    getApiRequestmaker = function ( inputs ) {
        const { body={}, method="POST", headers={} } = inputs;
        return { method, headers : Object.assign({ 'Content-Type': 'application/json', adminToken : StorageService.get(constants.storageTerminologies.ADMINTOKEN) }, headers) }
    }
    apiUrlMaker = function ( url, params ) {
        // let mainUrl = new URL(this.baseUrl + url).searchParams
        // mainUrl.set('t', new Date().getTime())
        // Object.keys(params).forEach((param) => {
        //     mainUrl.set(param, params[param])
        // })
        // return mainUrl;
        return this.baseUrl + url + "?t=" + new Date().getTime() + "&" + Object.keys(params).map(param => "" + param + "=" + params[param]).join("&")
    }
    responseHandler = function (res) {
        if(res.status == 401){
            console.log("Un authenticated request clears the storage")
            StorageService.clearStorage()
        }
    }
}


