function a(x,y) {
 return new Promise(resolve => setTimeout(() => resolve(x*y), 100))
}

function b(z) {
  return new Promise(resolve => setTimeout(() => resolve(z+5), 100))
}

function c(r) {
  return new Promise(resolve => setTimeout(() => resolve(r*2),100))
}

const composeAsync = (...functions) => {
  
  return async(...inputs) => {
    let result = inputs;
    const reverseFunctionList = functions.reverse()
    for(const fn of reverseFunctionList) {
      result = await fn(...(Array.isArray(result) ? result : [result]))
    }
    return result
  }
  
}

composeAsync(c,b,a)(5,3).then(result => console.log(result)).catch(error => console.log(error))