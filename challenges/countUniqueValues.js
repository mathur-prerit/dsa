// Solving problem using Multiple Counter which is solving problem with complexity O(N^2) by terminating nested loops by using multiple pointers at same time. But It can only work on sorted items.

/*
Example:- Sum Zero problem (One sorted array with in which pair of any two should be zero. To solve this we take to pointers one from begin and another from end & check them by incrementing or decrementing in each iterations)
*/

/*
Solution:- We used two pointers one toiterate over the array, and other to keep to track of current unqiue item
            So complexity will be O(N)
*/

const countUniqueValues = (array) => {
  let counter = 1;
  let selectedIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[selectedIndex]) {
      counter += 1;
      selectedIndex = i;
    }
  }
  return counter;
};

// const array = [1, 1, 2, 2, 3, 4, 4, 7, 8, 8, 8, 8, 10, 12, 16, 16]; //9 unique values
// const result = countUniqueValues(array);
// console.log(result);
