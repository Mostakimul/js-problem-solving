/** 
 * 3.Task: Function Composition

* Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That  Squares A Number, Doubles The Result, And Then Adds 5.

 */
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
