//Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.  
//запит на номер місяця від користувача
var monthNumber = parseInt(prompt('Введіть номер місяця '));
//опис усіх можливих пір року у вигляді масиву
const seasons = ['Зима', 'Весна', 'Літо', 'Осінь', ];
//функція для знаходження відповіді з методом світч
function getSeason(monthNumber){
    
        switch(monthNumber){
            case 1: 
            case 2:
            case 12: return seasons[0];
            case 3:
            case 4: 
            case 5: return seasons[1];
            case 6:
            case 7:
            case 8: return seasons[2];
            case 9:
            case 10:
            case 11: return seasons[3];
            default: 'Введіть інше число, яке буде номером місяця.';
        }
}
//виведення відповіді в консоль
console.log(getSeason(monthNumber));