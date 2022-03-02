// Solving problem using Sliding Window so instead of using two loops can calculating sum again and again we setup a initial value sum & in a loop iteration we substract the first value and add next value and compare

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
