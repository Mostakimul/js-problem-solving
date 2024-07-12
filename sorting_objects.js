/**
 * 4.Task: Sorting Objects

 * Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

 */

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Honda', model: 'Accord', year: 2020 },
  { make: 'Ford', model: 'Mustang', year: 2015 },
  { make: 'BMW', model: 'X5', year: 2019 },
  { make: 'Tesla', model: 'Model S', year: 2021 },
];

const sortByYearAscending = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const result = sortByYearAscending(cars);
console.log(result);
