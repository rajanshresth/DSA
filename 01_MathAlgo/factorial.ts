/**
 * Problem Statement: Given an inter 'n', find the factorial of that integer
 * In mathematics,the factorial of non-negative integer 'n',denoted n!, is the product of all the positive integers less than or equal to 'n'
 * Like: 5!=1*2*3*4*5=120
 */

function factorial(num:number):any{
    if (num == 0) {
        return 1;
    }else {
        return (num * factorial(num - 1));
    }
}

console.log(factorial(5));