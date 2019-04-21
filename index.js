// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (driversName){
    return driversName.toLowerCase()
  });
}

function nameToAttributes(list){
  return list.map(function(drivers) {
    const first = drivers.split(" ")[0];
    const last = drivers.split(" ")[1];
    return {firstName: first, lastName: last};
  });
}

function attributesToPhrase(list){
  return list.map(function(drivers){
    const name = drivers.name
    const hometown = drivers.hometown
    return `${name} is from ${hometown}`;
  });
}
