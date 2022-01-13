function filteredRoles(personArray, roles = "Teacher"){
  // Code the function here.
  const mySortedArray = [];

  if(personArray[0].role === roles){
    mySortedArray.push({name:personArray[0].name, role:roles});
  }
  if(personArray[1].role === roles){
    mySortedArray.push({name:personArray[1].name, role:roles});
  }
  if(personArray[2].role === roles){
    mySortedArray.push({name:personArray[2].name, role:roles});
  }
  if(personArray[3].role === roles){
    mySortedArray.push({name:personArray[3].name, role:roles});
  }
  return mySortedArray;
}
// Do not remove lines below, it is for tests
module.exports = filteredRoles;
