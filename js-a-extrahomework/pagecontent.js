
import {beers,randombeer} from "./beerbar.js"
import {sortByParameter,removeSpecialCharacter} from "./sorting.js"

export const beerbarpage = `
<h1 class="h1">
    Hello, this is beer world!
</h1>
<p>
    This is a simple beer page, you can get all the information for beers here
</p>
<hr>
<div class="d-flex justify-content-center">
    <img src="beers.PNG" >
</div>
`

let imgElement = (url) =>
{
    if(typeof(url) == 'string' && url.match("^https?://"))
    {
        console.log("tuka sum")
        let img = document.createElement("img")
        img.src = url
        img.style.width = "250px"
        img.style.height = "250px"
        return img
    }
    return false
}

let pElement = (message) =>
{
    let p = document.createElement("p")
    p.innerHTML = message
    return p
}

let previousPage = () =>
{
    let page = localStorage.getItem("page")
    let pagination = localStorage.getItem("pagination")
    if(page != undefined)
    {
        if(parseInt(page)>1)
        {
            localStorage.setItem("page",parseInt(page)-1)
            if(pagination != undefined)
            {
                beers(parseInt(page)-1,parseInt(pagination))
            }
            else
            {
                beers(parseInt(page)-1,5)
            }
        }
    }

}

let nextPage = () =>
{
    let page = localStorage.getItem("page")
    let pagination = localStorage.getItem("pagination")
    if(page != null)
    {
        if(parseInt(page)>0)
        {
            localStorage.setItem("page",parseInt(page)+1)
            if(pagination != null)
            {
                beers(parseInt(page)+1,parseInt(pagination))
            }
            else
            {
                if(pagination != null)
                {
                    beers(parseInt(page)+1,pagination)
                }
                else
                {
                    beers(parseInt(page)+1,5)
                }
                
            }
        }
    }
    else
    {
        localStorage.setItem("page","2")
        page = 1
        if(pagination != null)
        {
            beers(parseInt(page)-1,pagination)
        }
        else
        {
            beers(parseInt(page)+1,5)
        }

    }
}


export let beersWorkareaFooter = (workarea) =>
{
    let divfooter = document.createElement("div")
    divfooter.id = "workareafooter"
    divfooter.className="grid-container"
    workarea.appendChild(divfooter)
    let directions = [{name:"Next",listener: nextPage},{name:"Previous",listener: previousPage}]
    for(let i=0;i<5;i++)
    {
        let griditem = document.createElement("div")
        griditem.className = "grid-item"
        if(i%2 === 1)
        {
            let button = document.createElement("button")
            button.className = "form-control btn btn-secondary"
            let btnObj = directions.pop()
            button.innerText = btnObj.name
            button.addEventListener("click",btnObj.listener)
            griditem.appendChild(button)
        }
        divfooter.appendChild(griditem)
    }
}


let createDropDownMenu = (...options) =>
{
    let select = document.createElement("select")
    select.className = "form-control btn btn-secondary"
    for(let optionValue of options)
    {
        if(isNaN(optionValue))
        {
            let option = document.createElement("option")
            option.innerHTML = optionValue
            option.value = optionValue
            option.id = removeSpecialCharacter(optionValue,"&#11107;");
            
            if(optionValue.indexOf("&#11107;") > -1 || optionValue.indexOf("&#11105;") > -1)
            {
                option.addEventListener("click",() => sortByParameter(option.id)) //Process the string before put it in parameter
            }
            select.appendChild(option)
        }
        else
        {
            let option = document.createElement("option")
            option.innerText = `Size ${optionValue}`
            option.value = optionValue
            option.id = optionValue
            option.addEventListener("click",()=>beers(1,optionValue))
            select.appendChild(option)
        }
        
    }
    return select
}

//Arrows for sorting &#11107; -> Point down #### &#11105; -> Point Up

export let beersWorkareaHeader = (workarea) =>
{
    let divheader = document.createElement("div")
    divheader.id = "workareaheader"
    divheader.className="grid-container"
    workarea.appendChild(divheader)
    let dropDowns = [createDropDownMenu("Sort by","Name &#11107;","Alcohol &#11107;","Bitterness &#11107;","Production Date &#11107;"),createDropDownMenu("Page Size",5,10,20)]
    for(let i=0;i<5;i++)
    {
        let griditem = document.createElement("div")
        griditem.className = "grid-item"
        if(i%2 === 1)
        {
            griditem.appendChild(dropDowns.pop())
        }
        divheader.appendChild(griditem)
    }
}

export let beersWorkareaBodyFromObj = (workarea,beers) =>
{
    let divbody = document.getElementById("workareabody")
    if(divbody === null)
    {
        divbody = document.createElement("div")
        divbody.id = "workareabody"
        divbody.className="grid-container"
        workarea.appendChild(divbody)
    }
    else
    {
        divbody.innerHTML = ''
    }
    for(let beer of beers)
    {
        let griditem = document.createElement("div")
        griditem.className = "grid-item"
        griditem.id = beer.id
        griditem.setAttribute("Name",beer.name)
        griditem.setAttribute("Alcohol",beer.abv)
        griditem.setAttribute("Bitterness",beer.ibu)
        griditem.setAttribute("ProductionDate",beer.first_brewed)
        griditem.setAttribute("beer","true")

        griditem.innerHTML = 
        `${beer.image_url !== null ? `<img src="${beer.image_url}" style="width:250px;height:250px">`: ''}
        <p><strong>${beer.name}</strong></p>
        <p>${beer.description}</p>
        `
        let moreDetailsBtn = document.createElement("button")
        moreDetailsBtn.id = `btn${beer.id}`
        moreDetailsBtn.addEventListener("click",async ()=>randombeer(`https://api.punkapi.com/v2/beers/${beer.id}`))
        moreDetailsBtn.innerText = "More Details"
        moreDetailsBtn.className = "form-control btn btn-primary"
        griditem.appendChild(moreDetailsBtn)

        divbody.appendChild(griditem)
    }
}

export let beersWorkareaBodyFromDOM = (workarea,beers) =>
{
    let divbody = document.getElementById("workareabody")
    if(divbody === null)
    {
        divbody = document.createElement("div")
        divbody.id = "workareabody"
        divbody.className="grid-container"
        workarea.appendChild(divbody)
    }
    else
    {
        divbody.innerHTML = ''
    }
    for(let beer of beers)
    {
        let griditem = document.createElement("div")
        griditem.className = "grid-item"
        griditem.id = beer.getAttribute("id")
        griditem.setAttribute("Name",beer.getAttribute("name"))
        griditem.setAttribute("Alcohol",beer.getAttribute("alcohol"))
        griditem.setAttribute("Bitterness",beer.getAttribute("bitterness"))
        griditem.setAttribute("ProductionDate",beer.getAttribute("productiondate"))
        griditem.setAttribute("beer","true")
        
        if(imgElement(beer.children[0].src))
        {
            griditem.appendChild(imgElement(beer.children[0].src))
        }
        
        griditem.appendChild(pElement(`<strong>${beer.children[1].innerText}</strong>`))
        griditem.appendChild(pElement(beer.children[2].innerText))


        let moreDetailsBtn = document.createElement("button")
        moreDetailsBtn.id = `btn${beer.getAttribute("id")}`
        moreDetailsBtn.addEventListener("click",async ()=>randombeer(`https://api.punkapi.com/v2/beers/${beer.getAttribute("id")}`))
        moreDetailsBtn.innerText = "More Details"
        moreDetailsBtn.className = "form-control btn btn-primary"
        griditem.appendChild(moreDetailsBtn)

        divbody.appendChild(griditem)
    }
}


let foodPairing = (foodlist) =>
{
    let output = '';
    for(let food of foodlist)
    {
        output += `<tr><td style="border-bottom: 1px solid gray">${food}</td></tr>\n`
    }
    return output
}

export let randomBeerPage = (beer) =>
{

    let output = `
<div class="row p-3">
    <div class="col-6 p-3 d-flex justify-content-end">
        ${beer.image_url !== null ? `<img src=${beer.image_url} style="width:200px;heigth: 400px">` : ''}
    </div>
    <div class="col-6 bg-white" style="border: 1px solid gray;border-radius:10px">
        <div class="row  p-3 bg-secondary" style="border-bottom: 1px solid gray">
            <p><strong>${beer.name}</strong> "${beer.tagline}"</p>
        </div>
        <div class="row p-3">
            <p>${beer.description}</p>
            <br>
            <p>Brewed: "${beer.first_brewed}"<br>
            Alcohol: ${beer.abv}%<br>
            Bitternes: ${beer.ibu} IBU</p>
            <p class="p-0 m-0" style="font-size:2em">
                <strong>Food pairing</strong>
            </p>
            <table style="border:1px solid gray; border-radius:20px">
                ${foodPairing(beer.food_pairing)}
            </table>
        </div>
    </div>
</div>
`
    return output
}
