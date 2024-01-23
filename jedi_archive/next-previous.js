let showLoader = () =>
{
  let loader = document.createElement("div")
  loader.className = "loader"
  document.getElementById("output").innerHTML = ''
  document.getElementById("output").append(loader)
}


let nextpage = ()=>
{
  let nextpage = localStorage.getItem("nextpage")
  if(nextpage.match("^https://swapi.dev/api/people/") != null)
  {
    showLoader()
    createTablepeople(nextpage)
  }
  else
  {
    showLoader()
    createTableships(nextpage)
  }
  
}

let previouspage = () =>
{
  let previouspage = localStorage.getItem("previouspage")
  if(previouspage.match("^https://swapi.dev/api/people/") != null)
  {
    showLoader()
    createTablepeople(previouspage)
  }
  else
  {
    showLoader()
    createTableships(previouspage)
  }
  
}


document.getElementById("nextpage").addEventListener("click",()=>{nextpage()})
document.getElementById("previouspage").addEventListener("click",()=>{previouspage()})
  //https://swapi.dev/api/vehicles
  //https://swapi.dev/api/people