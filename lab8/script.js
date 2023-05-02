function Abonent(phoneNumber, homeAdress, owner, duration=0, bill=0){
    this.phoneNumber = phoneNumber;
    this.homeAdress = homeAdress;
    this.owner = owner;
    this.duration = duration;
    this.bill =bill;
}

Abonent.prototype.toString = function(){
    let result = `Abonent name is: ${this.owner}, phone number ${this.phoneNumber}, home ${this.homeAdress}, bill ${this.duration*7} uah`;
    return result;
}

let Petro = new Abonent("380997632643", "Uzhhorod 88000", "Petro", 10);
console.log(Petro);
console.log(Petro.toString());

let Oleksandr = new Abonent("380738887654", "Kyiv", "Oleksandr", 20);
console.log(Oleksandr.toString());




