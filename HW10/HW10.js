//---------------------Start of Homework 3 ---------------------
document.getElementById("checkbalance").addEventListener("click",checkbalance)
document.getElementById("windrawmoney").addEventListener("click",windrawmoney)
let totalammountofmoney = parseInt(Math.random()*1000);

function checkbalance()
{
    let message = `Total ammount of money is ${totalammountofmoney}`;
    confirm(message);
}

function windrawmoney()
{
    let ammount = parseInt(prompt("Ammount to widthdraw"))
    if((ammount <= totalammountofmoney) && (ammount > 0))
    {
        let message = `You successfully widthdraw ${ammount} MKD`;
        totalammountofmoney = totalammountofmoney - ammount;
        confirm(message);
    }
    else if(ammount > totalammountofmoney)
    {
        message = `insufficient funds`;
        confirm(message);
    }
    else
    {
        message = `Wrong value/ wrong amount of money`
        confirm(message);
    }
}
//---------------------End of Homework 3 ---------------------

//---------------------Start of homework 2 ---------------------
document.getElementById("converttodogyears").addEventListener("click",converttodogyears);
document.getElementById("converttohumanyears").addEventListener("click",converttohumanyears);

function createchilditem(type,message)
{
    let childitem = document.createElement(type);
    childitem.setAttribute("class","pl-2")
    childitem.innerText = message;
    console
    return childitem;
}

function converttodogyears()
{
    let humanyears = document.getElementById("humanyears").value;
    let dogyears = humanyears * 7;
    let message = `${humanyears} human years are ${dogyears} dogyears`;
    console.log(message);
    document.getElementById("converteddogyears").appendChild(createchilditem("p",message))
}

function converttohumanyears()
{
    let dogyears = document.getElementById("dogyears").value;
    let humanyears = dogyears / 7;
    let message = `${dogyears} dogyears are ${humanyears} human years`;
    console.log(message)
    document.getElementById("convertedhumanyears").appendChild(createchilditem("p",message))
}
//---------------------End of Homework 2 ---------------------

//---------------------Start of homework 1 ---------------------

function gettype(variable)
{
    let type = typeof(variable);
    console.log(type)
    return typeof(type)
}

let test0={t1:"v1",t2:"v2"};
let test1=false;
let test2="test2";
let test3=3;
let test4;

gettype(test0);
gettype(test1);
gettype(test2);
gettype(test3);
gettype(test4);

//---------------------End of Homework 1 ---------------------