function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase() ); 
}

function nameToAttributes(drivers) {
  return drivers.map(driver => Object.assign{