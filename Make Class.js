function makeClass(...props) {
  return class {
    constructor(...values) {
      props.forEach((prop, index) => {
        this[prop] = values[index];
      });
    }
  };
}
const Animal = makeClass("name", "species", "age", "health", "weight", "color");

const lion = new Animal("Leo", "Lion", 5, "Good", 190, "Golden");
console.log(lion);
