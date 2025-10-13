const task = (timmer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(timmer > 300) {
            reject(`this is rejected after ${timmer}`)
            } else {
                resolve(timmer)
            }
        }, timmer) 
        
    })
}

const taskList = [task(500), task(1000), task(2000)]

function myPromiseAny (promiseArray) {
  return new Promise((resolve, reject) => {
      const rejecteResult = []
      let rejectedPromiseCount = 0
      promiseArray.forEach((promise, index) => {
        promise.then((val) => 
          resolve(val)
        ).catch((error) => {
          rejecteResult[index] = error;
          rejectedPromiseCount++;
          if(rejectedPromiseCount === promiseArray.length) {
            reject(rejecteResult)
          }
        })
      })
  })
}

myPromiseAny(taskList).then(res => console.log(res)).catch(err => console.log(err))






