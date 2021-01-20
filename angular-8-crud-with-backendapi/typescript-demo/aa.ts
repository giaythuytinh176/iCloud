/*
// example-01
async function f() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 5000)
    });
    // wait till the promise resolves (*)
    const result = await promise;
    console.log(result); // "done!"
}
f();
*/

/*
// example-02
import fetch from 'cross-fetch';

class User {
    username = '';
    constructor(username) {
        this.username = username;
    }
    // fetch = require("node-fetch");
    async getUser() {
        const response = await fetch(
            `https://api.github.com/search/users?q=${this.username}`
        );
        return await response.json();
    }
}

const u = new User('kumochan');
u.getUser().then(res => console.log(res));
*/

/*
// example-03
async function getUser(username: string) {
    try {
        const response = await fetch(
            `https://api.github.com/search/users?q=${username}`
        );
        return await response.json();
    } catch (e) {
        throw e;
    }
}
getUser('bob')
    .then(res => console.log(res))
    .catch(err => console.warn(err));
*/

// example-04
// let x = 0;
// async function r5() {
//     x += 1;
//     console.log(x);
//     return 5;
// } (
//     async () => {
//         x += await r5();
//         console.log(x);
//     })();

// fixed version
(() => {
    let x = 0;
    async function r6() {
        x += 1;
        console.log(x);
        return 5;
    }

    (async () => {
        const y = await r6();
        x += y;
        console.log(x);
    })();
})();

(() => {
    let x = 0;
    async function r5() {
        x += 1;
        console.log(x);
        return 5;
    }

    (async () => {
        x += await r5();
        console.log(x);
    })();
})();