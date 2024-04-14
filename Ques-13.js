//Write a JavaScript Program to Check Leap Year.

function checkLeapYear(year) {
  if (year % 400 == 0 || year % 100 == 0) {
    return console.log("Leap Year " + year);
  } else if (year % 4 == 0 || year % 100 == 0) {
    return console.log("Leap Year " + year);
  } else {
    console.log(year + " is not leap year");
  }
}

checkLeapYear(2030);
