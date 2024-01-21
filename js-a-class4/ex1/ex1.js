let checksignofnumber = (number) =>
{
    if (number >0)
    {
        return "positive"
    }
    else 
    {
        return "negative"
    }
}

let checknumberofdigits = (number) => {
    if(number <0)
    {
        return checknumberofdigits(number*(-1))
    }
    else
    {
        if(number > 0)
        {
            return 1+1*checknumberofdigits(parseInt(number/10))
        }
        else
        {
            return 0
        }
    }

}
let checkparity = (number) => {
    if(number%2 === 0)
    {
        return "even"
    }
    else
    {
        return "odd"
    }
}



let outputnumber = (number)=>
{
    return `${checknumberofdigits(number)} Digits, ${checkparity(number)}, ${checksignofnumber(number)}`
}
document.getElementById("checknumber").addEventListener("click",()=>{
    let number = document.getElementById("number").value
    let outputmessage = `${checknumberofdigits(number)} Digits, ${checkparity(number)}, ${checksignofnumber(number)}`
    let outputelement = document.getElementById("output")
    outputelement.className = "text-center"
    outputelement.innerText = outputmessage
})

