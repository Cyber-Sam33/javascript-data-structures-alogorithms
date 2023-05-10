let instructor = {
  firstName: 'Sam',
  isInstructor: true,
  favouriteNumber: [3, 7, 99, 11]
};


//Object.keys is O(n)
// const keys = Object.keys(instructor);
// console.log(keys);

//same as above with object.values.  Needs to go through each element, therefore 'N' number of operations
// same for 'entries'(key and value).  Bot more comlpex but simplifies to O(n) at the end of the day

//hasOwnProperty - 0(1) - a constant operation in constant time
const hasProp = instructor.hasOwnProperty("firstName");
console.log(hasProp);

//Overall Objects are quick for pretty much everything but no order.  
//Basic and work well in constant time - O(1). Seraching is still O(n)