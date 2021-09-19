/**
 * # Class Body and Method Definitions #
 * 
 */

/**
 * # Static Methods and Properties (strict mode) #
 * 
 */
 class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
  
    /**
     * Static method dan property dapat diakses tanpa perlu membuat instance class terlebih dahulu,
     * kita dapat langsung mengaksesnya dengan menuliskan nama class lalu nama method atau property
     * yang akan dipanggil.
     */
    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
    
        return Math.hypot(dx, dy);
    }
}
  
const point = new Point(5, 10);
point.displayName; // Ouput: undefined
point.distance;    // Ouput: undefined

Point.displayName; // Output: "Point"
Point.distance(new Point(5, 5), new Point(10, 10)); // Output: 7.0710678118654755


/**
 * # Static Methods and Properties (non - strict mode) #
 */
function Animal() { }

Animal.prototype.speak = function() {
    return this;
}

// static method
Animal.eat = function() {
    return this;
}

const animal = new Animal();
let speak = animal.speak;
speak(); // Output: global object (in non–strict mode)

let eat = Animal.eat;
eat(); // Output: global object (in non-strict mode)


/**
 * # Instance properties #
 */
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}