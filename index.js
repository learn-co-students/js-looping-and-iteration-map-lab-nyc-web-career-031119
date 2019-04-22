// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  })
  return newDrivers;
}

function nameToAttributes(drivers) {
  const attrs = drivers.map(function (dr) {
    return Object.assign({}, { firstName: dr.split(" ")[0], lastName: dr.split(" ")[1] });
  });
  return attrs;
}

function attributesToPhrase(drivers) {
  const phrases = drivers.map(function (dr) {
    return `${dr.name} is from ${dr.hometown}`;
  });

  return phrases;
}
