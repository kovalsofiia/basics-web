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
        this.render();
        this.addEventListners();
    }

    render() {
        this._parrent.innerHTML = this.toHTML();
    }

    addEventListners() {
        document.addEventListener("addUser", event => {
            super.add(
                new UserWithId(
                    event.detail.name,
                    event.detail.salary,
                )
            );
            this.render();
        });
    }
}

// function AddNewUser() {
//     const name = document.getElementsByName("name")[0].value;
//     const salary = document.getElementsByName("salary")[0].value;
//     let addUserEvent = new CustomEvent("addUser", {
//         detail: {
//             name, //username: username
//             salary,
//         }
//     });
//     document.dispatchEvent(addUserEvent);




// }


let finsWithDom = new UsersWithDOM();
finsWithDom.add(fin1);
finsWithDom.add(fin2);
finsWithDom.add(fin3);
let test = document.getElementById("show-workers");
finsWithDom.mount(test);