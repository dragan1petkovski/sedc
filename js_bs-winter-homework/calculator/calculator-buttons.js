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


function display(output,current)
{
    document.getElementById("output").innerHTML = output;
    document.getElementById("current").innerHTML = current;
}

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