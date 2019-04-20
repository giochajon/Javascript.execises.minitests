

class Stack {

    constructor() {
        this.contents = []
     }

     addElement = (item) => {
        this.contents.push (item)
    }


    serveElement = () => {
        return this.contents.pop()
    }

    showElements(){
    return this.contents;

    }

}

class Queue {

    constructor() {
        this.contents = []
     }

     addElement = (item) => {
        this.contents.push (item)
    }


    serveElement = () => {
        return this.contents.shift()
    }

    showElements(){
    return this.contents;

    }

}





  let x = new Queue;
  x.addElement("uno");
  x.addElement("dos");
  console.log(x.showElements());
  console.log(x.serveElement());
  console.log(x.showElements());
  console.log(x.serveElement());
  console.log(x.showElements());
