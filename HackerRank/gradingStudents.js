// Function Description
// Complete the function gradingStudents in the editor below.
// gradingStudents has the following parameter(s):
// int grades[n]: the grades before rounding

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && (grades[i] % 5 == 3 || grades[i] % 5 == 4)) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    }
  }
  console.log(grades);
  return grades;
  //  if value to the nearest multiple of 5 is less than 3, round up

  //  if value to the nearest multiple of 5 is equal to or more than 3, do nothing

  //  if value is less than 40, don't round - failing grade
}
gradingStudents([73, 67, 38, 33]);
