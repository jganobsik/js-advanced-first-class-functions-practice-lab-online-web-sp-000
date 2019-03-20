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

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

