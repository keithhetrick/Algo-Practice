// Day of the Programmer
// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
  let date = "";

  if (year === 1918) date = "26.09.1918";
  else if (year < 1918) {
    if (year % 4 === 0) date = "12.09." + year;
    else date = "13.09." + year;
  } else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
      date = "12.09." + year;
    else date = "13.09." + year;
  }
  return date;
}
dayOfProgrammer(2017); // expects "13.09.2017"
dayOfProgrammer(2016); // expects "12.09.2016"
