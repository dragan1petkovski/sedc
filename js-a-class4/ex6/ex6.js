let isNumber =(number) => {
    if (Number.isFinite(number))
    {
        return true
    }
    else {
        return false
    }
}

let isPoistiveNumber = (number) =>
{
    if (number >0)
    {
        return true
    }
    else 
    {
        return false
    }
}

let isArray = (item) =>
{
    if(Array.isArray(item))
    {
        return true
    }
    else
    {
        return false
    }
}

let isObject = (item) =>
{
    if(typeof(item) === 'object' && Object.keys(item).length >0)
    {
        return true
    }
    else
    {
        return false
    }
}

let isStringPositiveNumber = (item) =>
{
    let temp 
    try{
       temp = item.match("^[0-9]+")[0]
    }
    catch{
        return null
    }
    if(temp === item)
    {
        let tempnumber = parseInt(item)
        if(isPoistiveNumber(tempnumber))
        {
            return true
        }
    }
    else
    {
        return false
    }


}

let isString = (item) =>
{
    if(typeof(item) === 'string')
    {
        return true
    }
    else
    {
        return false
    }
}

let writetostorage = (item) =>
{
    let temparray = localStorage.getItem("arrayofpositivenumbers")
    if(temparray === null)
    {
        let temp = `${item},`
        localStorage.setItem("arrayofpositivenumbers",temp)
    }
    else
    {
        temparray = temparray+`${item},`
        localStorage.setItem("arrayofpositivenumbers",temparray)
    }
}

let corefunction = (item) => {
    if(isNumber(item)){
        if(isPoistiveNumber(item))
        {
            writetostorage(item)
        }
    }
    else if(isString(item))
    {
        if(isStringPositiveNumber(item))
        {
            writetostorage(parseInt(item))
        }
    }
    else if(isArray(item))
    {
        // console.log(item)
        for(let i=0; i<item.length; i++)
        {
            corefunction(item[i])
        }
    }
    else if(isObject(item))
    {
        for(let key of Object.keys(item))
        {
            corefunction(item[key])
        }
    }

}

let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => `Hello ${name}`, -Infinity, ['hi', 28, -93, true,{name:"travis",born:1924}], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];

let productofnumbers = (listofnumbers) => {
    let product = 1;
    for(let number of listofnumbers)
    {
        product = product*parseInt(number)
    }
    return product
}

let output = (arrayofelements) =>
{
    for(let item of arrayofelements)
    {
        if(item !== undefined && item !== null)
        {
            corefunction(item)
        }
    }
    let outputarray = localStorage.getItem("arrayofpositivenumbers").split(",")
    outputarray.pop()
    console.log(outputarray);
    console.log(`product of all number is ${productofnumbers(outputarray)}`);
    (() => localStorage.removeItem("arrayofpositivenumbers"))()
}


output(array)