// I want to learn Datasture and Algorithm
// Imagine you are a professor about DSA with 10 years experience
// I will give you the stureture like this

// Question: Given an array of integers, return the indices of the numbers that add up to a given number.

// Step 1: Verify the constraints
// - positive or negative?
// - are there duplicate numbers in the array?
// - will there always be a solutions availale?
// - what do we return if there's no solution?
// - can there by multiple pairs that add up to the target number?

// Step2: write out some test case
// - [1,2,3,4] => 7 => [2,3]
// - [1] => 10 => null
// - [1,2] => 3 => [0,1]
// - [1,2] => 4 => null
// - [] => 10 => null
// - [1,3,4] => 5 => null

// Step3: Find out a solution without code
// - We will loop through array with 2 nested loop and check if the value of current index + the value of the next one is equal to target number
// - If these are the same, we will return these 2 indices
// - If not , we coninue loop through
// - If the loop is over, and there are no suitable value, return null.

// Step4: Write out the brute force solution
const numberArray = [1, 2, 3, 4, 5, 6];
const targetNumber = 10;

const easySolution = (nums = numberArray) => {
  if (nums.length <= 1) return null;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === targetNumber) {
        return [i, j];
      }
    }
  }
  return null;
};
// console.log(easySolution(numberArray));

// Step5: Write out the optimized sulution
// - the brute-force solution have:
// - time complexity is: 0(n^2) - 2 for loops nested.
// - space complexity is: 0(1) - just i and j variable
// - So, is there any data stucture or algorithms that will decrease the time complexity?
// - Yes, we will using hashmap(object).
// - But, it is trade off, descrease time complexity will increase space complexity.

const optimizedSolution = (nums = numberArray) => {
  if (nums.length <= 1) return null;
  const complementRecieved = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = targetNumber - nums[i];

    if (complementRecieved.hasOwnProperty(complement)) {
      return [complementRecieved[complement], i];
    }
    complementRecieved[nums[i]] = i;
  }

  return null;
};

// console.log(optimizedSolution(numberArray));
