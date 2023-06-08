// 1a Creating the ages array: 3, 9, 23, 64, 2, 8, 28, 93
var agesArr = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a Subtracting value of first element from value of last element
console.log(agesArr[agesArr.length-1]-agesArr[0]);

// 1b Adding a new age to the array. I choose 50 for the new age.
agesArr.push(50);

// 1b Printing the array with the new age
console.log(agesArr);

// 1b Repeating the subtraction with the new age added to ensure it is dynamic
console.log(agesArr[agesArr.length-1]-agesArr[0]);

//  1c Calculating average age
var index, sum = 0; 
for (index = 0; index < agesArr.length; index++) { // Using for loop running from 0 to the length of the array
    sum = sum + agesArr[index];
}
console.log("The average age is: ", sum/agesArr.length);

// 2a Creating the array contains names: "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob".
var namesArr = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Calculating average number of  letter 
var index, sum = 0;
for (index = 0; index < namesArr.length; index++) {
    sum = sum + namesArr[index].length;
}
console.log("The avergae number of letter per name is: ", sum/namesArr.length);

// 2b. Concatenating all the names together, separated by space
var namesCon = namesArr[0];
for (index = 1; index < namesArr.length; index++) {
    namesCon = namesCon.concat(" ", namesArr[index]);
}
console.log("All the concatenated names are: ", namesCon);

// 5 Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
// Names array
var namesArr = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// Creat new array called nameLengths
var nameLengths = [3, 5, 3, 5, 4, 3];
// Iterating the names array and add the length of each name into the length array
for (index = 0; index < namesArr.length; index++) {
    nameLengths[index] = namesArr[index].length; // Adding length to each name based on its index
}

// 6. Calculating the sum of all the elements in the array.
var sum = 0;
// Create a for loop to iterate over nameLength array
for (index = 0; index < nameLengths.length; index ++) {
    sum = sum + nameLengths[index];
}
console.log("Sum of all elements in the nameLength array is: ", sum);

// 7. Write a function with 2 parameters, word and n
function ntimesCon(word, n) {
    var con_cat = word; // Declare a variable equal to the word parameter
    for (index = 2; index <= n; index ++) { // Using for loop to iterate the word accordingly to n number of times
        con_cat = con_cat.concat(word); // Concatenating the word
    }
    return con_cat; // return the variable after iterating the loop
}
// Use function call to print concatenated word accordingly to amount of times
console.log("Concatenated words are: ", ntimesCon("Hello", 4));

// 8. Write a function with 2 parameters, firstName and lastName
function fullName (firstName, lastName) {
    return firstName.concat(" ", lastName); // Separate first and last namne by a space
}
// Use function call to print the full name
console.log("My full name is: ", fullName("Vi", "Thai"));

// 9. Write a function that takes an array 
function sumisgreaterthan100 (array) {
    var sum = 0;
    for (index = 0; index < array.length; index++) {
        sum = sum + array[index];
    }
    if (sum > 100) {
        return true;
    }
    else {
        return false;
    }
}
// Use function call to print result
console.log("Is the sum of all the element in the array greater than 100?", sumisgreaterthan100([50, 60, 20, 10]));

// 10. Write a function that takes an array of numbers and return the average of elements
function elementsAvg(array) {
    var average = 0; // Create a variable to hold average
    for (index = 0; index < array.length; index++) { // Loop through the array
        var current_number = array[index]; // Add  empty variable to each index
        average += current_number;
    }
    average = average / array.length; // Devide by the length of array
    return average; 
}

// Use function call to print result
console.log("The average of all the elements in the array is", elementsAvg([12, 9, 6]));

// 11. Write a function that takes 2 arrays of numbers
function arraysComparision (array1, array2) {
    var array1Avg = 0; // Create a variable to hold the average of array 1 
    for (index = 0; index < array1.length; index++) { // Loop through array 1
        var current1_number  = array1[index]; // Add empty variable to each index in array 1
        array1Avg += current1_number;
    }
    array1Avg = array1Avg / array1.length; // Devide by the length of array 1
    var array2Avg = 0; // Create a variable to hold the average of array 2
    for (j = 0; j < array2.length; j++) {
        var current2_number = array2[j]; // Add empty variable to each index in array 2
        array2Avg += current2_number;
    }
    array2Avg = array2Avg / array2.length; // Devide by the length of array 2
    if (array1Avg > array2Avg) { // Create a boolean to determine the averages of two arrays
        return true;
    }
    else {
        return false;
    }
}

// Use function call to print result
console.log("Is the  average of elements in array 1 greater than the average of elements in array 2?", arraysComparision([34, 5, 7], [6, 8, 3]));

// 12. Write a function takes a boolean and a number
function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.50)) {
        return true;
    }
    else {
        return false;
    }
}

// Use function call to print result 
console.log(" Will you buy drink if it is hot outside?", willBuyDrink(true, 40.20));

// 13. Problem: Creating a function that check for legal drinking age
// The function has one parameter: birthyear
function legalDrinking(age) {
    if (age >= 21) {
        return ('Yes');
    }
    else {
        return ('No');
    }
}

// Use function call to print result
console.log("Can I get a beer tonight?", legalDrinking(19));