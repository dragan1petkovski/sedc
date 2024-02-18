import { beersWorkareaBodyFromDOM } from "./pagecontent.js"
let sortDate = (items,type) =>
{

    let splitarray = items.map((item)=>item.split("/"))
    if(type === "asc")
    {
        let sortybyyear = splitarray.sort((p,c) => {
            let previous = new Date()
            let current = new Date()
            previous.setFullYear(p[1])
            previous.setMonth(p[0])
            current.setFullYear(c[1])
            current.setMonth(c[0])
            return previous - current
        })
        return sortybyyear.map((item) => item.join("/"))
    }
    else if(type === "decs")
    {
        let sortybyyear = splitarray.sort((p,c) => {
            let previous = new Date()
            let current = new Date()
            previous.setFullYear(p[1])
            previous.setMonth(p[0])
            current.setFullYear(c[1])
            current.setMonth(c[0])
            return current - previous
        })
        return sortybyyear.map((item) => item.join("/"))
    }
}


let sortCharacters = (items,type) =>
{
    if(items[0].match("^[0-9][0-9]/[0-9][0-9][0-9][0-9]"))
    {
        let output = sortDate(items,type)
        return output
    }
    else {
        if(type === "asc")
        {
            return items.sort((p,c)=>c.localeCompare(p))
        }
        else if(type === "decs")
        {
            return items.sort((p,c)=>p.localeCompare(c))
        }
    }
}

let sortNumbers = (items,type) =>
{
    if(type === "asc")
    {
        return items.sort((p,c)=>c - p)
    }
    else if(type === "decs")
    {
        return items.sort((p,c)=>p - c)
    }
}

export let removeSpecialCharacter = (...args) =>
{
    if(args[0].indexOf(args[1])>-1)
    {
        let temp = args[0].split(args[1])
        return temp[0].replace(/\s+/g, '')
    }
    return args[0]
}

let changeSortBtnDirection = (sortValue) =>
{
    let btn = document.getElementById(sortValue)
    let btnvalue = btn.value
    if(btnvalue.indexOf("&#11107;") > -1)
    {
        let id = removeSpecialCharacter(btnvalue,"&#11107;")
        btn.value = `${id} &#11105;`
        btn.innerHTML = `${id} &#11105;`
    }
    else if(btnvalue.indexOf("&#11105;") > -1)
    {
        let id = removeSpecialCharacter(btnvalue,"&#11105;")
        btn.value = `${id} &#11107;`
        btn.innerHTML = `${id} &#11107;`
    }
}

let sortData = (data,sortValue,sortBy) =>
{
    let btn = document.getElementById(sortValue)
    let btnvalue = btn.value
    if(btnvalue.indexOf("&#11107;") > -1)
    {
        return sortBy(data,"decs")
    }
    else if(btnvalue.indexOf("&#11105;") > -1)
    {
        return sortBy(data,"asc")
    }
}

export let sortByParameter = (parameter) =>
{
    let beerElements = document.querySelectorAll('[beer="true"]')
    let dataOrder = [];
    let dataHash = [];
    let beers = []
    for(let beer of beerElements)
    {
        let map = new Map()
        dataHash.push(map.set(beer.getAttribute(parameter),beer))
        dataOrder.push(beer.getAttribute(parameter))
    }
    for(let beer of sortData(dataOrder,parameter,isNaN(dataOrder[0])? sortCharacters : sortNumbers))
    {
        beers.push(dataHash.find((item)=>item.get(beer)).get(beer))
    }
    let workarea = document.getElementById("workarea")
    beersWorkareaBodyFromDOM(workarea,beers)
    changeSortBtnDirection(parameter)
    
}
