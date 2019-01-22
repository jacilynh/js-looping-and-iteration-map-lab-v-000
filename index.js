function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase() ); 
}

function nameToAttributes(drivers) {
  return drivers.map(d => Object.assign({}, {firstName: d.split(" ")[0]}, {lastName: d.split(" ")[1]}))
}