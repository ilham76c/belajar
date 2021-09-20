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
square.area; // Output: 100


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
[...pentagon.getSides()]; // Output: [1,2,3,4,5]
