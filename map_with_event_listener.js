class dataStore {
  constructor() {
    this.data = {};
    this.listner = {}
  }

  add(key, value) {
    const oldValue = this.data[key]
    this.trigger(key, oldValue, value)
    this.data[key] = value; 
  }

  has(key) {
    return key in this.data
  }

  trigger(key, oldValue, newValue) {
    const changeEvent = `change:${key}`
    if(this.listner[changeEvent]) {
      this.listner[changeEvent].map((callBack) => {
        callBack(oldValue, newValue, key)
      })
    }
    if(this.listner[key]) {
      this.listner[key].map((callBack) => {
        callBack(key, oldValue, newValue)
      })
    }
  }

  on(event, callBack) {
    if(!this.listner[event]) {
      this.listner[event] = []
    }

    this.listner[event].push(callBack)
  }
}


let store = new  dataStore()
store.add("name", "abhinav")
store.add("age", "31")
console.log(store.has("name"))
console.log(store.has("age"))
store.add("name", "asmita")
store.on("change:name", (old_value, new_value, key) => {console.log(`old ${key}: ${old_value}, new ${key}: ${new_value}`)})
store.add("name", "abhi")

