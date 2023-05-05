// Описати клас для створення об'єктів. 
// Описати клас для для створення відповідної колекції обєктів. 
// Реалізувати методи:
// • +отримання інформації щодо одного об’єкту (за Кодом),
// • +отримання вибірки з колекції згідно з вказаними запитами.
// • +додавання одного об’єкту,
// • +додавання колекції об’єктів,
// • +редагування інформації  про вказаний об’єкт.
// • +видалення інформації про вказаний об’єкт.

// 11. Об’єкт “Бухгалтерія” (Код, ПІБ; посада;
// заробітна плата; кількість дітей; стаж). Запит працюючих, які обіймають
// посаду Х і мають не більше, ніж Y дітей.


let idCount = 0;
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
        return `Код: ${this.code}, ПІБ: ${this.name}, Посада: ${this.position}, Заробітна плата: ${this.salary}, Кількість дітей: ${this.childrenAmount}, Стаж: ${this.workExperience}`;
    }

    get id(){
        return this._id;
    }
}


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
    deleteAllInformationABoutPerson(name){
        let index = this.persons.indexOf(name);
        this.splice(index, 1);
    }
    getPersonByRequest(request){
        return this.persons.filter(obj => obj.position == request || obj.salary == request || obj.childrenAmount == request || obj.workExperience == request)
        // if(this.persons.forEach(request => this.persons.includes(request)) == true){
        //     let array = [];
        //     array.push(this.persons.includes(request));
        // };
        
    }

    addPersons(objects){
        for (const type of object) {
            if(type instanceof FinanceDepartment)
            this.persons.push(...objects);
        }
        };
        
    

    editObjectByCode(idValue, newData) {
        const object = this.getPersonById(idValue);
        if (!object) return false;
        Object.assign(object, newData);
        return true;
    }
}


let fin1 = new FinanceDepartment("Приходько Іван", "головний бухгалтер", 10000, 2, 5);
console.log(fin1);
console.log(fin1.toString);
let fin2 = new FinanceDepartment("Петрищак Олена", "завідуюча відділу статистики", 7000, 2, 3);
console.log(fin2);
console.log(fin2.toString);

let fins = new FinanceDeparmentPersons();
fins.addNewPersonTo(fin1);
fins.addNewPersonTo(fin2);
console.log(fins.getPersonById(1));
console.log(fins.getPersonByRequest(10000));
