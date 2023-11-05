//TO DO find current id of the parent element
//TO DO 
function addlistutilities(id)
{
    const htmlcode = `<div class='row'>
    <div class='col-6'>`+id.toString()+`</div>
    <div class='col-2'>
        <select name='type of list' class='form-control' id='type_`+id+`'>
            <option value='ol'>Ordered list</option>
            <option value='ul'>Unordered list</option>
            <option value='dl'>Description list</option>
        </select>
    </div>
    <div class='col-2'>
        <button class='btn btn-primary' onclick='Createlist(&#39type_`+id+`&#39,&#39`+id+`&#39)'>create sublist</button>
    </div>
    <div class='col-2'>
        <button class='btn btn-primary' onclick='createchilditem(&#39`+id+`&#39)'>create childitem</button>
    </div>
    </div>`
    return htmlcode;
}


function addorderlist(divid)
{
    const parnetelement = document.getElementById(divid);
    const id = parnetelement.id+'-ol-'+parnetelement.childElementCount.toString();
    const ol = '<ol id='+id+'>'+addlistutilities(id)+'</ol>';
    parnetelement.innerHTML = parnetelement.innerHTML + ol;

}
function addunorderedlist(divid)
{
    const parnetelement = document.getElementById(divid);
    const id = parnetelement.id+'-ul-'+parnetelement.childElementCount.toString();
    const ul = '<ul id='+id+'>'+addlistutilities(id)+'</ul>';
    parnetelement.innerHTML = parnetelement.innerHTML + ul;
}
function adddescriptionlist(divid)
{
    const parnetelement = document.getElementById(divid);
    const id = parnetelement.id+'-dl-'+parnetelement.childElementCount.toString();
    const dl = '<dl id='+id+'>'+addlistutilities(id)+'</dl>';
    parnetelement.innerHTML = parnetelement.innerHTML + dl;
}   
function createchilditem(divid)
{
    const parentelement = document.getElementById(divid);
    if (parentelement.tagName == "OL" || parentelement.tagName == "UL")
    {
        const litem = document.createElement("li");
        litem.innerText = "childitem-"+divid;
        parentelement.appendChild(litem);
    }
    else if (parentelement.tagName == "DL")
    {
        const itemdt = document.createElement("dt");
        itemdt.innerText = "childitem-term-"+divid;
        const itemdd = document.createElement("dd");
        itemdd.innerText = "childitem-description-"+divid;
        parentelement.appendChild(itemdt);
        parentelement.appendChild(itemdd);
    }
}
function Createlist(typeofrootlist,divid){
    choise = document.getElementById(typeofrootlist).value;
    switch (choise)
    {
        case 'ol':
            addorderlist(divid);
            break;
        case 'ul':
            addunorderedlist(divid);
            break;
        case 'dl':
            adddescriptionlist(divid);
            break;
    }
}