

const promise = new Promise((resolve, reject) => {
    resolve('done');
    reject(new Error('…')); // ignored
    setTimeout(() => resolve('…')); // ignored
});

promise.then(data => console.log(data));