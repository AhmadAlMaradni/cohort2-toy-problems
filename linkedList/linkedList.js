/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.head = null//{value:null,next:null};
  this.tail = null;
  //console.log(this.head)
};

LinkedList.prototype.addToTail = function(value){
    if(!this.tail){
        this.tail = Node(value)
        this.head = Node(value) 
    }else{
        this.tail.next = Node(value)
    }
}

LinkedList.prototype.removeHead = function(){
    temp=this.head.value
    this.head=this.head.next
    return temp;
}

LinkedList.prototype.contains =function (value){
    var that = this.head
    if(that.value === value){
        return true
    }
    while(that){
        if(that.value === value){
            return true
        }
        that = that.next
    }
    return false
}

function Node(value){
    return {
    value : value,
    next : null }
}