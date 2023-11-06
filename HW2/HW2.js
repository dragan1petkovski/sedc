document.getElementById("initfuction").addEventListener("click",initfuction);
document.getElementById("countdown").addEventListener("click", function(){ countdown( document.getElementById('t2input').value ); });
document.getElementById("TemperatureConverter").addEventListener("click",function() {TemperatureConverter(document.getElementById('t3input').value, document.getElementById('t3tm').value);});
document.getElementById("Counttohundred").addEventListener("click", Counttohundred);
document.getElementById("checkfordivision").addEventListener("click", function(){checkfordivision(document.getElementById('t5number1').value, document.getElementById('t5number2').value);});

//Task 1
let totalcoins = 0;

function coindestributions(numberofcoints, coinmap)
{
	if(coinmap.length > 0)
	{
		document.getElementById(coinmap[coinmap.length-1].toString()).innerText = (parseInt(numberofcoints/coinmap[coinmap.length-1])).toString();
		totalcoins = totalcoins + parseInt(numberofcoints/coinmap[coinmap.length-1]);
		let reminder = (numberofcoints % coinmap[coinmap.length-1]);
		coinmap.pop();
		coindestributions(reminder , coinmap )
	}

}


function initfuction()
{
	const coinmap = [1,5,10,20,50];
	totalcoins = 0;
	coindestributions(Number(document.getElementById("coininput").value),coinmap);
	document.getElementById("total").innerText = totalcoins.toString();

}



//Start of Task2
function countdown(number)
{
	for (let i=0; i<=number; i++)
	{
		console.log(i);
	}
}


//Start of Task3
function Addmessage(message,id)
{

	const parentelement = document.getElementById(id);
	while (parentelement.firstChild)
	{
		parentelement.removeChild(parentelement.firstChild);
	}
	const childelement = document.createElement("p");
	const childnode = document.createTextNode(message);
	childelement.appendChild(childnode);
	parentelement.appendChild(childelement);
}


function TemperatureConverter(value, measurement)
{
	if (measurement == "Celsius")
	{
		Addmessage((value.toString()+" degreese Celsius is "+ (value*9/5+32).toFixed(2).toString() +" degrees Fahrenheit"),"t3result");
	}
	else
	{
		Addmessage((value.toString()+" degreese Fahrenheit is "+ ((value-32)*5/9).toFixed(2).toString() +" degrees Celsius"),"t3result");
	}
}

//Start of Task4
function Counttohundred()
{
	flag = 0;
	do 
	{
		flag++;
		number = flag*5;
		
		console.log(number);
	}
	while(number < 100)

}

//start of Task5
function checkfordivision(number1,number2)
{
	if(number1%number2 == 0)
	{
		Addmessage((number1.toString()+" is divisable by "+number2.toString()),"t5result")
	}
	else
	{
		Addmessage((number1.toString()+" is NOT divisable by "+number2.toString()),"t5result")
	}
}