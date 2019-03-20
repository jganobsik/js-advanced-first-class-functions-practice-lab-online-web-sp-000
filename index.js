// Code your solution in this file!
const logDriverNames = function (array) {
  array.forEach(function (person) {
    console.log(person.name);
  });
};

const logDriversByHometown = function (array, hometown) {
  array.forEach(function (person) {
    if (person.hometown === hometown){
    console.log(person.name);
    }
  });
};


