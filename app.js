// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false


// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  // Write your code here
  if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day))//check if integer
   return true 
    else return false
}

// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  // Write your code here
  let currentDate = new Date() //to bring current date and time method
  let NewMonth = currentDate.getMonth()  //method returns the month in the specified date according to local time
  let NewDay = currentDate.getDate() //method returns the day of the month for the specified date according to local time.
  let NewYear = currentDate.getFullYear() //method returns the year (four digits for dates between year 1000 and 9999) of the specified date.
 
  x= NewYear - year // to find age
  if ( x>= 18) return true;
  
      else return false 

}
function calculateAgeFn(year, month, day) {
  // Write your code here
  if (!checkParamsFn(year, month, day)){return "error: unvalid type"} // if there is wrong value in farst fn
  if (! checkOverEighteenFn(year, month, day)){return "error: sorry u r under 18"} // if age was < 18

  let currentTime = new Date() // current date & time
  let NewMonth = currentTime.getMonth()  // current month
  let NewDay = currentTime.getDate() // curent day
  let NewYear = currentTime.getFullYear() // current year

  return Math.round((NewYear-year)+ (NewMonth-month)/12 + (NewDay-day)/365);
// Math.round() function returns the value of a number rounded to the nearest integer
// fix time unit all to year to do the calculations 
}
console.log (calculateAgeFn(1998, 10, 27))
console.log (calculateAgeFn(20009, 10, 20))
console.log (calculateAgeFn(2000.9, 10, 3))


// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;
