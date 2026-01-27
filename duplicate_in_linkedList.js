const findDuplicate = (head) => {
  const set = new Set()
 
  while(head) {
     let element = head.element
    if(set.has(element)) {
      return element
    } else {
      set.add(element)
    }
    head = head.next
  }
  return -1
}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(2);
ll.append(5);
let head = ll.getHead();
console.log(findDuplicate(head));

