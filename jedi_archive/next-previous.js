import {createTablepeople} from "./people-jedi.js"
import {createTablePlanets} from "./planets.js"
import { createTableships } from "./ships-jedi.js"
import { pagination } from "./utilities.js"

export let startLogoLoader = () =>
{
  let image = document.getElementById("rotatinglogo")
  image.className = "rotate"
}

export let stopLogoLoader = () =>
{
  let image = document.getElementById("rotatinglogo")
  image.removeAttribute("class")
}

let nextpage = async ()=>
{
  let nextpage = localStorage.getItem("nextpage")
  if(nextpage.match("^https://swapi.dev/api/people/") != null)
  {
    startLogoLoader()

    if(localStorage.getItem("previouspage") == undefined)
    {
      localStorage.setItem("previouspage",localStorage.getItem("current"))
    }
    else
    {
      localStorage.setItem("previouspage",`${localStorage.getItem("previouspage")},${localStorage.getItem("current")}`)
    }

    await createTablepeople(nextpage)
    
    stopLogoLoader()
  }
  else if(nextpage.match("^https://swapi.dev/api/vehicles"))
  {
    startLogoLoader()
    console.log(nextpage)
    if(localStorage.getItem("previouspage") == undefined)
    {
      localStorage.setItem("previouspage",localStorage.getItem("current"))
    }
    else
    {
      localStorage.setItem("previouspage",`${localStorage.getItem("previouspage")},${localStorage.getItem("current")}`)
    }

    await createTableships(nextpage)
    stopLogoLoader()
  }
  else
  {
    startLogoLoader()

    if(localStorage.getItem("previouspage") == undefined)
    {
      localStorage.setItem("previouspage",localStorage.getItem("current"))
    }
    else
    {
      localStorage.setItem("previouspage",`${localStorage.getItem("previouspage")},${localStorage.getItem("current")}`)
    }

    await createTablePlanets(nextpage)
    stopLogoLoader()
  }
}

let previouspage =async  () =>
{
  let previouspages = localStorage.getItem("previouspage")
  previouspages = previouspages.split(",")
  let lastone = previouspages.pop()
  if(previouspages.length === 0)
  {
    localStorage.removeItem("previouspage")
  }
  if(lastone.match("^https://swapi.dev/api/people/") != null)
  {
    startLogoLoader()
    localStorage.setItem("previouspage",previouspages.join(","))
    await createTablepeople(lastone)
    
    stopLogoLoader()
  }
  else if(lastone.match("^https://swapi.dev/api/vehicles"))
  {

    startLogoLoader()
    localStorage.setItem("previouspage",previouspages.join(","))
    await createTableships(lastone)
    stopLogoLoader()
  }
  else
  {
    startLogoLoader()
    localStorage.setItem("previouspage",previouspages.join(","))
    await createTablePlanets(lastone)
    stopLogoLoader()
  }
  
}


document.getElementById("nextpage").addEventListener("click",async()=>{
  startLogoLoader()
  await nextpage()
  stopLogoLoader()
})
document.getElementById("previouspage").addEventListener("click",async()=>{
  startLogoLoader()
  await previouspage()
  stopLogoLoader()
})
  //https://swapi.dev/api/vehicles
  //https://swapi.dev/api/people