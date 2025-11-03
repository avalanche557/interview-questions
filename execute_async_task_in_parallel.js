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

const executeAsynInParallel = (tasks, callback) => {
  let errors = [];
  let result = [];
  let completed = 0
  console.log(completed,tasks)
  tasks.forEach((task) => {
    task.then((value) => { result.push(value)})
    .catch((error) => {errors.push(error)})
    .finally(() => {
      completed++
      if(completed == tasks.length) {
        callback(errors, result)
      }
    })
  })
}

executeAsynInParallel(taskList, (error, result) => {
  console.log("error", error)
  console.log("result", result)
})

