let rows = document.querySelector('.rows')
let cols = document.querySelector('.cols')
let btn = document.querySelector('.btn')
let body = document.body
let table = document.createElement('table')

btn.addEventListener('click', CreateTable )

function CreateTable() {
    for (let I = 0; I < rows.value; I++) {
        let tr = document.createElement('tr')
        let a = table.appendChild(tr)

        for (let J = 0; J < cols.value; J++) {
            let td = document.createElement('td')
            let b = tr.appendChild(td)

            b.innerHTML = '<i>DIMA WYDAD </i>'


        }
    }
    body.appendChild(table)
}

CreateTable()
