//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

/*

Task Description
You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.

Input
Input will always be a string, e.g., "Friday May 2, 7pm". 

Output
Output will be the shortened string, e.g., "Friday May 2".

*/

function shortenToDate(longDate) {
    // your code here
    
  return longDate.split(",")[0]
  
  // splitting by the comma sets everything before it as the first indexed item in the new array. This is what shouldbe returned.
  
  }


//  PROBLEM NUMBER 2
  
/*   You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

    Your function will accept three arguments:
    The first and second argument should be numbers.
    The third argument should represent a sign indicating the operation to perform on these two numbers.

    if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

    Example:
    calculator(1,2,"+"); //=> result will be 3
    calculator(1,2,"&"); //=> result will be "unknown value"
    calculator(1,"k","*"); //=> result will be "unknown value"
    Good luck!
  
  */

    function calculator(a,b,sign){
        //your code here
        if 
        //a and b must be numbers


        //and 'sign' must be an operand
        && sign === "+" || "-" || "/" || "*" 


        //or else it returns an "unknown value" message
        else {
            return "unkown value"
        }

    }