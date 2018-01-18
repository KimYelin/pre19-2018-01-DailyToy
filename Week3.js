//Daily Toy 3rd-MON. removeEvenValues

/*Write a function called "removeEvenValues".
Given any object, "removeEvenValues" removes any properties whose values are even numbers.
Do this in place and return the original object, do not construct a cloned object that omits the properties.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }

Note: Remember, we are talking about any object, not just the one shown in the sample.*/

function removeEvenValues(obj) {
  // your code here
  for(var key in obj){
    if (obj[key] %2 === 0)
      delete obj[key];
  }
}
var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3}

/* Model Solution
function removeEvenValues(obj) {
  for (var key in obj) {
    if (obj[key] % 2 === 0) {
      delete obj[key];
    }
  }
}*/


//Daily Toy 3rd-TUE. removeStringValues

/*Write a function called "removeStringValues".
Given an object, "removeStringValues" removes any properties on the given object whose values are strings.*/

function removeStringValues(obj) {
  for(var key in obj){
    if(typeof obj[key]=== 'string')
      delete obj[key];
  }
}

var obj = {
  name: 'Sam',
  job: 'student',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }

/* Model Solution
function removeStringValues(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      delete obj[key];
    }
  }
}
*/


//Daily Toy 3rd-WED. convertDoubleSpaceToSingle

/*Write a function called "convertDoubleSpaceToSingle".
Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.*/

function convertDoubleSpaceToSingle(str) {
  var withDouble = str.split('  ');
  return withDouble.join(' ');
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

/* Model Solution
function convertDoubleSpaceToSingle(str) {
  return str.split('  ').join(' ');
}*/


//Daily Toy 3rd-THU. addToFrontOfNew

/*Write a function called "addToFrontOfNew".
Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.
Important: It should be a NEW array instance, not the original array instance.*/

function addToFrontOfNew(arr, element) {
  var newArray = arr.slice();
  newArray.unshift(element);
  return newArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

/* Model Solution
function addToFrontOfNew(arr, element) {
  var newArr = arr.slice();
  newArr.unshift(element);
  return newArr;
}*/


//Daily Toy 3rd-FRI. getAllElementsButNth

/*Write a function called "getAllElementsButNth".
Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.*/

function getAllElementsButNth(array, n) {
  array.splice(n,1);
  return array;
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

/* Model Solution
function getAllElementsButNth(array, n) {
  array.splice(n, 1);
  return array;
}*/
