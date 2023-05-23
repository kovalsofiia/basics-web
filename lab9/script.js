//==========ОПИС КЛАСУ ДЛЯ ОДНОГО ПРАЦІВНИКА========
let idCount = 1;
class FinanceDepartment{
    constructor(name, position, salary, childrenAmount, workExperience){
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.childrenAmount = childrenAmount;
        this.workExperience = workExperience;
        this.code = idCount++;
    }
}

//===========ОПИС КЛАСУ ДЛЯ БАГАТЬОХ ПРАЦІВНИКІВ=========
class FinanceDeparmentPersons{
    constructor(){
        this.persons = [];
    }

    add(newPerson){
        if(!(newPerson instanceof FinanceDepartment))
            throw `${newPerson} is not instance of FinanceDepartment`;
        this.persons.push(newPerson);
    }
    
    getById(id){
        return this.persons.find(persons => persons.code == id);
    } 

    update(id, newPerson){
        let person = this.getById(id);
        if(!person)
            throw "Not found";
        for(let k of ["name", "position", "salary", "childrenAmount", "workExperience"]){
            if(newPerson(k))
                person[k] = newPerson[k];
        }
    }

    delete(id){
        let userIndex = this.persons.findIndex(person => person.code == id);
        if(userIndex == -1)
            throw "Not found";
        this.persons.splice(userIndex,1);
    }

    getByPosition(position){
        return this.persons.filter(person => person.position.toLowerCase() == position.toLowerCase());
    }

    getByChildrenAmount(amount){
        return this.persons.filter(person => Number(person.childrenAmount) <= Number(amount))
    }

    getAll() {
        return [...this.persons];
    }
    

}
    
// let fin1 = new FinanceDepartment("Приходько Іван", "головний бухгалтер", 10000, 5, 5);
// let fin2 = new FinanceDepartment("Петрищак Олена", "завідуюча відділу статистики", 7000, 2, 3);
// let fin3 = new FinanceDepartment("Вакуленко Андрій", "стажер", 5300, 0, 0);
// let fins = new FinanceDeparmentPersons();
// fins.add(fin1);
// fins.add(fin2);
// fins.add(fin3);
// fins.getByChildrenAmount(3);
// fins.getByPosition("стажер");

//FUNCTIONS
function AddNewUser() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;
    const childrenAmount = document.getElementById('childrenAmount').value;
    const workExperience = document.getElementById('workExperience').value;

    const newPerson = new FinanceDepartment(name, position, salary, childrenAmount, workExperience);
    // fins.add(newPerson);
    finsWithDom.add(newPerson);
    alert(`New person has been added`);
}

function showPerson(){
    const idValue = document.getElementById('code').value;
    // const person = fins.getById(idValue);
    const person = finsWithDom.getById(idValue);
    if (person) {
      console.log(`Person for code is`,person);
      alert(`Person for code = ${idValue} is \n\n${person}`);
    } else {
      alert(`Not found!`);
    }
  }

  function deletePerson(){
    const code = document.getElementById("code").value;
    // fins.delete(code);
    finsWithDom.delete(code);
    console.log(`Info for person for code ${code} has been deleted.`);
}

function editPerson(){
    const code = document.getElementById("code").value;
    // const person = fins.getById(code);
    const person = finsWithDom.getById(code);
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

        console.log(`Info for person for code ${code} has been updated.`);
    } else {
        alert(`Not found!`);
    }
}