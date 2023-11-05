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
		console.log(items[i]);
		console.log("*");
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
	var grades = document.getElementsByClassName("Grade");
	var total = 0;
	//console.log(grades);
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
	document.getElementById("result").innerText = (total/4);
}

function ClearValues()
{
	
	ClearErrors(document.getElementsByClassName("warning-message"));
	ClearValue(document.getElementsByClassName("Grade"));
	document.getElementById("result").innerText='';
}