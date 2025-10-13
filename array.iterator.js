const iterator = healper([1,2, "help", 0])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.done())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.done())




function healper(array) {
  let nextIndex  = 0
  return {
    next: function() {
      if(nextIndex < array.length) {
        return array[nextIndex++]
      } else {
        return null
      }
    },
    done: function() {
      if(nextIndex === array.length) {
        return true
      } else {
        return false
      }
    }
  }
  

}