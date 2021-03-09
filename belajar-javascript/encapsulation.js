/* eslint-disable object-shorthand */

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + (this.overtime * this.rate);
  },
};

console.log(employee.getWage());

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

getWage(baseSalary, overtime, rate);
