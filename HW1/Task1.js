document.getElementById("AverageGrade").addEventListener("click",AverageGrade);
document.getElementById("ClearValues").addEventListener("click",ClearValues);

function CheckGrade(grade)
{
	if (grade < 6 && grade > 0)
	{
		return true;
	}
	else 
	{
		return false;
	}
}

function ClearErrors(items)
{
	for(let i=0; i< items.length; i++)
	{
		items[i].innerText='';
	}
}

function ClearValue(items)
{
	for(let i=0; i< items.length; i++)
	{
		items[i].value='';
	}
}

function AverageGrade()
{
	let grades = document.getElementsByClassName("Grade");
	let total = 0;
	let average = 0;
	for (let i=0; i < grades.length; i++)
	{
		if (CheckGrade(grades[i].value))
		{
			total = total+Number(grades[i].value);
		}
		else
		{
			ClearErrors(document.getElementsByClassName("warning-message"));
			document.getElementById(i).innerText = "You enter wrong grade";
			console.error("You enter wrong grade");
			return 0;
		}
	}
	ClearErrors(document.getElementsByClassName("warning-message"));
	average = total/grades.length;
	document.getElementById("result").innerText = (average);
	if(average > 3 && average <= 5)
	{
		document.getElementById("status").innerText = "PASS";
	}
	else if (average >= 1 && average <=3 )
	{
		document.getElementById("status").innerText = "FAILED";
	}
}

function ClearValues()
{
	
	ClearErrors(document.getElementsByClassName("warning-message"));
	ClearValue(document.getElementsByClassName("Grade"));
	document.getElementById("result").innerText='';
}