/**
 * # Class Body and Method Definitions #
 * 
 * Body class adalah bagian yang ada dalam kurung kurawal "{ }"
 * Constructor adalah method khusus untuk membuat atau menginisialisasi object atau property yang ketika class dibuat
 * constructor hanya boleh ada satu dalam setiap class
 * constructor bisa menggunakan keyword "super" untuk memanggil/menggunakan constructor dari super class/parent class
 */

/**
 * # Prototype Methods #
 * 
 */
class Rectangle {
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

const square = new Rectangle(10, 10);
console.log(square.area); 
// Output: 100

/**
 * # Generator Methods #
 * 
 */

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
console.log([...pentagon.getSides()]); 
// Output: [1,2,3,4,5]

/**
 * # Static Methods and Properties #
 * 
 */
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
  
const point1 = new Point(5, 5);
const point2 = new Point(10, 10);
point1.displayName; // undefined
point1.distance;    // undefined
point2.displayName; // undefined
point2.distance;    // undefined

console.log(Point.displayName);
// Output: "Point"
console.log(Point.distance(point1, point2)); 
// Output: 7.0710678118654755
  