function a(x,y) {
    return new Promise((resolve, reject) =>  setTimeout(() => { resolve(x+y)}, 200))
}

function b(x) {
    return new Promise((resolve, reject) => setTimeout(() => { resolve(x+4)}, 200))
}

function c(x) {
    return new Promise((resolve, reject) => setTimeout(() => {resolve(x+10)}, 200))
}

const composeAsync = (...functionList) => {
    return async(...input) => {
        let result = input
        const newFunctionList = [...functionList].reverse()
        for(const fn of newFunctionList) {
            result = await fn(...(Array.isArray(result) ? result : [result]  ))
            console.log(result)
        }
        return result
    }
}



composeAsync(c,b,a)(5,3).then(result => console.log(result)).catch(error => console.log(error))