
const message = () => {
    console.log("hello world")
}

const sampler = (fn, count) => {
    let counter = 1
    return () => {
        if(counter === count) {
            counter = 1
            return fn
        } else {
            counter = counter+1
        }
    }
}

const sample = sampler(message, 4)
sample()
sample()
sample()
sample()