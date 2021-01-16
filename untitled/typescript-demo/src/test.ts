//
// function resolveAfter5Seconds(x :number) {
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve(x);
//         }, 5000);
//     });
// }
//
// async function f1() {
//     var x = await resolveAfter5Seconds(10);
//     console.log(x); // 10
// }
//
// f1();

// setTimeout(function () {
//     console.log("First");
// }, 1000);
//
//
// setTimeout(function () {
//     console.log("Second");
// }, 1000);