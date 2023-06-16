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
    heading: "04) Min Stack (With OOP Concept)",
    description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.


Implement the MinStack class:
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.`,
    img: PROGRAMS_ASSETS.jsOOP,
    codeExplanation: `In this implementation, we define a MinStack constructor function that serves as a blueprint for creating stack objects. 
    The methods (push, pop, top, getMin) are added to the MinStack prototype, allowing all instances of MinStack to share the same set of methods.

To create a new stack object, you can use the new keyword and assign it to a variable. For example, const stack = new MinStack();. 
Then, you can use the instance methods (push, pop, top, getMin) on the stack object.

In the example usage, we create a new stack, push elements onto it, and demonstrate the usage of the getMin, pop, and top methods.`,
    code: `class MinStack {
  constructor() {
    this.stack = []; // Stack to store the elements
    this.minStack = []; // Stack to track the minimum elements
  }

  push(val) {
    this.stack.push(val);

    // Update the minimum stack
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop() {
    const popped = this.stack.pop();

    // Remove the element from the minimum stack if it is the current minimum
    if (popped === this.getMin()) {
      this.minStack.pop();
    }

    return popped;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage:
const stack = new MinStack();
stack.push(5);
stack.push(2);
stack.push(7);
console.log(stack.getMin()); // Output: 2
console.log(stack.pop()); // Output: 7
console.log(stack.top()); // Output: 2
`,
  },
  {
    id: "05",
    heading: "05) Most Repeated Elements in Array",
    description: ``,
    img: PROGRAMS_ASSETS.mostRepeatedElements,
    codeExplanation: `Here's a breakdown of the code:

1) Initialize an empty object elementCount to store the count of each element.
2) Initialize variables mostRepeatedElement and maxCount to keep track of the element with the maximum count.
3) Iterate over each element of the input array using a for...of loop.
4) Check if the current element exists as a property in the elementCount object.
4-a) If it exists, increment its count by 1.
4-b) If it doesn't exist, set its count to 1.
5) After updating the count, compare it with the current maximum count (maxCount).
6) If the current count is greater than maxCount, update mostRepeatedElement and maxCount with the current element and its count.
7) Repeat steps 4-5 for all elements in the array.
Return the mostRepeatedElement, which will be the element that is repeated the most number of times in the array.`,
    code: `
    function findMostRepeatedElement(array) {
  const elementCount = {};
  let mostRepeatedElement = null;
  let maxCount = 0;

  for (let element of array) {
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }

    if (elementCount[element] > maxCount) {
      mostRepeatedElement = element;
      maxCount = elementCount[element];
    }
  }

  return mostRepeatedElement;
}
`,
  },
  {
    id: "06",
    heading: "06) Valid Parenthesis",
    description: `Given a string containing only parentheses (( and )), determine if the string is valid. An input string is valid if:
      
      1) Open brackets must be closed by the same type of brackets.
2) Open brackets must be closed in the correct order.`,
    img: PROGRAMS_ASSETS.validParenthesis,
    codeExplanation: `In this solution, we use a stack data structure to keep track of the opening parentheses encountered. 
    We iterate over each character in the input string and perform the following operations:

If the character is an opening parenthesis (i.e., '(', '[', or '{'), we push it onto the stack.
If the character is a closing parenthesis (i.e., ')', ']', or '}'),
 we check if there is a matching opening parenthesis at the top of the stack. 
 If there isn't, or if the opening and closing parentheses don't match, we return false indicating an invalid string of parentheses.
After iterating through all the characters, we check if there are any remaining unclosed parentheses in the stack. 

If there are, the string is invalid; otherwise, it is valid.
You can call the isValidParentheses function with a string of parentheses to check its validity. It will return true if the parentheses are valid and false otherwise.`,
    code: `function isValidParentheses(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      // If opening bracket, push it to the stack
      stack.push(char);
    } else {
      // If closing bracket, check if it matches the top of the stack
      if (stack.length === 0) {
        return false; // No matching opening bracket
      }

      const top = stack.pop(); // Get the top of the stack

      // Check if the opening and closing brackets match
      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false; // Mismatched opening and closing brackets
      }
    }
  }

  return stack.length === 0; // Check if any opening brackets are left unclosed
}

console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
`,
  },
];
