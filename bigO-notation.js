//BigO for adding numbers from 0 to n

//Solution 1
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(addUpTo(1000));


// Solution 2
// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }

// console.log(addUpTo(1000));

//What's better: faster? less memory-intensive? more readable? 

//Counting Operations
//The Problem with Time - differenton same machine and different on different machines
//Instead, we count the number of operations a computer has to perform:
//in Solution 2, there are only 3 simple operations happening, regardless of size of n: 1 multiplication, 1 addition and 1 divide 

//In Solution 1, operations determined by value of n.  Therefore, addition will happen 'n' value of times. Thus, 'n' operatioons
//i++ two more simple operation, equivalent of i+1(happens 'n' number of times)
//i <=n; runs 'n' number of times
//total =0 - runs once
//i = 1 - runs once
//Therefore we could say we have 5n + 2 (if 'n' equals 50, we have 52 operations )
//More generally, the number operations grows roughly in proportion with 'n'

