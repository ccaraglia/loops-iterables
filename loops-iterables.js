/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function(array){
    var total=0
    for(i=0;i<array.length;i++){
        total=array[i]+total;
    }
    return total;
    }


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var max=function(num1,num2){
    if (num1>num2){return num1}
        else{
            return num2
        }
}
var maxOfArray=function(array){
    var localMax=0;
    for (var i=0;i<array.length;i++){
        if(isNaN(array[i])){return 'ciao'}
    localMax=max(array[i], localMax)
    }
    return localMax
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){

if ((symbol=== "A") || (symbol === "a") || (symbol === "e") || (symbol === "E")
    || (symbol === "i") || (symbol === "I") || (symbol === "o") || (symbol === "O") || (symbol === "u") || (symbol === "U")) {return true}
    else{
        return false}
    }



console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(string){
    var newString = []
    for (var i=0; i<string.length; i++){
        var temp = string[string.length-1-i]
        newString[i]=temp
    }
    return newString.join("")
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

var fzzbzz =function(num){

    if ((num%5===0) && (num%3===0)){
        return "fizzbuzz"
    }
    else if ((num%5 ===0) && !(num%3 ===0)){
        return "buzz"
    }
    else if ((num%3 ===0) && !(num%5 ===0)){
        return "fizz"
    }
    else if (!(num%3 ===0) && !(num%5 ===0)){
        return "."
    }
}

var fizzbuzz = function(number){
    var output=[]
    for(i=1;i<number+1;i++){
        output[i] = fzzbzz(i)

    }
    return output.join("")
}
console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */



    function findLongestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}


console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don' t mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

var GCD = function(a, b) {
    if ( ! b) {
        return a;
    }

    return GCD(b, a % b);
};

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
