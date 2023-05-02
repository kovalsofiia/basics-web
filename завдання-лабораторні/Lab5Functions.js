//Задача 2. Створити функцію, яка за номером місяця повертає пору року, до якої  відноситься цей місяць.
//============Декларативний============
function getSeason(monthNumber){
    if( monthNumber>=3 && monthNumber<=5)
        return "Spring";
    else if(monthNumber>=6 && monthNumber<=8)
        return "Summer";
    else if(monthNumber>=9 && monthNumber<=11)
        return "Autumn";
    else if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12)
        return "Winter";
    else 
        return "Incorrect month number(please enter from 1 to 12)";
}
//============Анонімна функція============
var getSeasonAnonymus = function (monthNumber){
    if( monthNumber>=3 && monthNumber<=5)
        return "Spring";
    else if(monthNumber>=6 && monthNumber<=8)
        return "Summer";
    else if(monthNumber>=9 && monthNumber<=11)
        return "Autumn";
    else if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12)
        return "Winter";
    else 
        return "Incorrect month number(please enter from 1 to 12)";
}
//============Стрілочна функція============
let getSeasonLambda = monthNumber => {
    if( monthNumber>=3 && monthNumber<=5)
        return "Spring";
    else if(monthNumber>=6 && monthNumber<=8)
        return "Summer";
    else if(monthNumber>=9 && monthNumber<=11)
        return "Autumn";
    else if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12)
        return "Winter";
    else 
        return "Incorrect month number(please enter from 1 to 12)";
}
//============Використання============
console.log("Задача 2. Створити функцію, яка за номером місяця повертає пору року, до якої  відноситься цей місяць.");
let monthNumber = parseInt(prompt("Your month number is  :  "));
console.log(monthNumber);
console.log("Function   " + getSeason(monthNumber));
console.log("Anonymus   " + getSeasonAnonymus(monthNumber));
console.log("Lambda   " + getSeasonLambda(monthNumber));

//Задача 6. Створити функцію, яка для заданих чисел знаходить кількість парних.
//Декларативний
function getAmountEven(numbers){
    let amount = 0;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]%2 === 0)
        amount++;
    }
    return amount;
}
//Анонімна функція
var getAmountEvenAnonymus = function (numbers){
    let amount = 0;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]%2 === 0)
        amount++;
    }
    return amount;
}
//Стрілочна функція
let getAmountEvenLambda = numbers => {
    let amount = 0;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i]%2 === 0)
        amount++;
    }
    return amount;
}
//============Використання============
console.log("Задача 6. Створити функцію, яка для заданих чисел знаходить кількість парних.");
var numbers = [9,2,3,1,3,5,67,24,1,1,56,3];
console.log(numbers);
console.log("Function   " + getAmountEven(numbers));
console.log("Anonymus   " + getAmountEvenAnonymus(numbers));
console.log("Lambda   " + getAmountEvenLambda(numbers));

//Задача 7. Створити функцію, яка переводить сантиметри у дюйми;
//============Декларативний============
function getInch(userValue){
    return userValue/2.54;
}
//============Анонімна функція============
var getInchAnonymus = function (userValue){
    return userValue/2.54;
}
//============Стрілочна функція============
let getInchLambda = userValue => {
    return userValue/2.54;
}
//============Використання============
console.log("Задача 7. Створити функцію, яка переводить сантиметри у дюйми;");
let userValue = parseInt(prompt("What you need to convert  :  "));
console.log(userValue);
console.log("Function   " + getInch(userValue));
console.log("Anonymus   " + getInchAnonymus(userValue));
console.log("Lambda   " + getInchLambda(userValue));

//Задача 9. Створити функцію, яка за назвою дня тижня повертає список пар на цей день.
//============Декларативний============
function getSchedule(day){
    switch (day){
        case 'понеділок': return "мат аналіз     диск мат    алгебра та геометрія"; break;
        case 'вівторок': return "алгебра та геометрія   диск мат    диск мат"; break;
        case 'середа': return "англійська     англійська      програмування"; break;
        case 'четвер': return "упр іт проектами       упр іт проектами        web програмування"; break;
        case "п'ятниця": return "мат аналіз     програмування       мат аналіз/web програмування"; break;
        default: return "немає пар";
    }
}
//============Анонімна функція============
var getScheduleAnonymus = function (day){
    switch (day){
        case 'понеділок': return "мат аналіз     диск мат    алгебра та геометрія"; break;
        case 'вівторок': return "алгебра та геометрія   диск мат    диск мат"; break;
        case 'середа': return "англійська     англійська      програмування"; break;
        case 'четвер': return "упр іт проектами       упр іт проектами        web програмування"; break;
        case "п'ятниця": return "мат аналіз     програмування       мат аналіз/web програмування"; break;
        default: return "немає пар";
    }
    
}
//============Стрілочна функція============
let getScheduleLambda = day => {
    switch (day){
        case 'понеділок': return "мат аналіз     диск мат    алгебра та геометрія"; break;
        case 'вівторок': return "алгебра та геометрія   диск мат    диск мат"; break;
        case 'середа': return "англійська     англійська      програмування"; break;
        case 'четвер': return "упр іт проектами       упр іт проектами        web програмування"; break;
        case "п'ятниця": return "мат аналіз     програмування       мат аналіз/web програмування"; break;
        default: return "немає пар";
    }

}
//============Використання============
console.log("Задача 9. Створити функцію, яка за назвою дня тижня повертає список пар на цей день.");
let userDay = String(prompt('Напишіть день тижня з малої літери'));
console.log(userDay);
console.log(getSchedule(userDay));
console.log(getScheduleAnonymus(userDay));
console.log(getScheduleLambda(userDay));

//Задача 10. Створити функцію, яка для 4 чисел знаходять середнє арифметичне.
//============Декларативний============
function getAvArr(numbers){
    let sum = 0;
    let result = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    console.log(sum);
    result = sum/numbers.length;
    return result;
}
//============Анонімна функція============
var getAvArrAnonymus = function (numbers){
    let sum = 0;
    let result = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    result = sum/numbers.length;
    return result;
}
//============Стрілочна функція============
let getAvArrLambda = numbers => {
    let sum = 0;
    let result = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    result = sum/numbers.length;
    return result;
}
//============Використання============
console.log("Задача 10. Створити функцію, яка для 4 чисел знаходять середнє арифметичне.");
var numbers = [3,2,5,1];
console.log(numbers);
console.log("Function   " + getAvArr(numbers));
console.log("Anonymus   " + getAvArrAnonymus(numbers));
console.log("Lambda   " + getAvArrLambda(numbers));