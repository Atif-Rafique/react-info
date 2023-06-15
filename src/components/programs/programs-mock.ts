// ======== ASSETS ========

import { PROGRAMS_ASSETS } from "../../assets/images/programs";

export const PROGRAMS_DATA = [
  {
    id: "01",
    heading: "1) Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    img: PROGRAMS_ASSETS.twoSums,
    codeExplanation: `In this solution, we iterate through the array nums and for each number, we calculate its complement (target - nums[i]) to find the other number needed to reach the target. If the complement exists in the hash map, we return the indices of the current number and its complement. 
    If no two numbers add up to the target, we return an empty array.`,
    code: `function twoSum(nums, target) {
            const numMap = new Map(); // Create a hash map to store values and indices
            
            for (let i = 0; i < nums.length; i++) {
              const complement = target - nums[i];

    // Check if the complement exists in the map
    if (numMap.has(complement)) {
      // Return the indices of the current number and its complement
      return [numMap.get(complement), i];
    }

    // Add the current number and its index to the map
    numMap.set(nums[i], i);
  }

  // If no two numbers add up to the target, return an empty array or handle the error accordingly
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] - Indices of the numbers 2 and 7 that add up to 9
`,
  },
  {
    id: "02",
    heading: "2) Best Time to Buy and Sell Stock",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
    img: PROGRAMS_ASSETS.maxProfit,
    codeExplanation: `In the given example, the maximum profit that can be achieved is 5 by buying at a price of 1 on day 2 and selling at a price of 6 on day 5.`,
    code: `function maxProfit(prices) {
    let minPrice = Infinity; // Initialize the minimum price to a very large value
    let maxProfit = 0; // Initialize the maximum profit to 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            // Update the minimum price if a smaller price is found
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            // Update the maximum profit if a higher profit is found
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}


const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(result); // Output: 5`,
  },
  {
    id: "03",
    heading: "03) Maximum Sum Sub Array",
    description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. A subarray is a contiguous part of an array.
    `,
    img: PROGRAMS_ASSETS.maxSubArray,
    codeExplanation: ` In the below code, we initialize currentSum and maxSum with the first element of the array.
    Then, we iterate through the array starting from the second element.
    At each step, we compare the current element with the sum of the current element and the previous subarray sum (currentSum + nums[i]).
    We update currentSum to be the larger of the two. We also update maxSum to be the maximum value between the current maximum sum and currentSum.
    Finally, we return the maxSum, which represents the largest sum of a contiguous subarray in the given array.`,
    code: `
    function maxSubarraySum(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Compare the current element with the sum of the current element and previous subarray sum
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update the maximum sum if the current sum is larger
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubarraySum(nums);
console.log(maxSum); // Output: 6

    
    `,
  },
  {
    id: "04",
    heading: "04) Min Stack",
    description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.`,
    img: "",
    codeExplanation: "",
    code: "",
  },
  {
    id: "05",
    heading: "05) Majority Element",
    description: ``,
    img: "",
    codeExplanation: "",
    code: ``,
  },
];
