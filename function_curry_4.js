const curry = (callbackFn) => {
    const helper = (...args) => {
        if(args.length >= callbackFn.length) {
            return callbackFn(...args)
        } else {
            const temp = (...args2) => {
                return helper(...args, ...args2)
            }
            return temp
        }
    }
    return helper
}



let curriedSum = curry(sum);

console.log(curriedSum(1,2,3,4,5)); // 10
console.log(curriedSum(1)(2,3)(4,5)); // 10
console.log(curriedSum(1)(2)(3)(4)); // 10