const createAsyncTask = () => {
  const value = Math.floor(Math.random() * 10)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(value < 5) {
        reject(`error ${value}`)
      } else {
        resolve(value * 1000)
      }
    }, value*1000)
  })
}

const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask()
]


const executeAsyncTask = (tasks, callback) => {
  let errors = [];
  let result = [];
  let completeCount = 0;
  tasks.reduce((prev, curr) => {
    return prev.finally(() => {
      return curr.then((value) => {result.push(value)})
      .catch((error)=> { errors.push(error)})
      .finally(() => { 
        completeCount++
        if(completeCount == tasks.length) {
          callback(errors, result)
        }
      })
    })
  }, Promise.resolve())
}

executeAsyncTask(taskList, (error, result) => {
  console.log("error", error)
  console.log("result", result)
})