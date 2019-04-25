// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(driver => {
    return driver.toLowerCase()
  });
}

function nameToAttributes(drivers){
  return drivers.map(function(driver) {
    let split = driver.split(' ');
    return {firstName: split[0], lastName: split[1]};
  })
}

function attributesToPhrase(drivers){
  return drivers.map(driver => driver.name + ' is from ' + driver.hometown)
}
