/**
 * Created by liubo on 15/8/31.
 */
//import { Schema, arrayOf } from 'normalizr';
//import { camelizeKeys } from 'humps';
import {polyfill} from 'es6-promise';
import 'isomorphic-fetch';

// Extracts the next page URL from Github API response.
//function getNextPageUrl(response) {
//    console.log(5555);
//    const link = response.headers.get('link');
//    if (!link) {
//        return null;
//    }
//
//    const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1);
//    if (!nextLink) {
//        return null;
//    }
//
//    return nextLink.split(';')[0].slice(1, -1);
//}

const API_ROOT = '/';

//序列化url
function serialize(obj){

    var result = [];
    $.each(obj, function(key, value){

        result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    })
    return result.join('&')
}
//判断是否数组
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}


// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, schema, method, params) {
    let fullUrl = API_ROOT + endpoint;
    let data = {};
    if(method == "GET" && params){
        fullUrl = fullUrl + "?" + serialize(params);

    }else{
        data.body = JSON.stringify(params);
        data.method = method;
    }

    data.headers = {
        'Accept': 'application/json, application/xml, text/play, text/html, *.*',
        'Content-Type': 'application/json; charset=utf-8'
    }

    data.credentials = 'include'; //传递cookie信息
    return fetch(fullUrl, data)
        .then(response =>
            response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {


            if (!response.ok) {
                return Promise.reject(json);
            }
            //const camelizedJson = camelizeKeys(json.data);
            ////const nextPageUrl = getNextPageUrl(response) || undefined;
            ////console.log(camelizedJson);
            ////console.log(schema);
            //const a = Object.assign({},
            //    normalize(camelizedJson, schema)
            //);
            //console.log(response);
            if(isArray(json.data)){
                return json.data.slice();
            }else{
                return Object.assign({},json.data);
            }

        });
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

//const userSchema = new Schema('users', {
//    idAttribute: 'login'
//});
//
//const repoSchema = new Schema('repos', {
//    idAttribute: 'fullName'
//});
//
//repoSchema.define({
//    owner: userSchema
//});
//
//// Schemas for Github API responses.
//export const Schemas = {
//
//    USER: userSchema,
//    USER_ARRAY: arrayOf(userSchema),
//    REPO: repoSchema,
//    REPO_ARRAY: arrayOf(repoSchema)
//};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    //console.log(2222222);
    /*  通过 之前定义的action 赋值*/
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action);
    }
    /*拿到url*/
    let { endpoint, params, method } = callAPI;
    const { schema, types } = callAPI;

    method = method || "POST";

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }
    //if (!schema) {
    //    throw new Error('Specify one of the exported Schemas.');
    //}
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        //console.log(989898);
        return finalAction;
    }

    const [requestType, successType, failureType] = types;

    next(actionWith({ type: requestType }));

    return callApi(endpoint, schema, method, params).then(
            response => next(actionWith({
            response,
            type: successType
        })),
            error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    );
};
