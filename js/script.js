// Promise
// let p = new Promise((resolve, reject) => {
//     let a = 1+2;
//     if(a == 2){
//         resolve('success')
//     }else{
//         reject('failed')
//     }
// })

// p.then((message) => {
//     console.log('This is the then ' + message);
// }).catch((message) => {
//     console.log('This is the catch ' + message);
    
// })

// CallBacks
// const userLeft = false
// const userWatchingCatMeme = true
// function watchTutorialCallback(callback, errorCallback) {
//     if(userLeft){
//         errorCallback({
//             name: "user left",
//             message: ':('
//         })
//     } else if(userWatchingCatMeme){
//         errorCallback({
//             name: "user watching cat video",
//             message: 'WebDev < cat'
//         })
//     } else{
//         callback("Thumsup")
//     }
// }
// watchTutorialCallback((message) => {
//     console.log('Success: ' + message);
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// })


// Promise
const userLeft = false
const userWatchingCatMeme = true

function watchTutorialPromise() {

    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: "user left",
                message: ':('
            })
        } else if(userWatchingCatMeme){
            reject({
                name: "user watching cat video",
                message: 'WebDev < cat'
            })
        } else{
            resolve("Thumsup")
        }
    })
}
watchTutorialPromise().then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})