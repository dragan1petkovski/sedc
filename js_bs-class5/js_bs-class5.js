//--------------------- Start Homework 2 -------------------------
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


//--------------------- Start Bonus Homework -------------------------
let ingredientlist = [];
let ingredientcounter = 0;

document.getElementById("addingredient").addEventListener("click",addingredient);
document.getElementById("addrecipe").addEventListener("click",addrecipe);

function addingredient()
{
    let ingredient = document.getElementById("ingredientname")
    let temp = [];
    temp.push(`ingredient-${ingredientcounter+1}`);
    temp.push(ingredient.value);
    ingredientlist.push(temp);
    ingredient.value = '';
    ingredientcounter++;
}

function inserttablerow(tablepart,type, data)
{
    if(type ==="head")
    {
        console.log(tablepart);
        let row = tablepart.insertRow(0);
        for(let i =0; i<data.length; i++)
        {
            let cell = row.insertCell(i);
            cell.innerHTML = `<b>${data[i]}</b>`
        }
    }
    else if (type === "body")
    {
        for(let i=0; i< data.length; i++)
        {
            let row = tablepart.insertRow(i)
            for(let j=0; j< data[i].length; j++)
            {
                let cell = row.insertCell(j)
                cell.innerText = data[i][j]
            }
        }
    }
    return tablepart;
}

function createtable()
{
    let header = ["Ingredient Number","Ingredient Name"];
    let table = document.createElement("table");
    let head = table.createTHead();
    let body = table.createTBody();
    head = inserttablerow(head,"head",header)
    body = inserttablerow(body,"body",ingredientlist)

    return table;
}

function addrecipe()
{
    let recipename = document.getElementById("recipename");
    
    let newtab = window.open("","_blank");

    let css = document.createElement("link")
    css.href = "http://127.0.0.1:5500/js_bs-class5/js_bs-class5.css"
    css.rel = "stylesheet"
    
    let title = document.createElement("title");
    title.innerText = recipename.value;
    
    let header = document.createElement("div");
    header.setAttribute("class","row announcment");
    header.innerText = recipename.value;

    let body = document.createElement("div");
    body.setAttribute("class","row");
    body.setAttribute("id","body");


    newtab.document.head.appendChild(css);
    newtab.document.head.appendChild(title);
    newtab.document.body.appendChild(header);
    newtab.document.body.appendChild(body);
    newtab.document.querySelector("#body").appendChild(createtable());
    ingredientcounter = 0;
    ingredientlist = [];
}