import {createHeaderCell, pagination,generalSortingNumbers,generalSortingStrings} from "./utilities.js"
import {startLogoLoader,stopLogoLoader} from "./next-previous.js"


export let createTablePlanets = async (swlink) => {
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

   
       createHeaderCell(header.insertCell(0),"Name",() => generalSortingStrings("Name",0))
       createHeaderCell(header.insertCell(1),"RotationPeriod",() => generalSortingNumbers("RotationPeriod",1))
       createHeaderCell(header.insertCell(2),"OrbitalPeriod",() => generalSortingNumbers("OrbitalPeriod",2))
       createHeaderCell(header.insertCell(3),"Climate",() => generalSortingStrings("Climate",3))
       createHeaderCell(header.insertCell(4),"Gravity",() => generalSortingStrings("Gravity",4))
       createHeaderCell(header.insertCell(5),"Terrain",()=> generalSortingStrings("Terrain",5))
       createHeaderCell(header.insertCell(6),"Population",() => generalSortingNumbers("Population",6))
       let i
       for(i=0; i< result.length; i++)
       {
         let row = body.insertRow(i)
         row.insertCell(0).innerText = result[i].name
         row.insertCell(1).innerText = result[i].rotation_period
         row.insertCell(2).innerText = result[i].orbital_period
         row.insertCell(3).innerText = result[i].climate
         row.insertCell(4).innerText = result[i].gravity
         row.insertCell(5).innerText = result[i].terrain
         row.insertCell(6).innerText = result[i].population

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
    catch(error){
      stopLogoLoader()
      console.log(error)
    }
  }

document.getElementById("planets").addEventListener("click",async ()=>
{
  let span = document.getElementById("search")
  span.innerHTML = ''
  startLogoLoader()
  localStorage.removeItem("previouspage")
  await createTablePlanets("https://swapi.dev/api/planets")  
  stopLogoLoader()
})