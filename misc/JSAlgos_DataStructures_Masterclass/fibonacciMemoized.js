// Fibonacci Memoized

// index: index of number in fibonacci sequence
// cache: an array used as memory

// Memoization:
// Check to see if number already exists in cache
// If number is in cache, use that number
// In number is not in cache, calculate it and put it in the cache so it can be used multiple times in future

function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }

  return cache[index];
}
fibMemo(8);
fibMemo(12);
fibMemo(15);
fibMemo(20);
fibMemo(50);
fibMemo(1000);
