function solution(pattern, source) {
  let array = [];
  let vowels = ["a", "e", "i", "o", "u", "y"];

  for (let i = 0; i < source.length - pattern.length; i++) {
    let substring = [];

    for (let x = 0; x < pattern.length; x++) {
      if (source.slice(i, i + pattern.length).includes(vowels)) {
        console.log("Yes");
        substring.push(0);
      } else {
        console.log("No");
        substring.push(1);
      }
    }

    let newPattern = pattern;
    let newPattern2 = Array.from(newPattern, Number);

    console.log(newPattern2, substring);
    if (newPattern2 == substring) array.push(1);
    else array.push(0);

    console.log(array);
    return array;
  }
}
solution("010", "amazing");
