//----------------------- Homework 2 - books -----------------------
document.getElementById("addnewbook").addEventListener("click",addnewbook);
document.getElementById("listallbooks").addEventListener("click",function(){listallbooks("all")});
document.getElementById("listreadbooks").addEventListener("click",function(){listallbooks("read")});
document.getElementById("listunreadbooks").addEventListener("click",function(){listallbooks("unread")});
document.getElementById("deleteallbooks").addEventListener("click",deleteallbooks)
document.getElementById("changebookstatus").addEventListener('click',changebookstatus)
document.getElementById("deletechecked").addEventListener("click",deletemarkedbooks)

if (localStorage.getItem("bookcounter") == null)
{
    localStorage.setItem("bookcounter",0)
}

function regexcheck(testnumber,regexpattern)
{
    let match = testnumber.match(regexpattern);
    try
    {
        if(match[0] === testnumber)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    catch
    {
        return false;
    }

}

function addnewbook()
{
    let bookcounter = parseInt(localStorage.getItem("bookcounter"));
    let nameofthebook = document.getElementById("nameofthebook")
    let authorofthebook = document.getElementById("authorofthebook")

    if(confirm(`Add the book ${nameofthebook.value} from author ${authorofthebook.value}`))
    {
        if (regexcheck(nameofthebook.value,"^-[A-Z]+|[A-Z]+|^-[a-z]+|[a-z]+") && regexcheck(authorofthebook.value,"^-[A-Z]+|[A-Z]+|^-[a-z]+|[a-z]+"))
        {
            bookcounter = bookcounter +1
            let book = {
                name: nameofthebook.value,
                author: authorofthebook.value,
                readstatus: false,
                changestatus: `<input type="checkbox" value=false id="${bookcounter}" class="checkbox">`
            }
            
            localStorage.setItem(bookcounter,JSON.stringify(book))
            localStorage.setItem("bookcounter",bookcounter);
        }
        else{
            alert("Incorrect Names, only alphabetic names")
        }
        nameofthebook.value = '';
        authorofthebook.value = '';
    }

    
}

function deleteallbooks()
{
    if(confirm("Are you sure you want to delete all books?"))
    {
        let bookcounter = localStorage.getItem("bookcounter")
        for(let i=1;i<= bookcounter; i++)
        {   
            localStorage.removeItem(i)
        }
        localStorage.setItem("bookcounter",0)
    }

}

function visiblebuttons()
{
    let buttons = document.getElementsByClassName("buttonsformarking")
    for(let i=0; i< buttons.length; i++)
    {
        buttons[i].removeAttribute("hidden")
    }
}

function listallbooks(status)
{
    let table = document.createElement("table");
    let header = table.createTHead();
    let headerrow = header.insertRow(0)
    let headername = headerrow.insertCell(0)
    headername.innerHTML = `<b>Name</b>`
    let headerauthor = headerrow.insertCell(1)
    headerauthor.innerHTML = `<b>Author</b>`
    let headerstatus = headerrow.insertCell(2)
    headerstatus.innerHTML = `<b>Status</b>`
    headerrow.insertCell(3)
    let body = table.createTBody();
    
    let listofbooks = parseInt(localStorage.getItem("bookcounter"))
    if (listofbooks === 0)
    {
        confirm("No books added")
        return 
    }

    if(status === "all")
    {
        for(let i=1 ; i<= listofbooks; i++)
        {
            let book = JSON.parse(localStorage.getItem(i))
            let row = body.insertRow(i-1);
            row.insertCell(0).innerHTML = book.name
            row.insertCell(1).innerHTML = book.author
            row.insertCell(2).innerHTML = book.readstatus
            let changestatus = row.insertCell(3)
            changestatus.setAttribute("style","display: flex; justify-content: center")
            changestatus.innerHTML = book.changestatus
        }
    }
    if(status === "read")
    {
        let tempflag = 0
        for(let i=1 ; i<= listofbooks; i++)
        {
            let book = JSON.parse(localStorage.getItem(i))
            if(book.readstatus)
            {
                let row = body.insertRow(tempflag);
                tempflag=tempflag+1
                row.insertCell(0).innerHTML = book.name
                row.insertCell(1).innerHTML = book.author
                row.insertCell(2).innerHTML = book.readstatus
                let changestatus = row.insertCell(3)
                changestatus.setAttribute("style","display: flex; justify-content: center")
                changestatus.innerHTML = book.changestatus
            }
            
        }
    }
    if(status === "unread")
    {
        let tempflag = 0
        for(let i=1 ; i<= listofbooks; i++)
        {
            let book = JSON.parse(localStorage.getItem(i))
            if(!book.readstatus)
            {
                let row = body.insertRow(tempflag);
                tempflag=tempflag+1
                row.insertCell(0).innerHTML = book.name
                row.insertCell(1).innerHTML = book.author
                row.insertCell(2).innerHTML = book.readstatus
                let changestatus = row.insertCell(3)
                changestatus.setAttribute("style","display: flex; justify-content: center")
                changestatus.innerHTML = book.changestatus
            }
            
        }
    }

    visiblebuttons()
    // let markasread = document.getElementById("markasread")
    // markasread.removeAttribute("hidden")
    let showbooks = document.getElementById("showbooks")
    showbooks.innerHTML = '';
    showbooks.appendChild(table)
}


function changebookstatus()
{
    let checkboxes = document.querySelectorAll(".checkbox:checked")
    for(let i=0; i<checkboxes.length; i++)
    {
        let book = localStorage.getItem(checkboxes[i].id)
        book = JSON.parse(book)
        if (book.readstatus)
        {
            book.readstatus = false
        }
        else
        {
            book.readstatus = true
        }
        
        localStorage.setItem(checkboxes[i].id,JSON.stringify(book))
    }
    listallbooks("all")
}
