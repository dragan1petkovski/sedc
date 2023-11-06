document.getElementById("multipication").addEventListener("click",multipication);

function multipication()
{
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	var result = 0;
	for (let i=0; i< num1; i++)
	{
		result = result+num2;
	}
	console.log(result);
	document.getElementById("multiplication_result").innerText = String(result);
}