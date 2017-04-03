//write your code here
class LinkedList{
  constructor(arr){
    this._data = {
      data : 0,
      next : null
    }
    this.addDataDummy(arr)
  }

  addDataDummy(arr){
    for(let i=0; i<arr.length; i++){
      this.addData(arr[i])
    }
  }

  addData(nilai){
      let obj = {
        data : nilai,
        next : null
      }

      let current = this._data;
      while (current.next !== null) {
        current = current.next;
      }

      current.next =  obj;
  }

  getHead(){
    if(this._data.next == null){
      return 'belum ada kepala kawan'
    }
    else{
      return 'Kepalanya Woee : ' +this._data.next.data;
    }
  }

  show(){
    let current = this._data
    while (current.next!== null) {
      console.log(current)
      current = current.next;
      console.log(JSON.stringify(current,null, 2))
    }

  }

  getLength(){
    let current = this._data
    let length = 0
    while (current.next!== null) {
      current = current.next;
      length++
    }
    return 'Panjangnya :  ' +length;
  }

  getTail(){
    let current = this._data
    while (current.next!== null) {
      current = current.next;
    }
    return current.data
  }

  pop(){
      let current = this._data;
      let prev;
      while (current.next !== null) {
        prev = current;
        current = current.next;
      }

      prev.next = null
  }


}



let list = new LinkedList([10, 50]);
list.addData(12)
list.addData(15)
// console.log(list.getLength());
console.log(list.getLength())
console.log(list.getTail());
console.log(list.getHead());
list.show()
list.pop()
list.pop()
list.pop()
console.log('---------------------------------------')
list.show()


