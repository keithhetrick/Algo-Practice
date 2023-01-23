function solution(inputString) {
  let mid = inputString.length / 2;
  let firstHalf = inputString.substring(0, mid);
  let secondHalf = inputString.substring(mid, inputString.length);

  console.log("\nIS TANDEM REPEAT: ", firstHalf === secondHalf);
  return firstHalf === secondHalf;
}

solution("tandemtandem"); // expects true
solution("qqq"); // expects false
solution("2w2ww"); // expects false
solution("hophey"); // expects false
solution("CodeSignalCodeSignal"); // expects true
solution("interestinterest"); // expects true
solution("aa"); // expects true
solution("ab"); // expects false
solution("stringString"); // expects false
solution("truetruetrue"); // expects false
