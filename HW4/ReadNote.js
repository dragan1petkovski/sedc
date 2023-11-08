
document.addEventListener("DOMContentLoaded",addNotetoSite);

function createnoteelement(subject, description)
{
    noteelement = `
    <div class="row border pb-2">
        <div class="col-4">
            <p>
                <strong>`+subject+`</strong>
            </p>
        </div>
        <div class="col-8">
            <p>
                `+description+`
            </p>
        </div>
    </div>
    `

    document.getElementById('notes').innerHTML = document.getElementById('notes').innerHTML + noteelement;
}

function addNotetoSite()
{
    numberofnotes = Number(localStorage.getItem("addnote"));
    
    while (numberofnotes > 0)
    {
        subjectid = "subject-"+numberofnotes.toString();
        descriptionid = "description-"+numberofnotes.toString();
        createnoteelement(localStorage.getItem(subjectid),localStorage.getItem(descriptionid));
        numberofnotes = numberofnotes - 1;
    }
}