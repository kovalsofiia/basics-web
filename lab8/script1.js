let idCount = 0;
class Abonent{
    constructor(phoneNumber, homeAdress,owner,duration,bill){
        this.phoneNumber = phoneNumber;
        this.homeAdress = homeAdress;
        this.owner = owner;
        this.duration = duration;
        this.bill =bill;
        this._id = idCount++;
    }
    toString(){
        return this.owner;
    }

    get id(){
        return this._id;
    }

}
class Abonents{
    constructor(){
        this.users = [];
    }
    get count(){
        return this.users.length;
    }
    addUser(newUser){
        if(newUser instanceof Abonent){
            this.users.push(newUser);
        }
    }

    getUserByDuration(durationValue){
        return this.users.filter(users => users.duration >= durationValue);
    }
    
    toString(){
        return 
    }

    getUserById(idValue){
        return this.users.find(users => users.id == idValue);
    }
}

let Petro = new Abonent("380997632643", "Uzhhorod 88000", "Petro", 10);
console.log(Petro);
console.log(Petro.toString());

let Oleksandr = new Abonent("380738887654", "Kyiv", "Oleksandr", 20);
console.log(Oleksandr);
console.log(Oleksandr.toString());

let John = new Abonent("380738887654", "Kyiv", "John", 25);
console.log(John);
console.log(John.toString());

let users = new Abonents();
console.log(users.count);
users.addUser(Petro);
users.addUser(Oleksandr);
users.addUser(John);
console.log(users.count);
console.log(users.getUserByDuration(15));

console.log(users.getUserById(2));

