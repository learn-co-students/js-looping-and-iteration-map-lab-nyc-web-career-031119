// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (name) {
    return name.toLowerCase();
  })
}

function nameToAttributes(arr) {
  return arr.map(function (name) {
    const full_name = name.split(" ");
    const first = full_name[0];
    const last = full_name[1];
    return Object.assign({}, {['firstName']: first, ['lastName']: last});
  })
}

function attributesToPhrase(arr) {
  return arr.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
