// 52. Proper Noun Correction
// https://app.codesignal.com/arcade/code-arcade/book-market/2nSEQ8CGoddTJtnbo

/*
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Correct a given proper noun so that it fits this statement.
 * Example
 * For noun = "pARiS", the output should be
 * solution(noun) = "Paris";
 * For noun = "John", the output should be
 * solution(noun) = "John".
 */

function solution(noun) {
  console.log(
    "\nPROPER NOUN CORRECTION: ",
    noun[0].toUpperCase() + noun.slice(1).toLowerCase()
  );
  return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
}
solution("pARiS"); // expects 'Paris'
solution("John"); // expects 'John'
solution("mary"); // expects 'Mary'
solution("a"); // expects 'A'
solution("b"); // expects 'B'
solution("yFZMlGvUQP"); // expects 'Yfzmlgvuqp'
solution("HQQrrDxuqe"); // expects 'Hqqrrdxuqe'
solution("atDh"); // expects 'Atdh'
solution("pJHSYVAZB"); // expects 'Pjhsyvazb'
solution("dKrqO"); // expects 'Dkrqo'
