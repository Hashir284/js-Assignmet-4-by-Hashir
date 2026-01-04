//          first Section
let inputChar = Number(prompt("Enter any number for checking ASCII:"));

if ((inputChar >= 0 && inputChar <= 47) || (inputChar <= 0)) {
    alert(inputChar + " is not a part of ASCII")
} else if (inputChar >= 48 && inputChar <= 57) {
    alert(inputChar + " is a Number");
} else if (inputChar >= 65 && inputChar <= 90) {
    alert(inputChar + " is an Uppercase Letter");
} else if (inputChar >= 97 && inputChar <= 122) {
    alert(inputChar + " is a Lowercase Letter");
} else if (inputChar >= 123) {
    alert(inputChar + " is not a part of ASCII")
} else {
    alert(inputChar + " is not a number or letter");
}

//      second Section

let firstInteger = Number(prompt("Enter first Integer:"));
let secondInteger = Number(prompt("Enter second Integer:"));

if (firstInteger > secondInteger) {
    alert(firstInteger + ' is greater then ' + secondInteger)
} else if (firstInteger < secondInteger) {
    alert(firstInteger + ' is less then ' + secondInteger)
} else if (firstInteger = secondInteger) {
    alert(firstInteger + ' = ' + secondInteger)
} else {
    alert('Integer not found')
}

//          third Section

let num1 = Number(prompt('Enter any number'))
if (num1 > 0) {
    alert(num1 + ' is positive')
} else if (num1 < 0) {
    alert(num1 + ' is negative')
} else if (num1 = 0) {
    alert(num1 + ' is zero')
} else {
    alert("Number not found")
}

//          fourth Section

let checkVowels = prompt('Enter a single Character for checking that it is vowels or not')

if (checkVowels === 'a' || checkVowels === 'A' || checkVowels === 'e' || checkVowels === 'E' || checkVowels === 'i' || checkVowels === 'I' || checkVowels === 'o' || checkVowels === 'O' || checkVowels === 'u' || checkVowels === 'U') {
    alert(checkVowels + ' is Vowel')
} else {
    alert(checkVowels + ' is not a vowel')
}

//          fifth section

let password = 'admin123'

let enterPassword = prompt('Enter the password')

let enterPasswordAgain

if (enterPassword === '') {
    enterPasswordAgain = prompt('Enter the password!')
    if (enterPasswordAgain === password) {
        alert('You entered the correct password')
    } else {
        alert('Password not match')
    }
} else if (password === enterPassword) {
    alert('You entered the correct password')
} else {
    alert('password not match')
}

// sixth section
let greeting;
let hour = Number(prompt('Enter the hour'));
if (hour > 0 && hour < 18) {
    greeting = "Good evening";
} else {
    greeting = "Good day";
}
alert(greeting)

//      seventh section

let time = Number(prompt('Enter time in 24-hour format (e.g. 1900)'))

if (time >= 0 && time < 1200) {
    alert('Good Morning')
} else if (time >= 1200 && time < 1700) {
    alert('Good Afternoon')
} else if (time >= 1700 && time < 2100) {
    alert('Good Evening')
} else if (time >= 2100 && time <= 2359) {
    alert('Good Night')
}
