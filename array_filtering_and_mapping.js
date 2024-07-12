const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 35, gender: 'male' },
  { name: 'Diana', age: 28, gender: 'female' },
  { name: 'Emily', age: 22, gender: 'female' },
];

const filterdNames = (people) => {
  const filteredPeople = people.filter((person) => person.gender !== 'female');
  const namesArray = filteredPeople.map((person) => person.name);
  return namesArray;
};

const finalNames = filterdNames(people);
console.log(finalNames);
