/* Write your code below. Good luck! 🙂 */

// BMI = mass / (height * height)

const mark = {
  name: "Mark",
  fullName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  name: "John",
  fullName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
console.log(mark.bmi, john.bmi);

const compare = function () {
  if (mark.bmi > john.bmi) {
    return `${mark.name} ${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.name} ${john.fullName}'s (${john.bmi})`;
  } else if (john.bmi > mark.bmi) {
    return `${john.name} ${john}'s BMI (${john.bmi}) is higher than ${mark.name} ${mark.fullName}'s (${mark.bmi})`;
  }
};

console.log(compare());
