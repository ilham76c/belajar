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


// Class body and method definitions
/**
 * Body class adalah bagian yang ada dalam kurung kurawal "{ }"
 * Constructor adalah method khusus untuk membuat atau menginisialisasi object atau property yang ketika class dibuat
 * constructor hanya boleh ada satu dalam setiap class
 * constructor bisa menggunakan keyword "super" untuk memanggil/menggunakan constructor dari super class/parent class
 */

// Prototype methods
class Rectangle3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle3(10, 10);

console.log(square.area); // 100

// Generator methods
class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    // Method
    *getSides() {
        for(const side of this.sides){
            yield side;
        }
    }
}
  
const pentagon = new Polygon(1,2,3,4,5);
  
console.log([...pentagon.getSides()]); // [1,2,3,4,5]

// Static methods and properties
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
    
        return Math.hypot(dx, dy);
    }
}
  
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
  