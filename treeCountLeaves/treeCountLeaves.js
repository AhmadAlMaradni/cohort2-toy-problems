/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = [];
 // this.count = 0;
};




Tree.prototype.countLeaves = function () {
   var count = 0 ;
  // if (this.children.length > 0 ){
  //   count++;
  // } else {
  //   this.children[1].countLeaves()
  // }
  while (1) {
  if(this.children.length > 0){
   count = 1
  }else {
    count = this.children[1].countLeaves();
     count++
  }
  }
  return count
  //for(var i=0 ; i < this.children.length; i++){
    // if(this.children[1].countLeaves())
    //   return count;
    
    // else {
    //   return false;
    // }
  //}
 }

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push([child , []])
  }else {
    this.children[1].addChild(child)
  }
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  
};
