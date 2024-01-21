let createarray = () => {
    let arraylength = parseInt(document.getElementById("arraylength").value)
    if(isNaN(arraylength))
    {
        confirm(`Value is not a number`)
    }
    else 
    {
        if(arraylength < 25)
        {
            let output = []
            for(let i=0;i<arraylength;i++)
            {
                output.push(parseInt((Math.random()*100000)%20))
            }
            return output
        }
        else
        {
            confirm("Array length can less than 25")
        }
    }
}

let square = (number) => number*number

let createtable = (arrayofnumbers) => {
    let table = document.createElement("table")
    table.setAttribute("style","width:300px; margin-left: 500px")
    table.className = "text-center"
    let head = table.createTHead();
    let body = table.createTBody();
    let header = head.insertRow(0)
    header.style.border = "1px solid black"
    header.insertCell(0).innerHTML = 'x'
    header.insertCell(1).innerHTML = 'x<sup>2</sup>'

    for(let i=0; i<arrayofnumbers.length; i++)
    {
        let bodyrow = body.insertRow(i)
        bodyrow.style.border = "1px solid black"
        bodyrow.insertCell(0).innerText = arrayofnumbers[i]
        bodyrow.insertCell(1).innerText = square(arrayofnumbers[i]) //this can be written as bodyrow.insertCell(1).innerText = ((number)=>number*number)(arrayofnumbers[i])
    }

    let output = document.getElementById("output")
    output.innerHTML = ''
    document.getElementById("output").append(table)
}

document.getElementById("squareofarray").addEventListener("click",()=>{createtable(createarray())})
