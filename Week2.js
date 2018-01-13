//Daily Toy 2nd-MON. joinArrays

/*Write a function called "joinArrays".
Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2".
You should be familiar with the "concat" method for this problem*/

function joinArrays(arr1, arr2) {
  // your code here
  var joinedArray = arr1.concat(arr2);
  return joinedArray;
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]


//Daily Toy 2nd-TUE. getAllLetters

/*Write a function called "getAllLetters".
Given a word, "getAllLetters" returns an array containing every character in the word.
Notes:* If given an empty string, it should return an empty array.
*/

function getAllLetters(str) {
  // your code here
  if(str)
    return str.split('');//이게 정답. 이거 한 줄만 써도 됨
  else
    return [];
}

var output = getAllLetters('');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']


//Daily Toy 2nd-WED. getAllWords

/*Write a function called "getAllWords".
Given a sentence, "getAllWords" returns an array containing every word in the sentence.
Notes:* If given an empty string, it should return an empty array.
*/

function getAllWords(str) {
  // your code here
  if(str)
    return str.split(' ');
  else
    return [];
  /*조건연산자 사용*/
  //return str ? str.split(' ') : [] -> 간단하게 한줄로 작성 가능.

}
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']


//Daily Toy 2nd-THU. isEitherEvenOrAreBoth7

/*Write a function called "isEitherEvenOrAreBoth7".
Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.*/

function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  if((num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 ===7))
    return true;
  else
    return false;
}
var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false
var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true


//Daily Toy 2nd-FRI. extend

/*Write a function called "extend".
Given two objects, "extend" adds properties from the 2nd object to the 1st object.
Notes:* Add any keys that are not in the 1st object.* If the 1st object already has a given key, ignore it (do not overwrite the property value).* Do not modify the 2nd object at all.
*/

function extend(obj1, obj2) {
  for(var prop in obj2){
    if (!obj1.hasOwnProperty(prop)) {
      obj1[prop] = obj2[prop];
    }
  }
}
/* -----or-----
function extend(obj1, obj2) {
  for (var prop in obj2) {
    if (!obj1.hasOwnProperty(prop)) {
      obj1[prop] = obj2[prop];
    }
  }
}
*****이게 정답*****
function extend(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj1[key] || obj2[key];
  }
}

*/

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};
/*for (var prop in obj1){
    console.log(prop, obj1[prop]);
  } => a 1 b 2*/

/*console.log(obj1); // --> {a: 1, b: 2}
console.log(obj2);*/ // --> {b: 4, c: 3}

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
