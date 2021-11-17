// 1. Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1

const array = [10,5,7,2,4,1,24,8,23,29,25,40,0,24];
const regex = /[1-24]+?.{1}\[1-24]?+#{1}/;
console.log(array.match(regex));

//2. Program to find the most repeated word in a string and the count of the word
//“Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on. ” 

const array = '[Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on]';
const regex = /[b\w+?]/g;
console.log(array.match(regex));

// 3. Write a function to represent a Triangle, given input is the number of rows of the triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6
function map(n) {
    let result = [];
    let i; 
    for (i = 0; i != a.length; i++) {
        result[i] = f(a[i]);
        return result;
    }

    const f = function(x) {
        return x * (x + 1) / 2;
    }
    let numbers = [1, 2, 3, 4, 5, 6,];
    let triangle = map(f, numbers);
    console.log(triangle);
}

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numberArray = [];
    let maxNumber = 0;
    let total = 0;
    for (let i 0, j = 0; i<S.length; i++) { 
        
        if (S[i] === S[j]) {
            total++; maxNumber = Math.max (total, maxNumber);
        } else {
            numberArray.push(total);
            total = 1;
            j = i;
        }
        if (i === S.length - 1 && total !== 0) numberArray.push(total);
        }
        let result = 0;
        for (let num of numberArray) {
            if (num < maxNumber) result += maxNumber - num;
        }
        return result;
        }
        solution()