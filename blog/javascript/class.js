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

// Class expressions
/**
 * Class expressions bisa diberi nama ataupun tidak, 
 * nama yang diberikan pada Class expression bersifat lokal pada class body.
 * nama class bisa diakses melalui property name
 */

// unnamed
const Luas1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Luas1.name);
// output: "Rectangle"

// named
const Luas2 = class Luas {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Luas2.name);
// output: "Rectangle2"
  