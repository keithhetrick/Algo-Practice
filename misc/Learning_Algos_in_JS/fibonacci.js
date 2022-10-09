// Fibonacci

// Doesn't require alot of code
// base case deals with the fact that the first two numbers are always 1 and 1

function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
fibonacci(12);
