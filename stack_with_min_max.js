function stackWithMax () {
  let items = [];
  let length = 0
  
  this.push = (item) => {
    if(length === 0) {
      items[length++] = {current: item, min: item, max: item}
    } else {
      const data = this.peek();
      let { min, max} = data

      max = max < item ? item : max;
      min = min < item ? min : item

      items[length++] = {current: item, min: min, max: max}
      
    }
  }

  this.pop = () => {
    return items[--length]
  }

  this.peek = () => {
    return items[length - 1]
  }

  this.max = () => {
      return items[length - 1].max;
    }
    
    //Get the min value
    this.min = () => {
      return items[length - 1].min;
    }
    
    //Get the size
    this.size = () => {
      return length;
    }
    
    //Check if its empty
    this.isEmpty = () => {
      return length === 0;
    }
    
    //Clear the stack
    this.clear = () => {
      length = 0;
      items = [];
    }
}


let SM = new stackWithMax();
SM.push(4);
SM.push(7);
SM.push(11);
SM.push(23);
SM.push(77);
SM.push(3);
SM.push(1);
SM.pop();
console.log(SM.size())
console.log(`max: ${SM.max()}`, `min: ${SM.min()}`);
