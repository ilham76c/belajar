/**
 * Class pada javascript tidak hoisted seperti function, 
 * Oleh karena itu kita harus mendeklarasikannya terlebih dahulu kemudian memanggilnya.
 */ 

/**
 * # Class Declarations #
 * 
 */ 
class Rectangle1 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}

const rectangle1 = new Rectangle1(10,15);
rectangle1.height; // output: 10


/**
 * # Class Expressions #
 * 
 * Class expressions bisa diberi nama ataupun tidak, 
 * nama yang diberikan pada Class expression bersifat lokal pada class body.
 * nama class bisa diakses melalui property name
 */

/**
 * # unnamed class #
 */
const Rectangle2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
Rectangle2.name; // output: "Rectangle2"

/**
 * # named class #
 */
const Rectangle3 = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
Rectangle3.name; // output: "Rectangle"
