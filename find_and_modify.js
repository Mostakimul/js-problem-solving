/**
 * 5.Task: Find And Modify
  Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
 */

let people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 28 },
];

const updateAgeByName = (name, people, newAge) => {
  const personToUpdate = people.find((person) => person.name === name);

  if (!personToUpdate) {
    console.log('No person found!');
    return;
  }
  personToUpdate.age = newAge;

  return people;
};

people = updateAgeByName('Bob', people, 32);

console.log(people);
