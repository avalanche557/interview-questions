class SDK {
  constructor() {
    this.queue = []
    this.count = 1;
  }

  logEvent(event) {
    this.queue.push(event)
  }

  wait(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(this.count % 5 === 0) {
            reject()
          } else {
            resolve()
          }
        }, 1000)
        
      })
  }

  async helper() {
    if(this.queue.length === 0) {
      return
    }
    const current = this.queue.shift()
    try{
      await this.wait()
      console.log(`Analytics sent ${current}`)
      this.count++
    } catch{
      console.log("-----------------------")
      console.log("Failed to send "  + current)
      console.log("Retrying sending "+ current)
      console.log("-----------------------")
      this.count = 1
      this.queue.unshift(current)
    } finally {
      this.helper()
    }
  }

  send() {
    this.helper()
  }
}

const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");
sdk.logEvent("event 11");
sdk.logEvent("event 12");
sdk.logEvent("event 13");
sdk.logEvent("event 14");
sdk.logEvent("event 15");
sdk.logEvent("event 16");
sdk.logEvent("event 17");
sdk.logEvent("event 18");
sdk.logEvent("event 19");
sdk.logEvent("event 20");

sdk.send();