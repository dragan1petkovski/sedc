(()=>{
    if(localStorage.getItem("reminders") == undefined)
    {
        localStorage.setItem("reminders",'')
        return;
    }
})()

let writetostorage = (reminder) => {
    let temp = localStorage.getItem("reminders")
    try 
    {
        temp = JSON.parse(temp)
        temp.push(reminder)
        localStorage.setItem("reminders",JSON.stringify(temp))
    }
    catch
    {
        let temp = [];
        temp.push(reminder)
        localStorage.setItem("reminders",JSON.stringify(temp))
    }
}

let readfromstorage = () => {
    let output = localStorage.getItem("reminders")
    try {
        return JSON.parse(output)
         
    }
    catch {
        return false
    }
}

let addreminder = () => {
    let title = document.getElementById("title")
    let priority = document.getElementById("priority")
    let color = document.getElementById("color")
    let description = document.getElementById("description")
    let temp = parseInt(priority.value)
    if (isNaN(temp))
    {
        confirm(`${priority} is not a number`)
        return;
    }
    else
    {
        let reminder = {
            "title":title.value,
            "priority":temp,
            "color":color.value,
            "description":description.value
        }
        writetostorage(reminder)

    }
    console.log("tuka sum")
    title.value = ''
    priority.value = ''
    description.value = ''
    color.value = ''
}

let createtable = () => {
    let table = document.createElement("table")
    table.style.border = "1px solid black"
    let head = table.createTHead();
    let body = table.createTBody();
    let header = head.insertRow(0)
    header.insertCell(0).innerText = "Title"
    header.insertCell(1).innerText = "Priority"
    header.insertCell(2).innerText = "Description"

    reminders = readfromstorage()
    if(reminders)
    {
        for(let i=0;i<reminders.length;i++)
        {
            let row = body.insertRow(i)
            row.style.border = "1px solid black"
            let title = row.insertCell(0)
            title.style.color = reminders[i].color
            title.innerHTML = reminders[i].title
            row.insertCell(1).innerText = reminders[i].priority.toString()
            row.insertCell(2).innerText = reminders[i].description
        }
    }

    let output = document.getElementById("output")
    output.innerHTML = ''
    output.append(table)

}

document.getElementById("addnewreminder").addEventListener("click",()=>{addreminder()})
document.getElementById("listallreminders").addEventListener("click",()=>{createtable()})