// let abc = "word"
// let abc = String(1234)
// let abc = [1,2,3,4]
// let abc = ['abc','bcd','cde','def']
// let abc = ["Daisy", "Rose", "Hyacinth", "Poppy"];
// console.log(abc.slice(1, 3));

function solution(arr) {
  let i = 0;
  let output = "";
  for (let j = i; j < arr[i].length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][j] != undefined) {
        output += arr[i][j];
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    output += arr[i].slice(arr[0].length, arr[i].length + 1);
  }

  console.log(output);
  return output;
}
solution(["Daisy", "Rose", "Hyacinth", "Poppy"]); // expects DRHPaoyoisapsecpyiynth
