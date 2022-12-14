// Sieve of Eratosthenes

// Return all prime numbers up to 'num' in array

function sieveOfEratosthenes(n) {
  let primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }

  let result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
}
console.log(sieveOfEratosthenes(10));
console.log(sieveOfEratosthenes(20));
console.log(sieveOfEratosthenes(200));
