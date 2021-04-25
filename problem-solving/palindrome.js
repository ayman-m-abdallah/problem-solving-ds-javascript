/*
    * Write a function solution that, given a string S of length N, 
    * returns any palindrome which can be obtained by replacing all
    * of the question marks in S by lowercase letters ('a'-'z'). 
    * If no palindrome can be obtained, the function should return the string "NO". 
    * A palindrome is a string that reads the same both forwards and backwards.
    * Some examples of palindromes are: "kayak", "radar", "mom". 
    * Examples: 
    * 1. Given S = "?ab??a", the function should return "aabbaa".
    * 2. Given S = "bab??a", the function should return "NO". 
    * 3. Given S = "?a?", the function may return "aaa". 
    * It may also return "zaz", among other possible answers. 
    * Assume that: 
    * • N is an integer within the range [1..1,000]; 
    * • string S consists only of lowercases letters ('a'-'z') or '?'.
*/

const palindrome = input => {
    input = input.split('')
    let left = 0
    let right = input.length - 1

    while(left <= right) {
        if (input[left] == '?' && input[right] == '?') {
            input[left] = input[right] = 'a'
        } else if (input[left] == '?') {
            input[left] = input[right]
        } else if (input[right] == '?') {
            input[right] = input[left]
        }

        if (input[left] != input[right]) {
            return "NO"
        }

        left++
        right--
    }

    return input.join('')
}

console.log( palindrome('?ab??a') )
console.log( palindrome('bab??a') )
console.log( palindrome('?a?') )
