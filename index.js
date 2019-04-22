// Code your solution in this file.


function lowerCaseDrivers(array) {
  return array.map(driver => driver.toLowerCase())
}

function objName(name) {
  let objN = {};
  let arrName = name.split(" ");
  objN.firstName = arrName[0];
  objN.lastName = arrName[1];
  return objN
}

function nameToAttributes(array) {
  return array.map(driver => objName(driver))
}

function placeDriver(inst) {
  return `${inst.name} is from ${inst.hometown}`
}

function attributesToPhrase(array){
  return array.map(driver => placeDriver(driver))
}
