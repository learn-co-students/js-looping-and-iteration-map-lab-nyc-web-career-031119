function lowerCaseDrivers(drivers) {
  return drivers.map( driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
 return drivers.map( function(driver) {
   var splitName = driver.split(" ");
   return {firstName: splitName[0], lastName: splitName[1]};
 });
}

function attributesToPhrase(arr) {
  return arr.map(driver => `${driver.name} is from ${driver.hometown}`)
}
