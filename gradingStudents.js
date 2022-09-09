// HackerLand University has the following grading policy:
// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's grade according to these rules:
// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

// Examples
//   grade = 84 round to 85 (85 - 84 is less than 3)
//   grade = 29 do not round (result is less than 40)
//   grade = 57 do not round (60 - 57 is 3 or higher)

// Given the initial value of grade for each of Sam's m students, write code to automate the rounding process.

// Function Description
// Complete the function gradingStudents in the editor below.
// gradingStudents has the following parameter(s):

//   int grades[n]: the grades before rounding

// Returns
//   int[n]: the grades after rounding as appropriate

// Input Format
// The first line contains a single integer, n, the number of students.
// Each line i of the n subsequent lines contains a single integer, grades[i].

// Constraints
//   1 ≤ n ≤ 60
//   0 ≤ grades[i] ≤ 100

// Solution 1
let grades = [4, 73, 67, 38, 33];

function gradingStudents(grades) {
  let newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 5) {
      grades[i] = grades[i];
    }
    if (grades[i] < 35 && grades[i] > 30) {
      grades[i] = grades[i];
    }
    if (grades[i] < 40 && grades[i] > 35) {
      grades[i] = Math.round(grades[i] / 5) * 5;
    }
    if (grades[i] < 70 && grades[i] > 65) {
      grades[i] = grades[i];
    }
    if (grades[i] < 75 && grades[i] > 70) {
      grades[i] = Math.round(grades[i] / 5) * 5;
    }
    newGrades.push(grades[i]);
  }
  newGrades.shift();
  console.log("grades outside loop :", newGrades);
  newGrades = grades;
  return grades;
}
gradingStudents(grades);

// Solution 2
let grades = [4, 73, 67, 38, 33];

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && (grades[i] % 5 == 3 || grades[i] % 5 == 4)) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    }
  }
  console.log(grades);
  return grades;
}
gradingStudents(grades);
