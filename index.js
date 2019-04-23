// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let lowerCased = drivers.map(x => x.toLowerCase());
  return lowerCased;
};

function nameToAttributes(drivers) {
  let test = drivers.map(x => converter(x));
  return test;
};

// helper method
function converter(string) {
  let newObject = Object.assign({}, {firstName: string.split(' ')[0], lastName: string.split(' ')[1]});
  return newObject;
}

function attributesToPhrase(drivers) {
  let phrase = drivers.map(x => `${x.name} is from ${x.hometown}`)
  return phrase
};
