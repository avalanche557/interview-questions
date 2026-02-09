const input = {
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c,
  e: -1
}

const pipe = (obj) => {
    return function(...args) {
        for(let key in obj) {
            const value = obj[key];
            if(typeof value=== 'function') {
                const temp = value(...args)
                obj[key] = temp
            } else if(typeof value === 'object') {
                obj[key ] = pipe(value)(...args)
            }
        }

        return obj
    }
}

const output = pipe(input)(1,1,1);
console.log(output);