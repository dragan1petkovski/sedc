import { toDeactiveAll,toActive,getBeers,removeBeersOut, searchBeers } from "./utilities.js"
import { beerbarpage,beersWorkareaHeader,randomBeerPage,beersWorkareaFooter, beersWorkareaBodyFromObj } from "./pagecontent.js"


let beerbar = () =>
{
    toDeactiveAll()
    toActive("beerbar")
    let workarea = document.getElementById("workarea")
    workarea.className = "m-3 p-3"
    workarea.innerHTML = beerbarpage

    removeBeersOut()
}

export let beers = async (page,pagination) =>
{
    toDeactiveAll()
    toActive("beers")
    localStorage.setItem("page",page)
    localStorage.setItem("pagination",pagination)
    let workarea = document.getElementById("workarea")
    workarea.className = "m-3 p-3 "
    workarea.innerHTML =''
    beersWorkareaHeader(workarea)
    beersWorkareaBodyFromObj(workarea,await getBeers(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${pagination}`))
    beersWorkareaFooter(workarea)

}

export let randombeer = async (singleBeerLink) =>
{
    toDeactiveAll()
    toActive("randombeer")

    removeBeersOut()


    let output = document.getElementById("workarea")
    output.className = "m-3 p-3 grid-randombeercontainer"
    output.innerHTML = ''
    output.innerHTML = randomBeerPage((await getBeers(singleBeerLink))[0])
}

document.getElementById("beerbar").addEventListener("click",beerbar)
document.getElementById("beers").addEventListener("click",() => beers(1,5))
document.getElementById("randombeer").addEventListener("click",() =>randombeer("https://api.punkapi.com/v2/beers/random"))
document.getElementById("searchbutton").addEventListener("click",searchBeers)