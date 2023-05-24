class FinanceDeptWorkers{
    constructor() {
        this.users = [];
    }
    checkUsersForAvailability(user_nms){
        let index = this.users.findIndex(user => user.nms === user_nms);
        if (index === -1) {
            return true
        }else{
            return  false
        }
    }
    toString(){
        let res = ""
        for(let user of this.users){
            res+= user.nms+" "
        }
        return res;
    }
    get count(){
        return this.users.length;
    }
    addUser(newUser){
        if(newUser instanceof FinanceDept){
            this.users.push(newUser);
        }
    }
    addUsers(params){
        for(let user of params){
            if(user instanceof FinanceDept){
                this.users.push(user);
            }
        }
    }
    deleteUser(code){
        let index = this.users.findIndex(user => user.code === code);
        if (index > -1) {
            this.users.splice(index, 1);
        }

    }
    changeUser(code){
        let new_position = document.querySelector("#change_position").value;
        let new_salary = document.querySelector("#change_salary").value;
        let new_chidlren = document.querySelector("#change_children").value;
        let index = this.users.findIndex(user => user.code === code);
        if (index > -1) {
            if(new_position != ""){
                this.users[index].position = new_position;
            }
            if(new_salary != ""){
                this.users[index].salary = new_salary;
            }
            if(new_chidlren != ""){
                this.users[index].children = new_chidlren;
            }
        }else{
            alert("Такого користувача не існує");
        }
    }
}
class FinanceDept{
    constructor(code, nms, position, salary, children, experience) {
        this.code = code;
        this.nms = nms;
        this.position = position;
        this.salary =salary;
        this.children = children;
        this.experience = experience;
    
    }
    toString(){
        return this.nms;
    }
    GetOverallInfo(){
        return `ПІБ ${this.nms} Код ${this.code} Посада ${this.position} Зарплатня ${this.salary} К-ть дітей ${this.children} Стаж ${this.experience}`;
    }
}
let NewDepartment = new FinanceDeptWorkers();
document.querySelector("#add_btn").addEventListener('click', ()=>{
    let code = document.querySelector("#user_code").value;
    let nms = document.querySelector("#user_nms").value;
    let position = document.querySelector("#user_position").value;
    let salary = document.querySelector("#user_salary").value;
    let children = document.querySelector("#user_children").value;
    let experience = document.querySelector("#user_experience").value;
    if(NewDepartment.checkUsersForAvailability(nms)){
        let new_user = new FinanceDept(code, nms,position,salary,children,experience);
        NewDepartment.addUser(new_user);
        showUsers(NewDepartment);
    }else {
        alert("Такий користувач вже існує");
    }
})

const showUsers = function (tournament){
    let card_holder = document.querySelector(".users_list");
    card_holder.innerHTML = "";
    for(let user of tournament.users){
        card_holder.innerHTML += `<table>
        <tr>
        <th>Код</th>
        <th>ПІБ</th>  
        <th>Посада</th>      
        <th>Зарплатня</th>
        
        <th>К-ть дітей</th>
        </tr>
        <tr>
        <td> ${user.code}</td>
        <td>${user.nms}</td>    
        <td>${user.position}</td>
        <td>${user.salary}</td>
        <td>${user.children}</td>
        </tr>
        </table>
        </div>`
    }
}
document.querySelector("#delete_btn").addEventListener('click', ()=>{
    let del_code = document.querySelector("#delete_code").value;
    NewDepartment.deleteUser(del_code);
    console.log(NewDepartment.users);
    showUsers(NewDepartment);
})
document.querySelector("#change_btn").addEventListener('click', ()=>{
    let change_code = document.querySelector("#change_code").value;
    NewDepartment.changeUser(change_code);
    console.log(NewDepartment.users);
    showUsers(NewDepartment);
})

let work1 = new FinanceDept("000", "Приходько Іван", "головний бухгалтер", 10000, 5, 5);
let work2 = new FinanceDept("001","Петрищак Олена", "завідуюча відділу статистики", 7000, 2, 3 )
let work3 = new FinanceDept("002" ,"Вакуленко Андрій", "стажер", 5300, 0, 0);
NewDepartment.addUser(work1);
NewDepartment.addUser(work2);
NewDepartment.addUser(work3);
showUsers(NewDepartment);