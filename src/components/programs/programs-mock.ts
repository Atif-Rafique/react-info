
// ======== ASSETS ========

import { PROGRAMS_ASSETS } from "../../assets/images/programs";




export const PROGRAMS_DATA = [
  {
    id: '01',
    heading: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    img: PROGRAMS_ASSETS.twoSums,
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
`
  },
  {
    id: '02',
    heading: "Best Time to Buy and Sell Stock",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
    img: PROGRAMS_ASSETS.maxProfit,
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
console.log(result); // Output: 5`
  }
]