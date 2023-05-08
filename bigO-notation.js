//BigO for adding numbers from 0 to n

//Solution 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(1000000));


// Solution 2
// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }

// console.log(addUpTo(1000000));

//What's better: faster? less memory-intensive? more readable? 


