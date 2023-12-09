document.getElementById("calculatechinesezodiac").addEventListener("click",calculatechinesezodical);
document.getElementById("Answer").addEventListener("click",personalquestion);
document.getElementById("findbiggernumber").addEventListener("click",comparenumbers);
document.getElementById("button1").addEventListener("click",function(){checknumber("1");});
document.getElementById("button2").addEventListener("click",function(){checknumber("2");});
document.getElementById("button3").addEventListener("click",function(){checknumber("3");});
document.getElementById("determineweekday").addEventListener("click",determineweekday);
document.getElementById("Grading").addEventListener("click",gradeclases);

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

function calculatechinesezodical()
{
    const chinesezodiacs = new Map();
    chinesezodiacs.set("0","Rat");
    chinesezodiacs.set("1","Ox");
    chinesezodiacs.set("2","Tiger");
    chinesezodiacs.set("3","Rabbit");
    chinesezodiacs.set("4","Dragon");
    chinesezodiacs.set("5","Snake");
    chinesezodiacs.set("6","Horse");
    chinesezodiacs.set("7","Goat");
    chinesezodiacs.set("8","Monkey");
    chinesezodiacs.set("9","Rooster");
    chinesezodiacs.set("10","Dog");
    chinesezodiacs.set("11","Pig");

    let yearofbirth = document.getElementById("yearofbirth").value;
    if (isnumber(yearofbirth))
    {
        let chinesezodiac = chinesezodiacs.get(String((yearofbirth-4)%12));
        document.getElementById("announcementofchinesezodiac").innerText = chinesezodiac;
    }
    else
    {
        document.getElementById("announcementofchinesezodiac").innerText = "Incorrect year";
    }

}

function personalquestion(){
    let writeammountofmoney = prompt("How much money do you have");
    if(writeammountofmoney === null)
    {
        document.getElementById("Exerciseresult").innerText = "Null (you click cancel)"
        return;
    }


    if(isnumber(writeammountofmoney))
    {
        let amountofmoney = parseInt(writeammountofmoney);
        if(amountofmoney > 0)
        {
            document.getElementById("Exerciseresult").innerText = "Horray!!! Buy something for youself"
        }
        else
        {
            document.getElementById("Exerciseresult").innerText = "Go to work"
        }
    }
    else
    {
        document.getElementById("Exerciseresult").innerText = "You do not enter money"
    }

    
}


function comparenumbers()
{
    const numbermap = new Map();
    const numberstocompare = new Array();
    const postionmap = new Map();
    postionmap.set("1","First");
    postionmap.set("2","Second");
    postionmap.set("3","Third");
    let numbers = document.getElementsByClassName("numbers");
    for(let i =0; i < numbers.length; i++)
    {
        if (isnumber(numbers[i].value))
        {
            numberstocompare.push(parseInt(numbers[i].value));
        }
        numbermap.set(String(numbers[i].value),numbers[i].id);

    }

    while(true)
    {
        let sorting = 0;
        let temp = 0;
        for(let i =0; i< numberstocompare.length; i++)
        {
            
            if (numberstocompare[i+1] > numberstocompare[i])
            {
                temp = numberstocompare[i];
                numberstocompare[i] = numberstocompare[i+1];
                numberstocompare[i+1] = temp;
                sorting++;
            }
        }
        if (sorting === 0)
        {
            break;
        }

    }
    document.getElementById("biggernumberis").innerText = "Biggest is "+ postionmap.get(numbermap.get(String(numberstocompare[0]))) + " number '"+numberstocompare[0]+"'"
}

function checknumber(position)
{
    let temp = document.getElementById(position).value;
    if (isnumber(temp))
    {
        let number = Number(temp);
        console.log(number);
        if (number > 0)
        {
            document.getElementById("numbertype"+position).innerText = "Number is positive";
        }
        else if (number < 0)
        {
            document.getElementById("numbertype"+position).innerText = "Number is Negative";
        }
        else
        {
            document.getElementById("numbertype"+position).innerText = "Number is zero";
        }
    }
    else
    {
        document.getElementById("numbertype"+position).innerText = "It is not a number";
    }
}

function determineweekday()
{
    const mapday = new Map();
    mapday.set("1","Monday");
    mapday.set("2","Tuesday");
    mapday.set("3","Wednesday");
    mapday.set("4","Thursday");
    mapday.set("5","Friday");
    mapday.set("6","Saturday");
    mapday.set("7","Sunday");
    let temp = document.getElementById("weekday").value;
    if(isnumber(temp))
    {
        let number = Number(temp);
        if (number >0 && number<8)
        {
            confirm("Day is "+mapday.get(String(number)));
        }
        else
        {
            confirm("Wrong day number, choose between 1 and 7 ")
        }
    }

}

function deletewarningmessages()
{
    let warning = document.getElementsByClassName("alert");
    for(let i = 0; i < warning.length; i++)
    {
        warning[i].innerText = '';
    }
}

function getpoints(points)
{
    let flag = points.match("^[0-9]+/[0-9]+");
    console.log(flag)
    if(flag === null)
    {
        return null;
    }
    else 
    {
        
        let temp = points.split("/");
        if (isnumber(temp[0]) && isnumber(temp[1]))
        {
            return (temp[0]/temp[1])*100;
        }
        else
        {
            return null;
        }

    }
}

function gradeclases()
{
    deletewarningmessages();
    let subjectpoints = document.getElementsByClassName("classes");
    for(let i =0; i < subjectpoints.length; i++)
    {
        if (getpoints(subjectpoints[i].value))
        {
            let points = getpoints(subjectpoints[i].value);
            if (points >= 0 && points < 100)
            {
                let grade = document.getElementById(subjectpoints[i].id+"Grade")
                grade.style.color="green";
                
                if(points>=90 && points<=100){grade.innerText = "You have A";}
                else if(points>=80 && points<90){grade.innerText = "You have B";}
                else if(points>=70 && points<80){grade.innerText = "You have C";}
                else if(points>=60 && points<70){grade.innerText = "You have D";}
                else if(points>=40 && points<60){grade.innerText = "You have E";}
                else {document.getElementById(subjectpoints[i].id+"Grade").innerText = "You have F";}
                
            }
            else
            {
                let warningmessage = document.getElementById(subjectpoints[i].id+"Grade")
                warningmessage.style.color="red";
                warningmessage.innerText = "Wrong percentage, enter number between 0 and 100!";
                
                break;
            }
        }
        else
        {
            let warningmessage = document.getElementById(subjectpoints[i].id+"Grade")
            warningmessage.style.color="red";
            warningmessage.innerText = "Wrong percentage, enter number between 0 and 100!";
            break;
        }
        

    }
    
}