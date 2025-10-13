const task = (timmer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(timer > 3000) {
            reject("this is rejected")
            } else {
                resolve(timmer)
            }
        }, timmer) 
        
    })
}

const taskList = [task(500), task(1000), task(2000)]

function myPromiseAll(promiseArray) {
    return new Promise((resolve, reject) => {
        const result = []
        let resolvedPromiseCount = 0
        promiseArray.forEach((promise, index) => {
            promise.then((val) => {
                result[index] = val
                resolvedPromiseCount++
                if(resolvedPromiseCount === promiseArray.length) {
                    resolve(result)
                }
            }).catch((error) => reject(error))
        });
    })
}

myPromiseAll(taskList).then(res => console.log(res)).catch(err => console.log(err))