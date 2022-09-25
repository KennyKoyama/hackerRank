// Create a polygon with side lengths 3, 4, and 5
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get perimeter() {
        return this.calcPerimeter;
    }
    calcPerimeter() {
        // const result = this.sides[0] + this.sides[1] + this.sides[2];
        let result = this.sides.reduce((sum, curr) => sum + curr, 0);
        return result
    }
};

let triangle = new Polygon([3, 4, 5]);

// Print the perimeter

console.log(triangle.perimeter());


class Rectangle {
    constructor(w, h) {
      this.w = w;
      this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    // console.log(this.w * this.h);
    return this.w * this.h
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(w, h) {
        super(w, h)
        this.w = w;
        this.h = w;
    }
}

const c = new Rectangle(3, 4);
const d = new Square(3);
c.area();
d.area(); // Mitzie barks.
console.log(d.area())
console.log(c.area())

console.log(JSON.stringify(Object.getOwnPropertyNames(Square.prototype)))

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}