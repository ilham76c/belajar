/**
 * # Public field declarations #
 */
class Rectangle1 {
    /**
     * Property/variable height dan width dapat diakses melalui instance class
     * karena property tersebut bersifat public.
     */
    height = 0;
    width;
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
const rec1 = new Rectangle1(10, 15);
console.log(rec1.height);
// Output: 10
  

/**
 * # Private field declarations #
 */
class Rectangle2 {
    /**
     * Property/variable height dan width tidak dapat diakses melalui instance class
     * karena bersifat private.
     * Pada javascript untuk membuat suatu property/variable bersifat private,
     * kita harus mengawali variable dengan character "#".
     * Dan jika kita mengakses height dan width melalui instance,
     * maka output yang ditampilkan akan "undefined".
     */
    #height = 0;
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
}
const rec2 = new Rectangle2(10, 15);
console.log(rec2.height);
// Output: undefined