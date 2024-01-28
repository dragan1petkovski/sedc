//Data processing functions
let getData = async (link,datalocation) =>
{
    let response;
    let data;
    try
    {
        response = await fetch(link)
        data = await response.json()
    }
    catch (error)
    {
        console.error(error)
        throw new Error("Can not access the requested link at the moment")
        
    }
    if(datalocation == null)
    {
        return data
    }
    else
    {
        return data[datalocation]
    }
    
}


let processData = async ([link,datalocation],functions,arguments) =>
{
    if(typeof(link) === "string")
    {
        let data = await getData(link,datalocation)
        for (let i=0; i<functions.length; i++)
        {
            
            try
            {
                arg = arguments[i]
                data = functions[i](arg,data)
            }
            catch
            {
                if(functions[i].length > 1)
                {
                    throw new Error("Function is without parameters")
                    
                }
                else
                {
                    data = functions[i](data)
                }
                
            }
            
        }
        printData(data)
    }
}

let addDataToHTML = (parentid,message) =>
{
    let div = document.createElement("div")
    div.classList.add("row")
    div.innerHTML = message
    document.getElementById(parentid).appendChild(div)
}

let printData = (data) => {
    if (Array.isArray(data))
    {
        data.forEach((item) => {
            addDataToHTML("output",JSON.stringify(item))
        })
    }
    else
    {
        addDataToHTML("output",JSON.stringify(data))
    }
}

//Universal functions for processing arrays

let averageData = (key,data) =>
{
    if(Array.isArray(data))
    {
        let tempdata = data.map((item)=>item[key])
        let output = tempdata.reduce((p,c)=>p+c)/tempdata.length
        return output
    }
}

let getSpecificData = (key,data) =>
{
    if(Array.isArray(data))
    {
        let tempdata = data.map((item)=>item[key])
        return tempdata
    }
    else
    {
        return data[key]
    }
}

let orderData = ([key,how],data) =>
{
    if(how === 'asc')
    {
        let tempdata = data.map((item)=>item)
        if(typeof(tempdata[0][key]) === 'string')
        {
            return tempdata.sort((p,c)=>p[key].localeCompare(c[key]))
        }
        else if(Number.isFinite(tempdata[0][key]) )
        {
            return tempdata.sort((p,c) => p[key]-c[key])
        }

    }
    else if(how === "decs")
    {
        let tempdata = data.map((item)=>item)
        if(typeof(tempdata[0][key]) === 'string')
        {
            return tempdata.sort((p,c)=>c[key].localeCompare(p[key]))
        }
        else if(Number.isFinite(tempdata[0][key]))
        {
            return tempdata.sort((p,c) => c[key]-p[key])
        }
    }
}

let getNumberOfItems = (data) =>
{
    return data.length
}

let itemStartsWith = ([key,letter],data) =>
{
    if(Array.isArray(data))
    {
        let tempdata = data.map((item)=>item)
        return tempdata.filter((item)=>item[key].toLowerCase().startsWith(letter))
    }
}

let getFirstElement = (data) =>
{
    return data[0]
}

let findIndexOfFirstElement = ([key,value],data) =>
{
    let tempdata = data.map((item)=>item)
    return tempdata.findIndex((item)=>item[key]===value)

}
