// Описати клас для створення об'єктів. 
// Описати клас для для створення відповідної колекції обєктів. 
// Реалізувати методи:
// • ++отримання інформації щодо одного об’єкту (за Кодом),
// • ++отримання вибірки з колекції згідно з вказаним запитом.
// • ++додавання одного об’єкту,
// • -+редагування інформації  про вказаний об’єкт.
// • --видалення інформації про вказаний об’єкт.

// 11. Об’єкт “Бухгалтерія” (Код, ПІБ; посада;
// заробітна плата; кількість дітей; стаж). 

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
    // deleteAllInformationABoutPerson(){       
    // }

    getPersonByRequest(request){
        return this.persons.filter(obj => obj.position == request || obj.salary == request || obj.childrenAmount == request || obj.workExperience == request)
    }
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
  alert(`New person has been added`);
}

// Функція, яка буде виводити інформацію про людину за допомогою коду
function showPerson(){
  const idValue = document.getElementById('code').value;
  const person = fins.getPersonById(idValue);
  if (person) {
    console.log(`Person for code is`,person);
    alert(`Person for code = ${idValue} is \n\n${person}`);
  } else {
    alert(`Not found!`);
  }
}

// Функція, яка буде виводити відредаговану інформацію про людину за допомогою коду
function editPerson(){
    const code = document.getElementById("code").value;
    const person = fins.getPersonById(code);
    if (person) {
        const fullName = prompt(`Введіть нове прізвище та ім'я:`, person.name);
        const position = prompt(`Введіть нову посаду:`, person.position);
        const salary = prompt(`Введіть нову заробітну плату:`, person.salary);
        const childrenCount = prompt(`Введіть нову кількість дітей:`, person.childrenAmount);
        const experience = prompt(`Введіть новий стаж:`, person.workExperience);

        person.name = fullName || person.name;
        person.position = position || person.position;
        person.salary = salary || person.salary;
        person.childrenAmount = childrenCount || person.childrenAmount;
        person.workExperience = experience || person.workExperience;

        alert(`Updated info is \n\n ${ person}`);
        console.log(`Updated info is` ,person);
    } else {
        alert(`Not found!`);
    }
}


// Функція, яка буде виводити інформацію про людину за допомогою запиту
function answerRequest(){
    const request = document.getElementById('req').value;
    fins.getPersonByRequest(request);
    alert(`Person for request ${request} is \n\n${fins.getPersonByRequest(request)}`);
    console.log(`Person for request is`,fins.getPersonByRequest(request));
}


let fin1 = new FinanceDepartment("Приходько Іван", "головний бухгалтер", 10000, 2, 5);
let fin2 = new FinanceDepartment("Петрищак Олена", "завідуюча відділу статистики", 7000, 2, 3);
let fins = new FinanceDeparmentPersons();
fins.addNewPersonTo(fin1);
fins.addNewPersonTo(fin2);
console.log(fins);
