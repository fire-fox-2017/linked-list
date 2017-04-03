//write your code here
class LinkedList {
  constructor(arr){
    this._head = this.prependNode(arr)
  }

  getLength(){
    let currPosition = this._head,
        lastPosition = null,
        length = 0;
    while(currPosition.next != null){
      lastPosition = currPosition;
      currPosition = currPosition.next;
      length ++;
    }
    return `this length : ${length}`;
  }

  getHead(){
      this.getTail();
      return 'this head : '+this._head.data;
  }

  getTail(){
    let currPosition = this._head,
        lastPosition = null;

    while(currPosition.next != null){
        lastPosition = currPosition;
        currPosition = currPosition.next;
    }

    return 'this tail : '+lastPosition.data;
  }

  //Menjadikan array menjadi tipe data LinkedList
  prependNode(data){
    let newData = null; //create new list
    console.log(data.length);

    for (let i = data.length; i >= 0; i--){
      console.log(data[i]);
      console.log(JSON.stringify(newData));
      newData = this.newNode(data[i],newData);
    }
    return newData;
  }

  newNode(val,data){
    return {
      data : val,
      next : data
    }
  }




}


let list = new LinkedList([1,2]);

console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());