

function handleSubmit() {
    let formValues = {
        FirstName: '',
        LastName: '',
        Address: '',
        PinCode: '',
        Gender: '',
        Food: [],
        Country: '',
        State: '',
    }
    let firstnameid = document.getElementById('fn').value;
    formValues.FirstName = firstnameid

    let lastnameid = document.getElementById('ln').value;
    formValues.LastName = lastnameid

    let add = document.getElementById('addd').value;
    formValues.Address = add

    let pc = document.getElementById('pin').value;
    formValues.PinCode = pc

    let gender = document.querySelector('input[name="gender"]:checked').id;
    formValues.Gender = gender

    let selectedfood = document.querySelectorAll('input[name="foo"]:checked')
    selectedfood.forEach(element => {
        formValues.Food.push(element.id)
    });

    let nation = document.getElementById('group').value
    formValues.Country = nation;

    let states = document.getElementById('s').value
    formValues.State = states;

    console.log(formValues)


    let Address = formValues.Address
    let FirstName = formValues.FirstName
    let LastName = formValues.LastName
    let PinCode = formValues.PinCode
    let Gender = formValues.Gender
    let Food = formValues.Food
    let State = formValues.State
    let Country = formValues.Country

    let table = document.getElementById('tables')
    let row = table.insertRow()
    let firstnamecell = row.insertCell()
    let lastnamecell = row.insertCell()
    let Addresscell = row.insertCell()
    let pincodecell = row.insertCell()
    let gendercell = row.insertCell()
    let foodcell = row.insertCell()
    let statecell = row.insertCell()
    let countrycell = row.insertCell()

    firstnamecell.textContent = FirstName
    lastnamecell.textContent = LastName
    Addresscell.textContent = Address
    pincodecell.textContent = PinCode
    gendercell.textContent = Gender
    foodcell.textContent = Food
    statecell.textContent = State
    countrycell.textContent = Country
}
// Table

let data = []
let headers = ['FirstName', 'LastName', 'Address', 'PinCode', 'Gender', 'Food', 'State', 'Country']

let table = document.createElement('table')
// table.setAttribute('id','fn')
table.setAttribute('id', 'tables')

let thead = document.createElement('thead')
let tr = document.createElement('tr')

for (let i of headers) {
    let th = document.createElement('th')
    th.innerText = i;
    tr.appendChild(th)
}

thead.append(tr);
table.append(thead);
let tbody = document.createElement('tbody')

for (let i of data) {
    let tr = document.createElement('tr')
    Object.values(i).forEach(tabledata => {
        let td = document.createElement('td')
        td.innerText = tabledata;
        tr.append(td)
    })
    tbody.append(tr)
}
table.appendChild(tbody)
document.body.append(table)
