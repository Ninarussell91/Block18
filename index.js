/**----------------UNIT TESTS:---------------------------- */

/** #1
 * function multiplication ()
 * returns a product of two input numbers.
 * 
 * expect multiplication(2,3) to be a number
 * expect multiplication(9,3) to be equal to 27
 * expect multiplication(0,5) to be 0
 * expect multiplication("word", 5) to return an error
 */

/** #2
 * A function called concatOdds()
 *  two arrays of integers as arguments
 * 
 *  return a single array that only contains odd numbers
 * *eg concatOdds([3,2,1],[9,1,1,1,4,15,-1]);
 * *should result in [-1,1,3,9,15] now that it removes redundant entries
 * 
 *

function concatOdds(array1,array2){
    //compile arrays
    const arrayBoth = [];
    array1.forEach((number)=> arrayBoth.push(number));
    array2.forEach((number)=> arrayBoth.push(number));
    arrayBoth.sort((a, b) => a - b); //  found solution to this on chatgpt4o
    // sort((a, b) => a - b) works! for if a > b, it will return a negative, and swap a and b as it sorts! lovely!
    const arrayFilter = arrayBoth.filter((number, index, self) => number % 2 !==0 && self.indexOf(number) === index);
    //filter down to odds
    ///&!!
    //remove redundant values
    return arrayFilter;
}
/**
 * expect concatOdds([3,2,1],[9,1,1,1,4,15,-1]) to return an array
 * expect concatOdds([3,2,1],[9,1,1,1,4,15,-1]) to return [-1,1,3,9,15]
 * expect concatOdds([3,2,1],"this guy...") to return an error 
 * expect concatOdds([6,8,4,2,12],[10,8,2,2,2,2]) to return an empty array []
 * 
 */
console.log(concatOdds([3,2,1],[9,1,1,1,4,15,-1]));
console.log(concatOdds([6,8,4,2,12],[10,8,2,2,2,2])); 
console.log(concatOdds([3,2,1],"this guy..."));

/***Functional Tests:
 * 
 * 1. A shopping cart 
 * Users can check out as guests or as logged-in users.
 * Users should be able to create an account or log in if they check out as a guest.
 * The cart can be empty or contain items.
 * The feature should guide users based on the cart's state.
 * When a user checks out, have an option to split receipts and/or print gift receipts
 * Provide an option to enter promo codes on the checkout page.
 * When a user has multiples/duplicates of an item in cart, they can change the quantity.
 * Inform users that guest checkout may limit their ability to track orders or receive order updates.
 */