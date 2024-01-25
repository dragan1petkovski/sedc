let createTableships = async (swlink) => {
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
    header.insertCell(1).innerText = "Model"
    header.insertCell(2).innerText = "Manufacturer"
    header.insertCell(3).innerText = "Cost"
    header.insertCell(4).innerText = "Peoples Capacity"
    header.insertCell(5).innerText = "class"
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

  }
  catch{
    console.log("no intermec")
  }
}

document.getElementById("ship").addEventListener("click", async () => {
  startLogoLoader()
  await createTableships("https://swapi.dev/api/vehicles")
  stopLogoLoader()
});

  //https://swapi.dev/api/vehicles
  //https://swapi.dev/api/people