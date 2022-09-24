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