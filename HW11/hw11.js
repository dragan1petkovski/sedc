//------------------ Start Homework 1 - Tell a Story ------------------
document.getElementById("tellastory").addEventListener("click",tellastory)

function tellastory()
{
    let storynarative = [];
    storynarative.push(document.getElementById("name").value);
    storynarative.push(document.getElementById("mood").value);
    storynarative.push(document.getElementById("action").value);

    let story = `This is ${storynarative[0]}, ${storynarative[0]} is a nice persion. Today they are in ${storynarative[1]}. They are ${storynarative[2]} all day. The end.`

    document.getElementById("story").innerText = story;
}

//------------------ End Homework 1 - Tell a Story ------------------

//------------------ Start Homework 2 - Sum of 5 numbers ------------------
document.getElementById("sumofnumbers").addEventListener("click",sumofnumbers)

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

//isNaN function do not work properly because it allow 2a to be converted to 2
function sumofnumbers(){
    let numbers = document.getElementsByClassName("number")
    let sum = 0;
    for(let i=0; i< numbers.length; i++)
    {
        if(isnumber(numbers[i].value)) 
        {
            sum = sum + parseInt(numbers[i].value)
        }
        else {
            let errormessage = `${numbers[i].value} is not a number`
            confirm(errormessage)
            return null;
        }
    }
    let totalmessage = `Sum of all numbers is ${sum}`;
    confirm(totalmessage)
}
//------------------ End Homework 2 - Sum of 5 numbers ------------------

//------------------ Start Homework 3 and 5 - Convert arry to string ------------------

let items = [];
let numberlist = []; // from homework 5
document.getElementById("additem").addEventListener("click",additem)
document.getElementById("cleanlist").addEventListener("click",cleanlist)
document.getElementById("showlist").addEventListener("click",showlist)

function additem()
{
    let input = document.getElementById("item");
    let item = input.value;
    // Start homework 5

    if (isnumber(input.value))
    {
        numberlist.push(parseInt(input.value))
    }
    // end homework 5
    input.value = '';
    items.push(item)
}

function cleanlist()
{
    items = [];
    document.getElementById("listofitems").innerText = '';
}

 function showlist()
 {
    let output = items.join(" ");
    document.getElementById("listofitems").innerText = output;
 }
//------------------ End Homework 3 and 5 - Convert arry to string ------------------

//------------------ Start Homework 4 - Convert arry to string ------------------
document.getElementById("printloop").addEventListener("click",printloop)
function printloop()
{
    let looplimit = document.getElementById("limitinput").value;
    let output = '';
    if( isnumber(looplimit))
    {
        let looplimitnumber = parseInt(looplimit);
        for(let i=0;i< looplimitnumber; i++)
        {
            if (i%2 == 0)
            {
                output = output + String(i) + "\n";
            }
            else
            {
                output = output + String(i) +" ";
            }
        }
    }

    console.log(output);
}
//------------------ End Homework 4 - Convert arry to string ------------------

//------------------ Start Homework 5 - sum of minimum and maximum ------------------
document.getElementById("sumofminandmax").addEventListener("click",findminandmax)

function findminandmax()
{
    
    let minimum = numberlist[0];
    let maximum = numberlist[0];
    while (true)
    {
        let temp =0;
        for(let i=0; i<numberlist.length; i++)
        {
            if (minimum > numberlist[i])
            {
                minimum = numberlist[i]
            }
            else if(maximum < numberlist[i])
            {
                maximum = numberlist[i]
            }
            else
            {
                temp = temp + 1;
            }
        }
        if (temp === numberlist.length)
        {
            break;
        }
    }
    document.getElementById("sumofminandmax_print").innerText = String(minimum+maximum);
}
//------------------ End Homework 5 - sum of minimum and maximum  ------------------