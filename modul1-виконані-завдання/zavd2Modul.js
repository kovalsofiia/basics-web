// Завдання 2. Створити функцію яка приймає назву або номер місяця, та повертає пору року до
// якої він належить.

//декларативний
function getSeason(monthNumber){
    if(monthNumber>=3 && monthNumber<= 5)
    return 'Spring';
    else if(monthNumber>=6 && monthNumber<=8)
    return 'Summer';
    else if(monthNumber>=9 && monthNumber<=11)
    return'Autumn';
    else if(monthNumber === 12 || monthNumber === 1 || monthNumber === 2)
    return 'Winter';
    else
    return 'Incorrect value';
}
//анонімна
var getSeasonAnonymus = function (monthNumber){
    if(monthNumber>=3 && monthNumber<= 5)
    return 'Spring';
    else if(monthNumber>=6 && monthNumber<=8)
    return 'Summer';
    else if(monthNumber>=9 && monthNumber<=11)
    return'Autumn';
    else if(monthNumber === 12 || monthNumber === 1 || monthNumber === 2)
    return 'Winter';
    else
    return 'Incorrect value';
}
//стрілкова
let getSeasonLambda = monthNumber =>{
    if(monthNumber>=3 && monthNumber<= 5)
    return 'Spring';
    else if(monthNumber>=6 && monthNumber<=8)
    return 'Summer';
    else if(monthNumber>=9 && monthNumber<=11)
    return'Autumn';
    else if(monthNumber === 12 || monthNumber === 1 || monthNumber === 2)
    return 'Winter';
    else
    return 'Incorrect value';
}

var monthNumber = parseInt(prompt('Write a month number here: '));
console.log(monthNumber);
console.log(`Answer - ${getSeason(monthNumber)}`);
console.log(`Answer anonymus - ${getSeasonAnonymus(monthNumber)}`);
console.log(`Answer lambda - ${getSeasonLambda(monthNumber)}`);
alert(`Answer - ${getSeason(monthNumber)}`);