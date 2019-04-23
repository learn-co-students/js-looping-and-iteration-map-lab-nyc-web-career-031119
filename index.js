function lowerCaseDrivers(arr) {
	let newArr = []
  arr.map(function(driver) {
    newArr.push(driver.toLowerCase())
});
return newArr;
}


function nameToAttributes(arr) {
  return arr.map(function(driver) {
  return {firstName: driver.split(" ")[0]
, lastName:driver.split(" ")[1]};
});
}

function attributesToPhrase(arr) {
  return arr.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}