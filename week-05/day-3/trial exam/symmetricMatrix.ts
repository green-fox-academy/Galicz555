// Create a function named isSymmetric that takes an n×n integer matrix (two dimensional array/list) as a parameter and returns true if the matrix is symmetric or false if it is not.

// Symmetric means it has identical values along its diagonal axis from top-left to bottom-right, as in the first example.

// Example 1:

// let example1: number [][] = 
// [
//     [1, 0, 1, 8],
//     [0, 2, 2, 9],
//     [1, 2, 5, 3],
//     [8, 9, 3, 11]
// ]
// Output:

// true
// Example 2:
// let example2: number [][] = 
// [
//     [7, 7, 7],
//     [6, 5, 7],
//     [1, 2, 1]
// ]
// Output:

// false

'use strict'

function isSymmetric(matrix: number [][]): boolean {
    let counter: number =0;
    for (let i: number = 0; i < matrix.length; i++){
        for (let j: number = 0; j < matrix.length; j++){
            if (i != j && matrix[i][j] == matrix[j][i]){
                counter++;
            }
        }
    }
    if (counter == matrix.length ** 2 - matrix.length){
        return true;
    } else {
        return false;
    }
};

// console.log(isSymmetric(example1));
// console.log(isSymmetric(example2));