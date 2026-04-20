const people = [
  {
    name: "Person One",
    yearOfBirth: 1900,
    yearOfDeath: 1980,
  },
  {
    name: "Person Two",
    yearOfBirth: 1920,
    yearOfDeath: 2000,
  },
  {
    name: "Person Three",
    yearOfBirth: 1870,
    yearOfDeath: 1950,
  },
  {
    name: "Person Four",
    yearOfBirth: 1950,
    // still alive
  }
];

const findTheOldest = function(people) {
  let oldestPerson = people[0];
  let maxAge = 0;

  for (let i = 0; i < people.length; i++) {
    const person = people[i];

    const deathYear = person.yearOfDeath || new Date().getFullYear();
    const age = deathYear - person.yearOfBirth;

    if (age > maxAge) {
      maxAge = age;
      oldestPerson = person;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;