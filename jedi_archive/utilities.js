export let sortByCharactersHTMLCollection = (table,asc,position) =>
{
    let tableArray = Array.from(table.children[1].children)
    if(asc === "asc")
    {
        tableArray.sort((p,c) => p.cells[position].innerText.localeCompare(c.cells[position].innerText))
    }
    else if(asc === "decs")
    {
        tableArray.sort((p,c) => c.cells[position].innerText.localeCompare(p.cells[position].innerText))
    }
    
    table.children[1].innerHTML =''
    for(let item of tableArray)
    {
        table.children[1].appendChild(item)
    }
}

export let sortByNumbersHTMLCollection = (table,asc,position) =>
{
    let tableArray = Array.from(table.children[1].children)
    if(asc === "asc")
    {
        tableArray.sort((p,c) => {
            let num1 = parseFloat(p.cells[position].innerText)
            let num2 = parseFloat(c.cells[position].innerText)
            if(!isNaN(num1))
            {
                if(!isNaN(num2))
                {
                    return num1 - num2
                }
                else
                {
                    num2 =0
                    return num1 - num2

                }
            }
            if(!isNaN(num2))
            {
                num1=0
                return num1 - num2
            }
            else
            {
                num2 = 0
                num1 = 0
                return num1 - num2

            }
        })
    }
    else if(asc === "decs")
    {
        tableArray.sort((p,c) => {
            let num1 = parseFloat(c.cells[position].innerText)
            let num2 = parseFloat(p.cells[position].innerText)
            if(!isNaN(num1))
            {
                if(!isNaN(num2))
                {
                    return num1 - num2
                }
                else
                {
                    num2 =0
                    return num1 - num2

                }
            }
            if(!isNaN(num2))
            {
                num1=0
                return num1 - num2
            }
            else
            {
                num2 = 0
                num1 = 0
                return num1 - num2

            }
        })
    }
    
    table.children[1].innerHTML =''
    for(let item of tableArray)
    {
        table.children[1].appendChild(item)
    }
}

export let createHeaderCell = (cell,value,listener) =>
{
    let btn = document.createElement("button")
    btn.className = "sortingbutton"
    btn.innerHTML = "&#11030;"
    btn.style.display = "inline"
    btn.style.fontSize = "1.2em"
    btn.id = value
    btn.addEventListener("click",listener)
    cell.appendChild(document.createTextNode(value))
    cell.appendChild(btn)
    return cell
}

export let searchTable = (table,value) => {
    let output = [];
    let tableArray = Array.from(table.children[1].children)
    for(let row of tableArray)
    {
        let cells = Array.from(row.cells)
        if(!isNaN(value))
        {
            cells.find((item) => parseFloat(item) === value.value)
            output.push(row)
            break;
        }
        for(let cell of cells)
        {
            if(cell.innerText.toLowerCase().includes(value.value.toLowerCase()))
            {
                output.push(row)
                break;
            }
        }
        
    }
    table.children[1].innerHTML =''
    for(let item of output)
    {
        table.children[1].appendChild(item)
    }

}

export let generalSortingNumbers = (fieldbtn,collumn) =>
{
    let btn = document.getElementById(fieldbtn)
    let table = document.getElementById("outputtable")
    if (btn.innerText.charCodeAt(0) === 11030 || btn.innerText.charCodeAt(0) === 11033)
    {
        btn.innerHTML = "&#11032;"
        sortByNumbersHTMLCollection(table, "asc",collumn)
    }
    else if (btn.innerText.charCodeAt(0) === 11032)
    {
        btn.innerHTML = "&#11033;"
        sortByNumbersHTMLCollection(table, "decs",collumn)
    }
    
}

export let generalSortingStrings = (fieldbtn, collumn) =>
{
    console.log("tuka sum")
    let btn = document.getElementById(fieldbtn)
    let table = document.getElementById("outputtable")
    if (btn.innerText.charCodeAt(0) === 11030 || btn.innerText.charCodeAt(0) === 11033)
    {
        btn.innerHTML = "&#11032;"
        sortByCharactersHTMLCollection(table, "asc",collumn)
    }
    else if (btn.innerText.charCodeAt(0) === 11032)
    {
        btn.innerHTML = "&#11033;"
        sortByCharactersHTMLCollection(table, "decs",collumn)
    }
    
}


export let pagination = (totalpages,pagenumber) => {
    let div = document.getElementById("pagination")
    div.innerText = ''
    div.innerText = `${pagenumber} of ${totalpages}`
    
}