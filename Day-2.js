/* 1.Create a JavaScript program that defines a function called "multiplyByTwo" that takes one parameter: "num". The function should return the
 input number multiplied by two.*/


function multiplyByTwo(num) {
    return num * 2
}

console.log(multiplyByTwo(20))



/* 2.Create a JavaScript program that defines a function called "divideByTwo" that takes one parameter: "num". The function should 
return the input number divided by two. */


function divideByTwo(num) {
    return num / 2
}

console.log(divideByTwo(20))



/* 3.A function “findprime” is given with a parameter . Your function should print out all the prime from 1 till the number (parameter)
 present in the argument . ``` findprime(97)
*/

function isPrime(n) {
    if (n <= 1)
        return false

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
        else {
            return true

        }
    }

}


function findPrime(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i))
            console.log(i + " ")
    }
}
let n = 97
findPrime(n)


