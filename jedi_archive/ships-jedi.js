import {startLogoLoader,stopLogoLoader} from "./next-previous.js"
import { createHeaderCell, generalSortingNumbers, generalSortingStrings,pagination } from "./utilities.js";

export let createTableships = async (swlink) => {
  let response;
  try{
    response = await fetch(swlink).then((response) => response.json()).catch((error) => console.error("Server Failed"+error))
     localStorage.setItem("nextpage",response.next)
     localStorage.setItem("current",swlink)
     
    let result = response.results
    // Create table
    let table = document.createElement("table")
    table.setAttribute("id","outputtable")
    let head = table.createTHead();
    let body = table.createTBody();
    let header = head.insertRow(0)

    createHeaderCell(header.insertCell(0),"Name",()=> generalSortingStrings("Name",0))
    createHeaderCell(header.insertCell(1),"Model",()=> generalSortingStrings("Model",1))
    createHeaderCell(header.insertCell(2),"Manufacturer",()=> generalSortingStrings("Manufacturer",2))
    createHeaderCell(header.insertCell(3),"Cost",()=> generalSortingNumbers("Cost",3))
    createHeaderCell(header.insertCell(4),"PeopleCapacity",()=> generalSortingNumbers("PeopleCapacity",4))
    createHeaderCell(header.insertCell(5),"Class",()=> generalSortingStrings("Class",5))

    for(let i = 0; i< result.length; i++)
    {
      let row = body.insertRow(i)
      row.insertCell(0).innerText = result[i].name
      row.insertCell(1).innerText = result[i].model
      row.insertCell(2).innerText = result[i].manufacturer
      row.insertCell(3).innerText = result[i].cost_in_credits
      row.insertCell(4).innerText = result[i].passengers
      row.insertCell(5).innerText = result[i].vehicle_class

    }
    document.getElementById("output").innerHTML = ''
    document.getElementById("output").append(table)

    let pagenumber = localStorage.getItem("previouspage")
    if(pagenumber == undefined)
    {
      pagination(Math.ceil(parseInt(response.count)/parseInt(response.results.length)),1)    
    }
    else
    {
      if(pagenumber === '')
      {
        pagination(Math.ceil(parseInt(response.count)/parseInt(response.results.length)),1) 
      }
      else if(pagenumber.split(",").length>0)
      {
         pagination(Math.ceil(parseInt(response.count)/parseInt(response.results.length)),parseInt(pagenumber.split(",").length)+1) 
      }
    }
    

  }
  catch{
    console.log("no intermec")
  }
}

document.getElementById("ship").addEventListener("click", async () => {
  let span = document.getElementById("search")
  span.innerHTML = ''
  startLogoLoader()
  localStorage.removeItem("previouspage")
  await createTableships("https://swapi.dev/api/vehicles")
  stopLogoLoader()
});

  //https://swapi.dev/api/vehicles
  //https://swapi.dev/api/people