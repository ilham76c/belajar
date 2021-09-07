/**
 * Class pada javascript tidak hoisted seperti function, 
 * Oleh karena itu kita harus mendeklarasikannya terlebih dahulu kemudian memanggilnya.
 */ 

// Class declarations
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

const rectangleInstance = new Rectangle(10,15);
console.log(rectangleInstance.height);