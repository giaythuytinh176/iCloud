var promise = new Promise(function (resolve, reject) {
    resolve('done');
    reject(new Error('…')); // ignored
    setTimeout(function () { return resolve('…'); }); // ignored
});
promise.then(function (data) { return console.log(data); });
