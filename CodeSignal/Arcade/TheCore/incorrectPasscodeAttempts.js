// Incorrect Passcode Attempts
// https://app.codesignal.com/company-challenges/dropbox/ffibMFaS7mzKZkAE3

function solution(passcode, attempts) {
  let passcodeAttemptLimit = 10;
  let deviceLocked = false;

  for (let i = 0; i < attempts.length; i++) {
    if (passcodeAttemptLimit === 0) {
      deviceLocked = true;
    }

    if (attempts[i] === passcode) {
      passcodeAttemptLimit = 10;
    } else {
      passcodeAttemptLimit--;
    }
  }

  if (passcodeAttemptLimit === 0) {
    deviceLocked = true;
  }

  console.log("\nIS DEVICED LOCKED: ", deviceLocked);
  return deviceLocked;
}
solution("1111", [
  "1111",
  "4444",
  "9999",
  "3333",
  "8888",
  "2222",
  "7777",
  "0000",
  "6666",
  "7285",
  "5555",
  "1111",
]); // expects true
solution("1234", [
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "1234",
  "9999",
  "9999",
]); // expects false
solution("1111", [
  "1111",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "9999",
  "1111",
]); // expects true
solution("1111", []); // expects false
solution("1111", [
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
]);
// expects false
solution("1112", [
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
]); // expects true
solution("1112", [
  "1112",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
  "1111",
]); // expects true
