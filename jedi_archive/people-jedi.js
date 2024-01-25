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

let removeMovies = ()=>
{
  let movies = localStorage.getItem("movies")
  for(let movie of movies.split(","))
  {
    localStorage.removeItem(movie)
  }
  localStorage.getItem("movies")
}

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



let createTablepeople = async (swlink) => {
  let link;
  let response;
  try{
     link = await fetch(swlink)
     response = await link.json()

     localStorage.setItem("nextpage",response.next)
     if(localStorage.getItem("current") == undefined)
     {
       localStorage.setItem("current",swlink)
     }
     else
     {
       let current = localStorage.getItem("current")
       localStorage.setItem("previouspage",current)
       localStorage.setItem("current",swlink)
     }
     
    let result = response.results
    // Create table
    let table = document.createElement("table")
    let head = table.createTHead();
    let body = table.createTBody();
    let header = head.insertRow(0)
    header.insertCell(0).innerText = "Name"
    header.insertCell(1).innerText = "Height"
    header.insertCell(2).innerText = "Mass"
    header.insertCell(3).innerText = "Gender"
    header.insertCell(4).innerText = "Birthyear"
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
  }
  catch(error){
    stopLogoLoader()
    console.log(error)
  }
}

document.getElementById("people").addEventListener("click", async () => {
  startLogoLoader()
  await createTablepeople("https://swapi.dev/api/people/")
  stopLogoLoader()
})
  

  //https://swapi.dev/api/vehicles
  //https://swapi.dev/api/people