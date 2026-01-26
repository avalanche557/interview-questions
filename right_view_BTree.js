function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

tree = new Node(1); 
tree.left = new Node(2); 
tree.right = new Node(3); 
tree.left.left = new Node(4); 
tree.left.right = new Node(5); 
tree.right.left = new Node(6); 
tree.right.right = new Node(7); 
tree.right.left.right = new Node(8); 

const rightSideViewRecursive = (root)  => {
  let res = []
  const travese = (node, level) => {
    if(!node) {
      return
    }
    if(res.length === level){
      res.push(node.val)
    }
    travese(node.right, level+1)
    travese(node.left, level+1)

  }
  travese(root, 0)
  return res
}

console.log(rightSideViewRecursive(tree));
