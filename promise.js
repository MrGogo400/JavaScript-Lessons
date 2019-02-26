'use strict'

const myPromise = new Promise((resolve, reject) => {
    resolve('Hello');
});

myPromise.then(result => console.log('result', result));

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello');
    },3000)
});

myPromise2.then(result => console.log('result', result));

const myPromise3 = new Promise((resolve, reject) => {
    reject('Something went wrong!');
});
myPromise3
    .then(res => console.log(res))
    .catch(error => console.log(error));

const getNum = new Promise((resolve, reject) =>{
    resolve(10);
});

getNum
    .then(num => num * 2)
    .then(num => num - 1)
    .then(num => num -= 2)
    .then(num => num += 10)
    .then(num => {
        console.log('result', result);
    })
    .catch(error => {
        console.error(error)
    })
