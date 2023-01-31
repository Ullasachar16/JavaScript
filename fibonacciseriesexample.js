function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  var n = prompt("Enter the number of terms of the Fibonacci sequence you want to generate:");
  var result = fibonacci(n);
  console.log("The first " + n + " terms in the Fibonacci sequence are: " + result);
  