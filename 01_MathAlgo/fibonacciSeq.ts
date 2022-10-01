/**
 * Question Statement: Given a number 'n',find the first 'n' elements of the Fibonacci sequence.
 * In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
 * Like: 0	1	1	2	3	5	8	13	21	34	55  .......
 */

// let n:number,s:number=0;
// let arr:number[]=[];
function fibonacci(n:number){
    const fib:number[]=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

//Big-o=>O(n)