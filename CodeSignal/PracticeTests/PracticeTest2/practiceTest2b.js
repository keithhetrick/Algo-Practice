function solution(s, t) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      let newArray = s.split("").filter((item) => item !== s[i]);
      console.log(newArray);

      if (newArray.join("") < t) {
        console.log("yes");
        count++;
      } else {
        console.log("no");
      }
    }
  }
  return count;
}

solution("ab12c", "1zz456");
