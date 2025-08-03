class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    return 2 * (
      this.length * this.width +
      this.length * this.height +
      this.width * this.height
    );
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
let cuboid = new Cuboid(4, 5, 6);
console.log(cuboid.surfaceArea);
console.log(cuboid.volume);
