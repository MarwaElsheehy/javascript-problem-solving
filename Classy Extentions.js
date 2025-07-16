class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}
const cat = new Cat("Mr Whiskers");
console.log(cat.speak());
