// 1678. Goal Parser Interpretation
// https://leetcode.com/problems/goal-parser-interpretation/description/

var interpret = function (command) {
  console.log(
    "\nINTERPRETING: ",
    command.replaceAll("()", "o").replaceAll("(al)", "al")
  );
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
};
interpret("G()(al)"); // expects "Goal"
interpret("G()()()()(al)"); // expects "Gooooal"
interpret("(al)G(al)()()G"); // expects "alGalooG"
