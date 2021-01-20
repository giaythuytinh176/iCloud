import { Promise } from 'es6-promise'

const urlweather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=98875111208701b956a9e50ee6b5d2e0';

// var XMLHttpRequest = require('xhr2');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url: string): Promise<any> {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                // Success
                // console.log(request.responseText);
                // console.log(this.response);
                resolve(request.responseText);
            } else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}

httpGet('https://api.github.com/search/repositories?q=angular').then(
    function (value) {
        console.log('Contents: ' + (value));
    },
    function (reason) {
        console.error('Something went wrong', reason);
    }
);

/*
//======================================================
// Parse Json
//======================================================
function parseResponse(value: string) {
    try {
        return JSON.parse(value);
    } catch (_) {
        return value;
    }
}

function test() {
    console.log('test-function');
}

httpGet(urlweather)
    .then(parseResponse)
    .then(data => console.log(data))
    .then(test)
    .catch(function (reason) {
        console.error('Something went wrong', reason);
    });
*/

/*
//======================================================
// Wait
//======================================================
const wait5Secs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(httpGet(urlweather));
        //httpGet(urlweather);//.then(data => console.log(data));
    }, 5000);
});

wait5Secs.then(data => console.log(data)).catch(err => console.error(err));
*/