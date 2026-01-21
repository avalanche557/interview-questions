const message = () => {
  console.log("hello world")
}
const sampler = (fn, limit) => {
  let count = 1
  const helper = () => {
    if(count === limit) {
      count = 1
      fn()
    } else {
      count++
    }
    
  }
  return helper
}


const sample = sampler(message, 4)
sample();
sample();
sample();
sample();
sample();
sample();
sample();
sample();
sample();
sample();
