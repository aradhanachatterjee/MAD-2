/*
 * calculateSimpleInterest calculates and returns the simple interest
 * (floor value) for a fixed deposit. Formula used is,

 * calculateSimpleInterest calculates and returns the simple interest
 * for a fixed deposit. Formula used is,
 * Simple Interest: P X R X T / 100
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/


function calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
    if (typeof principal !== 'number' || typeof dailyInterest !== 'number') {
      return -1;
    }

    // Check if dailyInterest is a number
    if (isNaN(dailyInterest)) {
      return -1;
    }

    let startDate, endDate;
    try {
        startDate = new Date(startingDate);
        endDate = new Date(endingDate);
        
        // Check if dates are valid
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            return -1;
        }
    } catch (e) {
        return -1;
    }
    const difference = endDate.getTime() - startDate.getTime();
    if (difference < 0) {
        return -1;
    }
    const days = difference / (1000 * 3600 * 24);

    // calculate simple interest
    const interest = (principal * dailyInterest * days) / 100;

    return Math.floor(interest);

    }

// let startingDate = new Date("2015-03-25");
// let endingDate = new Date("2015-03-30");
// let difference = endingDate - startingDate;
// let days = difference / (1000 * 3600 * 24);
// console.log(days);

console.log(calculateSimpleInterest(40000, 2, 30, "2021-08-27")); // 0

function calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate) {
  // Step 1: Validate input parameters
  if (typeof principal !== 'number' || typeof dailyInterest !== 'number') {
      return -1;
  }
  
  // Check if dailyInterest is a valid number
  if (isNaN(dailyInterest)) {
      return -1;
  }
  
  // Step 2: Parse the dates and calculate the number of days
  let startDate, endDate;
  try {
      startDate = new Date(startingDate);
      endDate = new Date(endingDate);
      
      // Check if dates are valid
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
          return -1;
      }
  } catch (e) {
      return -1;
  }
  
  // Calculate the number of days
  const timeDifference = endDate.getTime() - startDate.getTime();
  if (timeDifference < 0) {
      return -1; // End date is before start date
  }
  const numberOfDays = timeDifference / (1000 * 3600 * 24);
  
  // Step 3: Calculate Simple Interest
  const simpleInterest = (principal * dailyInterest * numberOfDays) / 100;
  
  // Step 4: Floor the result and return
  return Math.floor(simpleInterest);
}

// Example Usage:
const principal = 1000;
const dailyInterest = 0.05;
const startingDate = 30;
const endingDate = "2023-01-31";

const interest = calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate);
console.log(interest);  // Output should be the floored value of calculated simple interest
