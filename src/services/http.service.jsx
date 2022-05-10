import React, { Component } from 'react'
import storageService from './storage.service'
const StorageService = new storageService()
export default class httpService {
    constructor(){
    }
    getApiResponse = function (url, callback) {
        fetch(url).then(res => res.json()).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    putApiResponse = function (url, data, callback) {
        fetch(url, apiResponseHandler({ body : data, method : "PUT" })).then(res => res.json()).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    postApiResponse = function (url, data, callback) {
        fetch(url, apiResponseHandler({ body : data })).then(res => res.json()).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    apiResponseHandler = function ( inputs ) {
        const { body={}, method="POST", headers={} } = inputs;
        return {
            method, headers : Object.assign({ 'Content-Type': 'application/json', adminToken : StorageService.get("adminToken") }, headers), body : JSON.stringify(body)
        }
    }
}


