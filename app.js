        //_______________________Changing case________________________

// 1. Write a program that takes user input. Convert and show the input in capital letters.

// var lowerCase = prompt("Type Something in lower case");
// var upperCase = lowerCase.toUpperCase();
// console.log(lowerCase.toUpperCase(upperCase));

// 2. Write a program that takes user input. Convert and show the input in title case.

// var a = prompt("Type Something in");
// var titleCase = a.toLowerCase();
// console.log(a.toLowerCase(titleCase));

// 1. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

// var user = prompt("Enter a favorite mobile phone model:");
// var len = user.length;
// console.log(len);

// 2. Write a program to display the last character of a user input.

// var text = "Jawan Pakistan";
// var lastCharacter = text.charAt(text.length-1);
// console.log(lastCharacter);

// 1. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var txt = "Pakistani";
// var letter = txt.indexOf("n");
// console.log(letter);

// 2. Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . , !), prompt the user to enter a valid username.

// var userName = prompt("Whats your good Name");

// for(var i = 0; i < userName.length; i++){
//     if(userName == "@" || userName == "," || userName == "." || userName == "!"){
//         prompt("Enter Valid User Name");
//     }
//     else{
//         console.log(userName);
//     }
// }

// 3. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var str ="The quick brown fox jumps over the lazy dog";
// var count = 0;


//     for (let i = 0; i < str.length; i++) {

//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }

// 1. Write a program to find the character at 3 rd index in the word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var result = word.charAt(3);
// document.write(result);

// 1. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var txt = "Hyderabad";
//  var newtext = txt.replace("Hyder","Islam");
//  document.write(newtext);

// 2. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var newmsg = message.replace("and","&").replace("and","&");
// document.write(newmsg);

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number (example number: 3.45214)

// var num = 3.45214;

// b. round off value of the number

// document.write(Math.round(num) +"<br>");

// c. floor value of the number

// document.write(Math.floor(num) +"<br>");

// d. ceil value of the number

// document.write(Math.ceil(num) +"<br>");

//2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. Number (example number: -2.678 )

// var number = prompt("Enter a negative floating number");
// document.write(number +"<br>");

// b. round off value of the number

// document.write(Math.round(number) +"<br>");

// c. floor value of the number

// document.write(Math.floor(number) +"<br>");

// d. ceil value of the number

// document.write(Math.ceil(number) +"<br>");


// 1. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// var randomNumber = Math.random()*6;
// document.write(Math.ceil(randomNumber) +"<br>");

// 2. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

// var head = 2;
// var tail = 1;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }

// 1. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.Possible user inputs can be:
// a. 50

// var weight = prompt("Enter your weight");
// document.write(weight +"<br>");

// b. 50kgs

// var weight = prompt("Enter your weight");
// document.write(weight +"<br>" +" kgs");

// c. 50.2kgs

// var weight = prompt("Enter your weight");
// document.write(weight +"<br>" +" kgs");

// d. 50.2kilograms

// var weight = prompt("Enter your weight");
// document.write(weight +"<br>" +" kilograms");

// 1. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. Hint: (use typeof())

// var value = "472";
// value = Number(value);
// document.write(value +"<br>");
// document.write(typeof value);

// 2. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num = 35.36;

// num = num.toString().replace(".","");
// document.write(num +"<br>");
// document.write(typeof num);

// 1. Write a program to control the length of decimals to 2. var percentage = 30 / 45 * 100; -> 66.66666666666666

// var percentage = 30 / 45 * 100; 
// document.write(percentage + "<br>");
// var rounded = percentage.toFixed(2);
// document.write(rounded + "<br>");


        //_______________________Chapter 31 to 34________________________

// 1. Write a program that displays current date and time in your browser.

// var currentDate = new Date();
// document.write(currentDate + "<br>");

// 2. Write a program that alerts the current month in words. For example December.

// var currentDate = new Date();
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// document.write(month[currentDate.getMonth()] + "<br>");

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var currentDate = new Date();
// var Day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// document.write(Day[currentDate.getDay()] + "<br>");

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var currentDate = new Date();
// var Day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// document.write(Day[currentDate.getDay()] + "<br>");

// if(Day == "Sat" || Day == "Sun"){
//         document.write("It's Fun Day"+ "<br>");
// }
// else{
//         document.write("It's Work Day"+ "<br>");
// }

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var currentDate = new Date();
// document.write(currentDate.getDate() + "<br>");

// if(currentDate < 16 || currentDate > 16 ){
//         document.write("First fifteen days of the month");
// }
// else{
//         document.write("Last days of the month");
// }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var currentDate = new Date();
// document.write(currentDate + "<br>");

// var previous = (new Date("January 1, 1970").getTime());

// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var d = new Date();

// document.write([d.getHours()] + "<br>");

// if(d <= 12){
//         document.write("It's AM"+ "<br>");
// }
// else if(d >= 13){
//         document.write("It's PM"+ "<br>");
// }

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// const d = new Date();
// d.setDate(31);
// d.setMonth(11);
// d.setFullYear(2020);
// document.write(d+ "<br>");


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// function getTimeRemaining(endtime){
//     const total = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor( (total/1000) % 60 );
//     const minutes = Math.floor( (total/1000/60) % 60 );
//     const hours = Math.floor( (total/(1000*60*60)) % 24 );
//     const days = Math.floor( total/(1000*60*60*24) );
  
//     return {
//       total,
//       days,
//       hours,
//       minutes,
//       seconds
//     };
//     console.log()
//   }


// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// new Date(1776, 6, 4, 12, 30, 0, 0);
// new Date(-6106015800000);
// new Date("July 14 1980 12:30");
// console.log(Date)


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// function deltaDate(input, days, months, years) {
//     return new Date(
//       input.getFullYear() + years, 
//       input.getMonth() + months, 
//       Math.min(
//         input.getDate() + days,
//         new Date(input.getFullYear() + years, input.getMonth() + months + 1, 0).getDate()
//       )
//     );
// }
// console.log(deltaDate(new Date(), 0, -1, 0));
// console.log(deltaDate(new Date(2020, 2, 30), 0, -1, 0)); 

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var a = new Date();
// var b = new Date("7-2-1996");

// var c= a-b;s
// var d = c/(1000*60*60*24*365);
// document.write("Your Age is " +d + "<br>" );
// document.write("Your Birth Year is  " +b);



// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)


// document.write("<h1>K-Electric Bill</h1>" + "<br>","<br>");

// var Customer_Name = "Azhar";
// var Current_Month = "February"
// var Number_of_units = 410;
// var Charges_per_unit = 16;
// var Late_Payment_surcharge = 350

//  var Net_Amount = Number_of_units * Charges_per_unit;
//  var Gross_Amount   = Net_Amount+ Late_Payment_surcharge;

//  document.write("<h4> Customer Name: " +Customer_Name +"</h4>");
//  document.write("<h4>Month: " +Current_Month +"</h4>");
//  document.write("<h4>Number of Units: " +Number_of_units +"</h4>");
//  document.write("<h4>Charges Per Unit: " +Charges_per_unit +"<br>" +"</h4>" +"<br>");
//  document.write("<h4>Net Amount Payable (with in due date): " +Net_Amount +"</h4>");
//  document.write("<h4>Late Payment surcharge :" +Late_Payment_surcharge +"</h4>");
//  document.write("<h4>Gross Amount Payable: " +Gross_Amount+"</h4>");


// __________________________________________________________________________________________________________

        //_______________________Chapter 35 to 38________________________

// 1. Write a function that displays current date & time in your browser.

// function currentDate(){
//         var d = new Date();
//         document.write(d);
// }
// currentDate();

// 2. Write a function that takes first & last name and then it greets the user using his full name.

// function greeting(){
//         var fName = "Azhar"
//         var lName = "Zafar"
//         document.write("Hello" +" " +fName  +" " +lName);
// }
// greeting();

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum(num1, num2){
//         return num1 + num2;
// }

// document.write(sum(2, 4) +"<br>");
// document.write(sum(5, 3) +"<br>");

//4. Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function Add(num1, num2 ){
//         return num1 + num2;
// }

// function Multiply(num1, num2 ){
//         return num1 *num2;
// }

// function minus(num1, num2 ){
//         return num1 - num2;
// }

// function divide(num1, num2 ){
//         return num1 - num2;
// }

// document.write(Add(5, 3) +"<br>");
// document.write(Multiply(5, 3) +"<br>");
// document.write(divide(5, 3) +"<br>");
// document.write(minus(5, 3) +"<br>");

// 5. Write a function that squares its argument.

// function squares(num1, num2){
//         return num1 * num2;
// }

// document.write(squares(5, 3) +"<br>");
// document.write(squares(2, 3) +"<br>");

// 6. Write a function that computes factorial of a number.

// function factorial(num) {
//         if (num === 0 || num === 1)
//           return 1;
        
//         for (var i = num - 1; i >= 1; i--) {
//           num = num * i; 
//         }
//         return num; 
//       }
//       document.write(factorial(5) +"<br>");

// 7. Write a function that take start and end number as inputs & display counting in your browser.

// function number(start, end){
//         for(var i = start; i<=end; i++){
//                 document.write(i +"<br>");
//         }
        
// }
// number(3,8);

// 8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(Base, perpendicular){
//         return Math.sqrt(Math.pow(Base, 2) + Math.pow(perpendicular, 2));

// }

// document.write(calculateHypotenuse(5, 3) +"<br>");

// 9. Write a function that calculates the area of a rectangle.

// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function rectangle(width, height){
//   A = width * height;
//   document.write(A +"<br>");
// }

// rectangle(3 ,5);


// 10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function Palindrome(string) {

//         var a = string.split("");
        
//         var b = a.reverse();
    
//         var c = b.join("");

//         if(string == c) {
//                 document.write("It is a palindrome");
//         }
//         else {
//                 document.write("It is not a palindrome");
//         }
//     }
//     Palindrome("madam");


// function Palindrome(string) {

//         // convert string to an array
//         const a = string.split('');
    
//         // reverse the array values
//         const b = a.reverse();
    
//         // convert array to string
//         const c = b.join('');
    
//         if(string == c) {
//             console.log('It is a palindrome');
//         }
//         else {
//             console.log('It is not a palindrome');
//         }
//     }    
//     Palindrome("madam");
    

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. EXAMPLE STRING : 'Web Development Tutorial' EXPECTED OUTPUT : 'Development'

// function longestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(longestWord('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('w3resource.com', 'o'));

// 14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.

// function calcCircumference(radius){
//         var pi = 3.142;
//         return 2*pi*radius
// }
// document.write(calcCircumference(4) +"<br>");

// function calcArea(radius){
//         var pi = 3.142;
//         return pi*radius*2;
// }
// document.write(calcArea(4));


