// Time Conversion

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

// Function Description
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):
// string s: a time in 12 hour format

// Returns
// string: the time in 24 hour format

// Input Format
// A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM ).

// Constraints
// All input times are valid

// Solution 1
function timeConversion(s) {
  let lastTwo = s.substring(8);
  let fullTime = s.substring(0, 8);
  let times = fullTime.split(":");

  if (lastTwo === "PM") {
    if (times[0] !== "12") times[0] = parseInt(times[0]) + 12;
  } else if (times[0] === "12") times[0] = "00";

  return times.join(":");
}
timeConversion("07:05:45PM"); // expects 19:05:45

// Solution 2
function timeConversion(s) {
  let time = s.split(":");
  let hour = time[0];
  let min = time[1];
  let sec = time[2].slice(0, 2);
  let ampm = time[2].slice(2, 4);

  if (ampm === "PM" && hour !== "12") hour = Number(hour) + 12;
  if (ampm === "AM" && hour === "12") hour = "00";

  return `${hour}:${min}:${sec}`;
}
timeConversion("07:05:45PM"); // expects 19:05:45
