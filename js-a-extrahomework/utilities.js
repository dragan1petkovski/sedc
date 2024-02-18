import {beersWorkareaHeader,beersWorkareaBodyFromObj,beersWorkareaFooter } from "./pagecontent.js"

export let toActive = (id) =>
{
    let active = document.getElementById(id)
    active.className = "nav-link active"
}

export let toDeactiveAll = () =>
{
    let items = document.getElementsByClassName("nav-link")
    for(let item of items)
    {
        item.className = "nav-link"
    }
}

export let getBeers = async (link) =>await fetch(link).then((response) => {
    if(response.status == 404)
    {
        console.error("This page does not exist")
    }
    else
    {
        return response.json()
    }
    
}).catch((error) => console.error(error))

export let removeBeersOut = () => {
    let beersoutput = document.getElementById("beersoutput")
    
    if(beersoutput !== null)
    {
        let body = document.getElementById("body")
        body.removeChild(beersoutput)
    }
}

export let searchBeers =  async () => {
    let searchInput = document.getElementById("searchinput")
    let name = searchInput.value
    name = name.split(" ")
    name = name.join("_")
    
    let workarea = document.getElementById("workarea")
    workarea.className = "m-3 p-3 "
    workarea.innerHTML =''
    beersWorkareaHeader(workarea)
    beersWorkareaBodyFromObj(workarea,await getBeers(`https://api.punkapi.com/v2/beers?beer_name=${name}`))
    beersWorkareaFooter(workarea)

}