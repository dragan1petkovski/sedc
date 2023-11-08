document.getElementById("addnote").addEventListener("click", addnote);

function getidnumber()
{
    if(localStorage.getItem("addnote")===null)
    {
        localStorage.setItem("addnote",1);
        return 1;
        
    }
    else
    {
        localStorage.setItem("addnote",Number(localStorage.getItem("addnote"))+1);
        return Number(localStorage.getItem("addnote"));
    }
}

function addnote()
{
    let subject = document.getElementById("subject");
    let description = document.getElementById("description");

    if (subject.value.length === 0)
    {
        console.log("No subject entered");
        reutrn;
    }
    else
    {
        idnumber = getidnumber();
        subjectid = "subject-"+idnumber.toString();
        descriptionid = "description-"+idnumber.toString();
        localStorage.setItem(subjectid,subject.value);
        localStorage.setItem(descriptionid,description.value);

        
    }
}