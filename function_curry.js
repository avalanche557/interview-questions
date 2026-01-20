//function curry type 1 with limit

//function curry

const generateSum = (limit) => {
  let helper = (...args) => {
    if(args.length >= limit) {
      const allowedArgs = args.splice(0, limit);
      return allowedArgs.reduce((a,b) => a+b, 0)
    } else {
      let temp = (...args2) => {
        return helper(...args, ...args2)
      }
      return temp
    }
  }
  return helper;
}

const sum = generateSum(4)
console.log(sum(1)(2)(3)(4))

const sum1 = generateSum(2)
console.log(sum1(1,2,3))
