document.getElementById("createtable").addEventListener("click",createtable);

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

function createcolumns(numberofcolumns,tag,cellsize)
{
    let column='';
    for (let i=0;i<numberofcolumns; i++)
    {
        column = column + `<${tag} style="border: 1px; border-style: solid; border-color: black; width:${cellsize}px; height:${cellsize}px"></${tag}>`
    }
    return column;
}

function createtableelement(numberofcolumns,numberofrows,cellsize)
{
    let table = '<table style="border: 1px; border-style: solid; border-color: black">';
    table= table+ '<thead style="border: 1px; border-style: solid; border-color: black">'+createcolumns(numberofcolumns,"th",cellsize)+"</thead>"
    table = table+"<tbody>"
    for(let i=1; i<numberofrows ; i++)
    {
        console.log(i)
        table = table+ '<tr style="border: 1px; border-style: solid; border-color: black">'+createcolumns(numberofcolumns,"td",cellsize)+"</tr>"
        
    }
    table = table+"</tbody>"
    table = table+"</table>";
    return table;
}

function createtable()
{
    let numberofcolumns = document.getElementById("numberofcolumns");
    let numberofrows = document.getElementById("numberofrows");
    let cellsize = document.getElementById("cellsize");
    if (isnumber(numberofcolumns.value) && isnumber(numberofrows.value) && isnumber(cellsize.value))
    {
        
        document.getElementById("table").innerHTML = createtableelement(parseInt(numberofcolumns.value),parseInt(numberofrows.value),parseInt(cellsize.value));
    }
    else
    {
        confirm("Wrong table size, enter intergers");
    }
}