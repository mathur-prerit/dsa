// Solving problem using Multiple Counter which is solving problem with complexity O(N^2) by terminating nested loops by using multiple pointers at same time. But It can only work on sorted items.

const averagePair = (arr, valInput) => {
  if (!arr.length) return false;

  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    const avg = arr[start] + arr[end] / 2;
    if (avg === valInput) {
      return true;
    } else if (avg < valInput) {
      start++;
    } else if (avg > valInput) {
      end--;
    }
  }

  return false;
};

// const res = averagePair([1,3,3,5,6,7,10,12,19],8)
// console.log(res)
