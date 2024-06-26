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

/*
 * calculateCompoundInterest calculates and returns the compound interest
 * (floor value) for a fixed deposit. Formula used is,
 *   Compound Interest=P[(1+I/100)^N - 1]
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

/*
 * extraAmountPercentage calculates and returns the extra amount percentage borrower will have to pay in case of
 * compound interest (floor value) in comparison to the simple interest for a fixed deposit.

 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - Daily interest rate.
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} percentage
*/

function calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ){
    // Add your code here
    s = new Date(startingDate);
    e = new Date(endingDate);
    if (s == "Invalid Date") {
        return -1;
    }
    if (e == "Invalid Date") {
        return -1;
    }
    time_difference_milliseconds = e.getTime() - s.getTime();
    time_difference_days = time_difference_milliseconds / (1000 * 60 * 60 * 24); // 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day
    interest = Number(principal) * Number(dailyInterest) * Number(time_difference_days) / 100;
    
    return Math.floor(interest);
  }

function calculateCompoundInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
    
    // Add your code here
    s = new Date(startingDate);
    e = new Date(endingDate);
    if (s == "Invalid Date") {
        return -1;
    }
    if (e == "Invalid Date") {
        return -1;
    }
    time_difference_milliseconds = e.getTime() - s.getTime();
    time_difference_days = time_difference_milliseconds / (1000 * 60 * 60 * 24); // 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour, 24 hours in a day
    N = Number(time_difference_days);
    P = Number(principal);
    I = Number(dailyInterest);
    inside = Number(1+I/100);
    inside_n = inside**N;
    inside_last = inside_n - 1;

    interest = Number(P*inside_last);
  
    return Math.floor(interest);
  }
  
  
  function extraAmountPercentage(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
    // Add your code here
    simple = calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate);
    compound = calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate);
    if (simple == -1) {
        return -1;
    }
    if (compound == -1) {
        return -1;
    }
    percentage = (compound - simple) * 100 / simple;
    
    return Math.floor(percentage);
  
  }

console.log(calculateSimpleInterest(20000, 1, "2020-12-27", "2021-08-27"));
console.log(calculateCompoundInterest(20000, 1, "2020-12-27", "2021-08-27"));
console.log(extraAmountPercentage(20000, 1, "2020-12-27", "2021-08-27"));

console.log(calculateSimpleInterest(22000, 2.5, "2020-12-27", "2021-06-27"));
console.log(calculateCompoundInterest(22000, 2.5, "2020-12-27", "2021-06-27"));
console.log(extraAmountPercentage(22000, 2.5, "2020-12-27", "2021-06-27"));