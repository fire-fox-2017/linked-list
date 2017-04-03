//write your code here
'use strict'
class LinkedList {
  constructor(array) {
    this.size = array
    this._data = {
      data:0,
      next:null
    }
  }

  push(){
    // console.log(this.size);
    this.size.forEach((value)=>{
      let current = this._data
      while(current.next != null){
        current = current.next
      }
      current.next = new Obj(value)
    })
    console.log(JSON.stringify(this._data));
  }

  // show(){
  //   return JSON.stringify(this._data);
  // }

  pop(){
    let current = this._data
    let prev;
    while(current.next != null){
      prev = current
      current = current.next
    }
    prev.next = null
    console.log(JSON.stringify(this._data));
  }

  getLength(){
    let counter = 0
    let current = this._data
    while(current.next != null){
      counter++
      current = current.next
    }
    return counter
  }

  getHead(){
    let current = this._data
    while(current.next != null && current.data == 0){
      current = current.next
      return current.data
    }
  }

  getTail(){
    let current = this._data
    while(current.next != null){
      current = current.next
    }
    return current.data
  }
}

class Obj {
  constructor(value) {
    this.data = value,
    this.next = null
    }
  }

let list = new LinkedList([11, 2, 3, 4, 5, 6, 7, 8, 9, 100]);
list.push()
list.pop()
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());

