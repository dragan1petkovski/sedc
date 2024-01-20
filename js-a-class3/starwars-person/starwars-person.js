let getswcharactername =  (swlink,cell,type) => {
    if(checkswlink(swlink))
    {
        fetch(swlink).then((response)=>{
            return response.json()
        }
        ).then((response)=>{
            if(type === "films")
            {
                cell.appendChild(document.createTextNode(`${response.title}, `))
            }
            else if (type === "homeworld")
            {
                cell.appendChild(document.createTextNode(`${response.name}`))
            }
            else
            {
                cell.appendChild(document.createTextNode(`${response.name}, `))
            }
            
        }

        ).catch((error)=>{
            console.log(error)
        })
    }
    else
    {
        throw new Error("This is not starwars link")
    }
    
    
}

let checkinputswlink = (swlink) =>
{
    try{
        if(swlink.toLowerCase().match("^https://swapi.dev/api/people+") === null)
        {
            throw new Error("This is not valid starwars link")
        }
        else{
            return swlink
        }
    }
    catch{
        throw new Error("This is not valid starwars link")
    }
}

let checkswlink  = (swlink) => {
    try{
        if(swlink.toLowerCase().match("^https://swapi.dev+") === null)
        {
            throw new Error("This is not valid starwars link")
        }
        else{
            return swlink
        }
    }
    catch{
        throw new Error("This is not valid starwars link")
    }
    
}

let swtable = (swobject) =>
{
    let table = document.createElement("table")
    table.style.border = "1px solid black"
    table.className = "text-center"
    let head = table.createTHead()
    let body = table.createTBody()
    let header = head.insertRow(0)
    let swkeys = Object.keys(swobject)
    let row = body.insertRow(0)
    swkeys.pop()
    for(let i = 0;i<swkeys.length;i++)
    {
        let headercell = header.insertCell(i);
        headercell.style.border = "1px solid black"
        headercell.innerText = swkeys[i]

        let bodycell = row.insertCell(i);
        bodycell.style.border = "1px solid black"
        try {
            checkswlink(swobject[swkeys[i]])
            getswcharactername(swobject[swkeys[i]],bodycell,swkeys[i])
        }
        catch
        {
            
            if(Array.isArray(swobject[swkeys[i]]))
            {
                for(list of swobject[swkeys[i]])
                {
                    getswcharactername(list,bodycell,swkeys[i])
                }
            }
            else
            {
                
                if(swkeys[i] == 'created' || swkeys[i] == 'edited') {
                    let date = new Date(Date.parse(swobject[swkeys[i]]))
                    bodycell.innerText = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
                }
                else{
                    bodycell.innerText = swobject[swkeys[i]]
                }
            }
        }
        
        
    }
    document.getElementById("output").append(table)
}


let getswcharacter = (swlink)=>{
    try
    {
        fetch(checkinputswlink(swlink)).then((response)=>{
            return response.json()
        }
        ).then((response)=>{
            document.getElementById("output").innerHTML = ''
            swtable(response)
        }

        ).catch((error)=>{
            console.log(error)
        })
    }
    catch
    {
        throw new Error("This is not valid starwars link")
    }
    
}

document.getElementById("checkswapi").addEventListener("click",()=>{
    try{
        getswcharacter(document.getElementById("swlink").value)
    }
    catch(error) {
        confirm(error)
    }
    
})

//https://swapi.dev/api/people/1