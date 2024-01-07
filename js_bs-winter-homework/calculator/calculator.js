document.getElementById("c").addEventListener("click",function(){clearall()})
document.getElementById("backspace").addEventListener("click",backspace)
document.getElementById("division").addEventListener("click",divide)
document.getElementById("7").addEventListener("click",seven)
document.getElementById("8").addEventListener("click",eight)
document.getElementById("9").addEventListener("click",nine)
document.getElementById("multipilcation").addEventListener("click",multiplication)
document.getElementById("4").addEventListener("click",four)
document.getElementById("5").addEventListener("click",five)
document.getElementById("6").addEventListener("click",six)
document.getElementById("minus").addEventListener("click",subtraction)
document.getElementById("1").addEventListener("click",one)
document.getElementById("2").addEventListener("click",two)
document.getElementById("3").addEventListener("click",three)
document.getElementById("+").addEventListener("click",addition)
document.getElementById(".").addEventListener("click",dot)
document.getElementById("0").addEventListener("click",zero)
document.getElementById("=").addEventListener("click",equal)

if(localStorage.getItem("lastnumber") == null)
{
    localStorage.setItem("lastnumber",0)
}

let output = '';
let number = 0;
let specialcharacter = '';
let tempnumber = '';


function display(output,current)
{
    document.getElementById("output").innerHTML = output;
    document.getElementById("current").innerHTML = current;
}


function changeoperatorsign(previousoperator,outputoperator,operator)
{
    let position;
    if (previousoperator === ";") //for changing multipllication sign
    {
        position = output.indexOf("&")
    }
    else
    {
        position = -1
    }
    output = output.slice(0,position)+outputoperator
    localStorage.setItem("lastoperator",operator)
    display(output,outputoperator)
}

function changeoperator(outputoperator,operator)
{
    let character = output.slice(-1)
    switch(character)
    {
        case "/":
            changeoperatorsign("/",outputoperator,operator)
            return true
        case ";": //It is for multiplication sign
            changeoperatorsign(";",outputoperator,operator)
            return true
        case "+":
            changeoperatorsign("+",outputoperator,operator)
            return true
        case "-":
            changeoperatorsign("-",outputoperator,operator)
            return true
        default:
            return false


    }

}


function calculatetwonumbers(number1,number2,operand)
{
    let output = {"error":'',"output":0}
    if (operand === '/')
    {
        if(parseFloat(number2)!==0)
        {
            output.output= parseFloat(number1) / parseFloat(number2)
        }
        else
        {
            output.error="Infinity: Division with ZERO is forbiden"
            
        }
        return output
       
    }
    else if(operand === "*")
    {
        output.output = parseFloat(number1) * parseFloat(number2)
        return output
    }
    else if(operand === "+")
    {
        output.output =  parseFloat(number1) + parseFloat(number2)
        return output
    }
    else if(operand === "-")
    {
        output.output =  parseFloat(number1) - parseFloat(number2)
        return output
    }
    else if(operand === "=")
    {
        output.output =  parseFloat(number1)
        return output
    }
}

//----------------------- clear ----------------------
function clearall(error = '')
{
    localStorage.setItem("lastnumber",0)
    localStorage.removeItem("lastoperator")
    tempnumber =''
    output = '';
    display('',error)
}
function backspace()
{
    if (output.slice(-1) == ";" )
    {
        
        let temp = output.indexOf("&")
        output = output.slice(0,temp)
    }
    else
    {
        tempnumber = tempnumber.slice(0,-1)
        output = output.slice(0,-1)
    }
    document.getElementById("output").innerHTML = output;

}

//----------------------- operands ----------------------
function divide()
{
    let divisionsign = "/"
    if (changeoperator("/","/"))
    {
        return;
    }
    let lastnumber = localStorage.getItem("lastnumber");
    let lastoperator = localStorage.getItem("lastoperator")
    if (lastoperator != null)
    {
        let calculationoutput = calculatetwonumbers(lastnumber,parseFloat(tempnumber),lastoperator)
        if(calculationoutput.error === '')
        {
            localStorage.setItem("lastnumber",calculationoutput.output)
        }
        else
        {
            clearall(calculationoutput.error)
        }

    }
    else if(lastoperator == null)
    {
        localStorage.setItem("lastnumber",parseFloat(tempnumber))
    }
    localStorage.setItem("lastoperator","/")


    tempnumber=''
    output = output + divisionsign
    display(output, divisionsign )
}
function multiplication()
{
    let multipilcationsign = "&#10799;"
    if(changeoperator(multipilcationsign,"*"))
    {
        return;
    }
    let lastnumber = localStorage.getItem("lastnumber");
    let lastoperator = localStorage.getItem("lastoperator")
    if (lastoperator != null)
    {
        let calculationoutput = calculatetwonumbers(lastnumber,parseFloat(tempnumber),lastoperator)
        if(calculationoutput.error === '')
        {
            localStorage.setItem("lastnumber",calculationoutput.output)
        }
        else
        {
            clearall(calculationoutput.error)
        }
    }
    else if(lastoperator == null)
    {
        if(tempnumber === '')
        {
            localStorage.setItem("lastnumber",0)
        }
        else
        {
            localStorage.setItem("lastnumber",parseFloat(tempnumber))
        }
        
    }
    localStorage.setItem("lastoperator","*")

    tempnumber=''
    output = output + multipilcationsign
    display(output,multipilcationsign)
}
function addition()
{
    let plussign = "+"
    if(changeoperator("+","+"))
    {
        return;
    }
    let lastnumber = localStorage.getItem("lastnumber");
    let lastoperator = localStorage.getItem("lastoperator")

    if (lastoperator != null)
    {
        let calculationoutput = calculatetwonumbers(lastnumber,parseFloat(tempnumber),lastoperator)
        if(calculationoutput.error === '')
        {
            localStorage.setItem("lastnumber",calculationoutput.output)
        }
        else
        {
            clearall(calculationoutput.error)
        }
    }
    else if(lastoperator == null)
    {
        if(tempnumber === '')
        {
            localStorage.setItem("lastnumber",0)
        }
        else 
        {
            localStorage.setItem("lastnumber",parseFloat(tempnumber))
        }
    }
    localStorage.setItem("lastoperator","+")

    tempnumber=''
    output = output + plussign
    display(output,plussign)
}
function subtraction()
{

    if(changeoperator("-","-"))
    {
        return
    }
    let subtractionsign = "-"
    let lastnumber = localStorage.getItem("lastnumber");
    let lastoperator = localStorage.getItem("lastoperator")
    if (lastoperator != null)
    {
        let calculationoutput = calculatetwonumbers(lastnumber,parseFloat(tempnumber),lastoperator)
        if(calculationoutput.error === '')
        {
            localStorage.setItem("lastnumber",calculationoutput.output)
        }
        else
        {
            clearall(calculationoutput.error)
        }
    }
    else if(lastoperator == null)
    {
        if(tempnumber === '')
        {
            localStorage.setItem("lastnumber",0)
        }
        else
        {
            localStorage.setItem("lastnumber",parseFloat(tempnumber))
        }
    }
    localStorage.setItem("lastoperator","-")

    tempnumber =''
    

    output = output + subtractionsign
    display(output,subtractionsign)
}
function equal()
{

    let lastnumber = localStorage.getItem("lastnumber")
    let lastoperator = localStorage.getItem("lastoperator")
    if(lastoperator == null)
    {
        return;
    }
    let calculationoutput = calculatetwonumbers(lastnumber,tempnumber,lastoperator)
    if(calculationoutput.error === '')
    {
        localStorage.setItem("lastnumber",calculationoutput.output)
        localStorage.setItem("lastnumber",result)
        localStorage.setItem("lastoperator","=")
        lastnumber=localStorage.getItem("lastnumber")
        tempnumber='';
        output=result.toString();
        display(result,lastnumber)
    }
    else
    {
        clearall(calculationoutput.error)
        tempnumber='';
    }


}

//----------------------- Numbers ----------------------
function one()
{

    number = 1;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function two()
{
    number = 2;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function three()
{
    number = 3;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function four()
{
    number = 4;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function five()
{
    number = 5;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function six()
{
    number = 6;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function seven()
{
    number = 7;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function eight()
{
    number = 8;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function nine()
{
    number = 9;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}
function zero()
{
    number = 0;
    tempnumber = tempnumber + number.toString()
    output = output + number.toString()
    display(output,number.toString());
}


function dot()
{
    specialcharacter = ".";
    tempnumber = tempnumber + specialcharacter.toString()
    output = output + specialcharacter
    display(output,specialcharacter);
}