//Задача 6. Створити функцію, яка для заданих чисел знаходить кількість парних.  
//масив чисел
var numbers = [1,75,2,14,1,25,2,7,8,5,23,66,43,10];
console.log( " Усього чисел: " + numbers.length);
var count = 0;
//цикл для визначення кількості парних чисел в масиві
for(var i = 0; i<numbers.length;i++){
    if(numbers[i]%2 === 0)
    count++;
}
//виведення відповіді на екран
console.log("Парних чисел: "+ count);