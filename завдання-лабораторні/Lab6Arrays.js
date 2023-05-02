//1. Дано масив, який містить оцінки студента з К предметів. 
//Знайти середній бал студента і з’ясувати до якої категорії він відноситься 
// (відмінник (всі оцінки відмінно), 
// двійочник (має хоча би одну двійку), 
// хорошист (оцінки добре і відмінно), 
// трійочник (є хоча би одна трійка)).
console.log('1. Дано масив, який містить оцінки студента з К предметів. Знайти середній бал студента і з’ясувати до якої категорії він відноситься ')
var K = parseInt(prompt("Write k(subject amount) here: "));
var studentPoints = getArray(K);
console.log("Array of points is : " + studentPoints);
console.log("Average " + getAverage(studentPoints));
console.log("Answer: Student is - " + getAnswer(studentPoints));
//============функція створення масиву оцінок============
function getArray(k){
var array = [];
for (let i = 0; i<k; i++){
    array[i] = parseInt(prompt("Write a grade for " + i + " subject "));
}
return array;
}
// ===========функція середнє арифметичне================
function getAverage(array) {
let sum = 0;
let count = array.length;
for(let i = 0; i<count; i++){
    sum+=array[i];
}
return sum/count;
}
// ==========функція вивести відповідь - перевірка умови==============
function getAnswer(points){
    let hasExcellentGrades = true;
    let hasGoodGrades = false;
    let hasTwos = false;
    let hasThrees = false;
    let count = points.length;
    for (let i = 0; i < count; i++) {
      if (points[i] < 5) {
        hasExcellentGrades = false;
        if (points[i] === 2) {
          hasTwos = true;
        } else if (points[i] === 3) {
          hasThrees = true;
        }
      } else {
        hasGoodGrades = true;
      }
    }
    if (hasExcellentGrades) {
      return "Відмінник";
    } else if (hasTwos) {
      return "Двійочник";
    } else if (hasGoodGrades && !hasThrees) {
      return "Хорошист";
    } else {
      return "Трійочник";
    }
  }

// 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. 
function getArray(k){
var array = [];
for (let i = 1; i<k+1; i++){
    array[i] = parseInt(prompt("Write amount of visiters for day " + i));
}
return array;
}
var shopInfo = getArray(7);
console.log('Whole week looks : ' + shopInfo);
console.log('On this days were less than 20 visiters ' + getVisitersLess20(shopInfo));
console.log(`Working days statistics ${getWorkDays(shopInfo)}`);
console.log(`Festive days statistics ${getFestDays(shopInfo)}`);

// Вивести на екран:
// • номери днів, протягом яких кількість відвідувачів була меншою за 20
function getVisitersLess20(array){
    let newarray = [];
    for (let i = 1; i<8; i++){
        if(array[i] < 20)
            newarray.push(i);
    }
    return newarray;
}
// • загальну кількість клієнтів у робочі дні;
function getWorkDays(array){
    let sumWorkDays = 0;
    for (let i = 1; i<=5; i++){
        sumWorkDays+=array[i];
    }
    return sumWorkDays;
}
// • кількість клієнтів днів на вихідних.
function getFestDays(array){
    return array[6] + array[7];
}


// 3. Дано масив імен студентів,. З’ясувати скільки разів зустрічається вказане користувачем ім’я,
// наприклад «Юрій».
console.log('3. Дано масив імен студентів. З’ясувати скільки разів зустрічається вказане користувачем ім’я')
var K = parseInt(prompt("Write k(students amount) here: "));
var username = String(prompt('name - '));
var studentNames = getArray(K);
console.log("Імена студентів " + studentNames);
console.log(`К-ть ${username} у списку`  + getAmount(studentNames, username));
//============функція створення масиву імен студентів============
function getArray(k){
var array = [];
for (let i = 0; i<k; i++){
    array[i] = String(prompt("Name of student " + i));
}
return array;
}
//===========функція для знаходження к-ті входжень==========
function getAmount(array, name){
    let counter = 0
    let count = array.length;
    for (let i = 0; i<count; i++){
        if(array[i] === name)
        counter++;
    }
return counter;
}



// 4. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). 
// Користувач вибирає номер елементу, поки не відмовиться від подальшої гри, або не вибере всі елементи. 
// Після кожного ходу показувати сумарний виграш. Кожен елемент можна вибирати тільки 1 раз.
console.log('Дано одновимірний масив, у якому зберігається певна виграшна сума')
var K = parseInt(prompt("Write k(array size) here: "));
console.log('User array randomly generated');
var userArray = getArray(K);
game(userArray);
//============функція для створення масиву з рандомно згенерованими елементами===================
function getArray(k){
    var array = [];
    
    for (let i = 0; i<k; i++){
        array[i] = Math.floor((Math.random() * 1000) - 500);
        console.log(`${array[i]}`);
    }
    return array;
    }
//=================функція для реалізації гри=================
function game(array){
    let choice;
    let totalWin = 0;
    while (array.length > 0 && choice !== 'exit') {
        choice = prompt(`Choose an element from 1 to ${array.length} or write "exit" `);
            if (choice !== null && choice !== 'exit') {
                let index = parseInt(choice) - 1;
                    if (index < 0 || index >= array.length) {
                        alert('Incorrect element');
                    } 
                        else {
                            totalWin += array[index];
                            array.splice(index, 1); /*Перший параметр визначає позицію, куди мають бути додані нові елементи; другий параметр
                            визначає, скільки елементів потрібно видалити; решта параметрів визначають нові елементи, які
                            потрібно додати.
                            • Метод splice() повертає масив із видаленими елементами. */
                            console.log('Total win: ', totalWin);
                            console.log('Array(elements left for choice): ', array);
                    }
                }
    }
}




