class UsersWithDOM extends FinanceDeparmentPersons {
    userToHTML(person) {
        return `
        <tr>
            <td>
                ${person.code}
            </td>
            <td>
                ${person.name}
            </td>
            <td>
                ${person.salary}
            </td>
	    </tr>
        `;
    }
    usersTableToHTML() {
        let rows = "";
        for (let user of this.getAll()) {
            rows += this.userToHTML(user);
        }
        return `
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Salary
                    </th>
                </tr>
                ${rows}
            </table>

        `;
    }

    toHTML() {
        return this.usersTableToHTML() ;
    }

    mount(parrent) {
        this._parrent = parrent;
        parrent.innerHTML = this.toHTML();
    }

}

let fin1 = new FinanceDepartment("Приходько Іван", "головний бухгалтер", 10000, 5, 5);
let fin2 = new FinanceDepartment("Петрищак Олена", "завідуюча відділу статистики", 7000, 2, 3);
let fin3 = new FinanceDepartment("Вакуленко Андрій", "стажер", 5300, 0, 0);

let finsWithDom = new UsersWithDOM();
finsWithDom.add(fin1);
finsWithDom.add(fin2);
finsWithDom.add(fin3);
let test = document.getElementById("show-workers");
finsWithDom.mount(test);



