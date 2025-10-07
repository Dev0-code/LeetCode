/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
       
let mySet = new Set();   
let duplicates = new Map(); 
for (let value of nums) {
  if (mySet.has(value)) {
    if (duplicates.has(value)) {
      duplicates.set(value, duplicates.get(value) + 1);
    } else {
      duplicates.set(value, 2);
    }
  } else {
    mySet.add(value);
  }
}
let keysArray = [...duplicates.keys()];
 return keysArray
};