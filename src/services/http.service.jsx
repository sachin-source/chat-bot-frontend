import React, { Component } from 'react'
import constants from './constants';
import storageService from './storage.service'
const StorageService = new storageService();


export default class httpService {
    constructor(){ }
    getApiResponse = function ({ url, params }, callback) {
        const apiUrl = apiUrlMaker(url, params)
        fetch(apiUrl).then(res => res.json()).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    putApiResponse = function ({url, data, headers, params}, callback) {
        const apiUrl = apiUrlMaker(url, params)
        fetch(apiUrl, apiResponseHandler({ body : data, method : "PUT", headers })).then(res => res.json()).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    postApiResponse = function ({url, data, headers, params}, callback) {
        const apiUrl = apiUrlMaker(url, params)
        fetch(apiUrl, apiResponseHandler({ body : data, headers })).then(res => res.json()).then(res => callback(null, res)).catch(err => callback(err, null))
    }
    apiResponseHandler = function ( inputs ) {
        const { body={}, method="POST", headers={} } = inputs;
        return { method, headers : Object.assign({ 'Content-Type': 'application/json', adminToken : StorageService.get(constants.storageTerminologies.ADMINTOKEN) }, headers), body : JSON.stringify(body) }
    }
    apiUrlMaker = function ( url, params ) {
        return url + "?t=" + new Date().getTime() + "&" + Object.keys(params).map(param => "" + param + "=" + params[param]).join("&")
    }
}


