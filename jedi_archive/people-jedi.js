import {createHeaderCell, searchTable, generalSortingNumbers, generalSortingStrings,pagination} from "./utilities.js"
import {startLogoLoader,stopLogoLoader} from "./next-previous.js"

let createSearchFunc = () => {

  let span = document.getElementById("search")
  span.innerHTML = ''
  span.innerHTML = ` <img src="anythingspecific.png">
  <span style="position: absolute; top:50%;left: 50%;transform: translate(-50%, -50%);" >
    <label for="searchinput">Anything specific?</label>
    <input type="text" id="searchinput" style="display:inline; background-color:transparent; box-shadow:none; border: 1px sold black">
    <button class="sortingbutton" id="searchbutton">&#128269;</button>
  </span>
`
  document.getElementById("searchbutton").addEventListener("click",() => {searchTable(document.getElementById("outputtable"),document.getElementById("searchinput"))})

}

let getMovieName = async (swlink) =>
{
  let link;
  let data;

  try{
    link = await fetch(swlink)
    data = await link.json()
    return data.title
  }
  catch(error){
    stopLogoLoader()
    console.log(error)
  }

}

let getMovies = async () =>
{
  let movies = localStorage.getItem("movies")
  if(movies.indexOf(",")>0)
  {
    movies = movies.split(",")
    for(let movielink of movies)
    {
      if (localStorage.getItem(movielink) === undefined || localStorage.getItem(movielink) === movielink)
      {
        let moviename = await getMovieName(movielink)
        localStorage.setItem(movielink,moviename)
      }
    }
  }
}

// let removeMovies = ()=>
// {
//   let movies = localStorage.getItem("movies")
//   for(let movie of movies.split(","))
//   {
//     localStorage.removeItem(movie)
//   }
//   localStorage.getItem("movies")
// }

let addMovieToList = (movie) =>
{
  if(localStorage.getItem("movies") == undefined)
  {
    localStorage.setItem("movies",movie)
  }
  else
  {
    let movies = localStorage.getItem("movies")
    if(movies.indexOf(",") > 0)
    {
      if(movies.split(',').indexOf(movie) <0)
      {
        movies += `,${movie}`
        localStorage.setItem("movies",movies)
      }
    }
    else
    {
      if(movies !== movie)
      {
        movies += `,${movie}`
        localStorage.setItem("movies",movies)
      }

    }
    
  }
}

let movieKey= (movie) =>
{
  if(localStorage.getItem(movie) == undefined)
  {
    localStorage.setItem(movie,`${movie}`)
  }
}


export let createTablepeople = async (swlink) => {
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

    createHeaderCell(header.insertCell(0),"Name",()=> generalSortingStrings("Name",0) )
    createHeaderCell(header.insertCell(1),"Height",()=> generalSortingNumbers("Height",1))
    createHeaderCell(header.insertCell(2),"Mass",()=> generalSortingNumbers("Mass",2))
    createHeaderCell(header.insertCell(3),"Gender",()=> generalSortingStrings("Gender",3))
    createHeaderCell(header.insertCell(4),"Birthyear",()=> generalSortingStrings("Birthyear",4))

    header.insertCell(5).innerText = "Movies"
    let i
    for(i=0; i< result.length; i++)
    {
      let row = body.insertRow(i)
      row.insertCell(0).innerText = result[i].name
      row.insertCell(1).innerText = result[i].height
      row.insertCell(2).innerText = result[i].mass
      row.insertCell(3).innerText = result[i].gender
      row.insertCell(4).innerText = result[i].birth_year
      for(let movie of result[i].films)
      {
       addMovieToList(movie)
       movieKey(movie)
      }
    }
    await getMovies()
    i=0
    for(let children of body.children)
    {
     let movielist = '' 
     for(let movie of result[i].films)
     {
      movielist += `${localStorage.getItem(movie)};`
      
     }
     children.innerHTML += `<td>${movielist}</td>`
     i++
    }
     document.getElementById("output").innerHTML = ''
     document.getElementById("output").append(table)
     createSearchFunc()

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

document.getElementById("people").addEventListener("click", async () => {
  startLogoLoader()

  localStorage.removeItem("previouspage")
  await createTablepeople("https://swapi.dev/api/people/")

  if(localStorage.getItem("totalPages") !== undefined)
  {
    localStorage.removeItem("totalPages")
  }

  stopLogoLoader()
})
  

  //https://swapi.dev/api/vehicles
  //https://swapi.dev/api/people