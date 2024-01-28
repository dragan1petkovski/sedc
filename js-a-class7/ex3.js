const link = ["https://dummyjson.com/recipes","recipes"]


let getLunchandDinners = (data) =>
{
    let tempdata = data.map((item)=>item)
    return tempdata.filter((item)=> item.mealType.find((item)=>item === "Lunch"))
                    .filter((item)=> item.mealType.find((item)=>item === "Dinner"))
}
let getReviesAbove = (value, data) =>
{
    let tempdata = data.map((item)=>item)
    return tempdata.filter((item) => item.reviewCount > value)
}


let filterItemByValue = ([key,value],data) =>
{
    let tempdata = data.map((item)=>item)
    return tempdata.filter((item)=>{
        if(Array.isArray(item[key]))
        {
            return item[key].find((item) => item === value)
        }
        else
        {
            return item[key] === value
        }
        
    })
}

//1. processData(link,[filterItemByValue],[["mealType","Dessert"]])
//2. processData(link,[getReviesAbove,getSpecificData],[30,"name"])
//3. processData(link,[filterItemByValue],[["ingredients","Cinnamon"]])
//4. processData(link,[getLunchandDinners])
//5. processData(link,[filterItemByValue,getSpecificData],[["name","Mango Salsa Chicken"],"ingredients"])
//6. processData(link,[filterItemByValue,averageData],[["cuisine","American"],"caloriesPerServing"])
//7. processData(link,[averageData],["cookTimeMinutes"])
//8. processData(link,[orderData,getFirstElement],[["reviewCount","asc"]])