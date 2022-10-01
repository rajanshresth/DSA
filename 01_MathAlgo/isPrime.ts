/**
 * Problem Statement: Given a natural number 'n', determine if the number is prime or not.
 * A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
 * isPrime(5)=true(1*5 or 5*1)
 * isPrime(4)=false(1*4 or 2*2 or 4*1)
 */

function checkPrime(num:number){
    if(num<2){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }else{
            return true;
        }
    }
}

console.log(checkPrime(5)); //true
console.log(checkPrime(4)); //false