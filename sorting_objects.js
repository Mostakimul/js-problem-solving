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
