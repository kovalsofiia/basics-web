// Описати клас для створення об'єктів. 
// Описати клас для для створення відповідної колекції обєктів. 
// Реалізувати методи:
// • ++отримання інформації щодо одного об’єкту (за Кодом),
// • ++отримання вибірки з колекції згідно з вказаними запитами.
// • ++додавання одного об’єкту,
// • --додавання колекції об’єктів,
// • --редагування інформації  про вказаний об’єкт.
// • --видалення інформації про вказаний об’єкт.

// 11. Об’єкт “Бухгалтерія” (Код, ПІБ; посада;
// заробітна плата; кількість дітей; стаж). Запит працюючих, які обіймають
// посаду Х і мають не більше, ніж Y дітей.

//==========ОПИС КЛАСУ ДЛЯ ОДНОГО ПРАЦІВНИКА========
let idCount = 1;
class FinanceDepartment{
    constructor(name, position, salary, childrenAmount, workExperience){
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.childrenAmount = childrenAmount;
        this.workExperience = workExperience;
        this._id = idCount++;
    }

    toString(){
        return `Код: ${this._id},\nПІБ: ${this.name},\nПосада: ${this.position},\nЗаробітна плата: ${this.salary},\nКількість дітей: ${this.childrenAmount},\nСтаж: ${this.workExperience}`;
    }

    get id(){
        return this._id;
    }
}

//===========ОПИС КЛАСУ ДЛЯ БАГАТЬОХ ПРАЦІВНИКІВ=========
class FinanceDeparmentPersons{
    constructor(){
        this.persons = [];
    }
    getPersonById(idValue){
        return this.persons.find(persons => persons.id == idValue);
    }
    addNewPersonTo(newPerson){
        if(newPerson instanceof FinanceDepartment){
            this.persons.push(newPerson);
        }
    }
    
    // addPersons(objects){
    //     for (const type of objects) {
    //         if(type instanceof FinanceDepartment)
    //         this.persons.push(...objects);
    //     }
    // }

    // deleteAllInformationABoutPerson(){       
    // }

    getPersonByRequest(request){
        return this.persons.filter(obj => obj.position == request || obj.salary == request || obj.childrenAmount == request || obj.workExperience == request)
    }

    // editObjectByCode(idValue, newData) {
    //     const object = this.getPersonById(idValue);
    //     if (!object) return false;
    //     Object.assign(object, newData);
    //     return true;
    // }
}



// Функція, яка буде додавати нову людину в колекцію persons за допомогою форми
function addNewPerson(){
  const name = document.getElementById('name').value;
  const position = document.getElementById('position').value;
  const salary = document.getElementById('salary').value;
  const childrenAmount = document.getElementById('childrenAmount').value;
  const workExperience = document.getElementById('workExperience').value;

  const newPerson = new FinanceDepartment(name, position, salary, childrenAmount, workExperience);
  fins.addNewPersonTo(newPerson);
  console.log(fins);
  alert(`New person has been added`)
}



// Функція, яка буде виводити інформацію про людину за допомогою коду
function showPerson(){
  const idValue = document.getElementById('code').value;
  const person = fins.getPersonById(idValue);
  if (person) {
    console.log(person);
    alert(`Person for code = ${idValue} is \n\n${person}`);
  } else {
    alert('Такої людини немає в списку.');
  }
}

// Функція, яка буде виводити інформацію про людину за допомогою запиту
function answerRequest(){
    const request = document.getElementById('req').value;
    fins.getPersonByRequest(request);
    alert(`Peson for request ${request} is \n\n${fins.getPersonByRequest(request)}`);
    console.log(fins.getPersonByRequest(request));
}

// Функція, яка буде видаляти інформацію про людину за допомогою індексу
// function deletePerson(){
// }

let fin1 = new FinanceDepartment("Приходько Іван", "головний бухгалтер", 10000, 2, 5);
let fin2 = new FinanceDepartment("Петрищак Олена", "завідуюча відділу статистики", 7000, 2, 3);
let fins = new FinanceDeparmentPersons();
fins.addNewPersonTo(fin1);
fins.addNewPersonTo(fin2);
console.log(fins);
