/*
    * Create a function that calculates the sum of multiplying each array element
    * N by its mirror counterpart element L - N where L is the length of the array 
    * and N is the index of an element.
    * 
    * Example 1
    * input: [5, 3, 2, 9]
    * Output: 5 x 9 + 3 x 2 = 51
    * 
    * Example 2
    * input: [5, 3, 7, 2, 9]
    * Output: 5 x 9 + 3 x 2 + 7 x 7 = 100
*/

const sum = input => {
    let left = 0
    let right = input.length - 1
    let total = 0

    while (left <= right) {
        total += input[left] * input[right]
        left++
        right--
    }

    return total
}

console.log( sum( [5, 3, 2, 9] ) )
console.log( sum( [5, 3, 7, 2, 9] ) )
