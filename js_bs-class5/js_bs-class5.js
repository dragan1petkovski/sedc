let listofnumbers = [];
document.getElementById("addnumber").addEventListener("click",addnumbers);
document.getElementById("sumofnumbers").addEventListener("click",function(){
    let numbers = listofnumbers.join(" + ")
    let sum = sumofnumbers(listofnumbers)
    document.getElementById("sumofnumbers_output").innerText = `(${numbers} = ${sum})`
});



function isnumber(testnumber)
{
    let match = testnumber.match("^-[0-9]+|[0-9]+");
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

function addnumbers()
{
    let number = document.getElementById("number")
    if(isnumber(number.value))
    {
        listofnumbers.push(parseInt(number.value))
    }
    number.value=null;
}

function sumofnumbers(_listofnumbers)
{
    if(_listofnumbers.length>0)
    {
        let temp = _listofnumbers.pop()
        return (temp + sumofnumbers(_listofnumbers)) 
    }
    else
    {
        return 0;
    }
    
}