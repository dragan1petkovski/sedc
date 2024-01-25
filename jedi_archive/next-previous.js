
let startLogoLoader = () =>
{
  console.log("start loader")
  let image = document.getElementById("rotatinglogo")
  image.className = "rotate"
}

let stopLogoLoader = () =>
{
  console.log("stop loader")
  let image = document.getElementById("rotatinglogo")
  image.removeAttribute("class")
}

let nextpage = async ()=>
{
  let nextpage = localStorage.getItem("nextpage")
  if(nextpage.match("^https://swapi.dev/api/people/") != null)
  {
    startLogoLoader()
    await createTablepeople(nextpage)
    stopLogoLoader()
  }
  else
  {
    startLogoLoader()
    await createTableships(nextpage)
    stopLogoLoader()
  }
  
}

let previouspage =async  () =>
{
  let previouspage = localStorage.getItem("previouspage")
  if(previouspage.match("^https://swapi.dev/api/people/") != null)
  {

    startLogoLoader()
    await createTablepeople(previouspage)
    stopLogoLoader()
  }
  else
  {

    startLogoLoader()
    await createTableships(previouspage)
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