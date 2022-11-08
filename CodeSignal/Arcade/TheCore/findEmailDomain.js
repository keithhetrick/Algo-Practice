// Find Email Domain
// https://app.codesignal.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE

function solution(address) {
  let index = address.lastIndexOf("@");
  let domain = address.slice(index + 1, address.length);
  return domain;
}

solution("prettyandsimple@example.com"); // expects "example.com"
// solution(""very.unusual.@.unusual.com"@usual.com")
