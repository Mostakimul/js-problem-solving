/**
 * 1.Task: Array Filtering And Mapping

* Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

 */
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
