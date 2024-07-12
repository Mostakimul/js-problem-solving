const square = (num) => {
  return num * num;
};

const double = (num) => {
  return num * 2;
};

const addFive = (num) => {
  return num + 5;
};

const squareDoubleAndAddFive = (num) => {
  let finalNumber;
  finalNumber = square(num);
  finalNumber = double(finalNumber);
  finalNumber = addFive(finalNumber);
  return finalNumber;
};

const number = 5;
const result = squareDoubleAndAddFive(number);
console.log(result);
