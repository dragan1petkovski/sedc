let getMovieName = async (swlink) =>
{
  let link;
  let data;
  try{
    link = await fetch(swlink)
    data = await link.json()
    return data.title
  }
  catch{
    console.log("No Intermec")
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
     for(let i = 0; i< result.length; i++)
     {
       let row = body.insertRow(i)
       row.insertCell(0).innerText = result[i].name
       row.insertCell(1).innerText = result[i].height
       row.insertCell(2).innerText = result[i].mass
       row.insertCell(3).innerText = result[i].gender
       row.insertCell(4).innerText = result[i].birth_year
       let cell = row.insertCell(5)
       let tempmovies =''
       for(let movie of result[i].films)
       {
          tempmovies += `${await getMovieName(movie)}, `
       }
       cell.innerText = tempmovies
     }
     document.getElementById("output").innerHTML = ''
     document.getElementById("output").append(table)
  }
  catch{
    console.log("no intermec")
  }
}

document.getElementById("people").addEventListener("click", () => {
  showLoader()
  createTablepeople("https://swapi.dev/api/people/")});

  //https://swapi.dev/api/vehicles
  //https://swapi.dev/api/people