const link = ["https://dummyjson.com/products","products"]

let getCategory = (key,data) =>
{
    let tempdata = data.map((item)=>item)
    return tempdata.filter((item)=>item.category===key)
}

let getRatingAbove =(value, data) =>
{
    let tempdata = data.map((item)=>item)
    return tempdata.filter((item)=> item.rating > value)
}

let getBrand = (value,data) =>
{
    let tempdata = data.map((item)=>item)
    return tempdata.filter((item)=>item.brand === value)
}

//1. processData(link,[getCategory,orderData],["laptops",["price","asc"]])
//2. processData(link,[getFirstElement],[])
//3. processData(link,[getCategory,findIndexOfFirstElement],["smartphones",["brand","Samsung"]])
//4. processData(link,[findIndexOfFirstElement],[["brand","Sony"]])
//5. processData(link,[getCategory,orderData,getSpecificData,getFirstElement],["skincare",["rating","decs"],"title"])
//6. processData(link,[getRatingAbove,averageData],[4.5,"discountPercentage"])
//7. processData(link,[orderData,getFirstElement],[["price","decs"]])
//8. processData(link,[getCategory,getBrand,averageData],["smartphones","Apple","price"])
//9. processData(link,[orderData,getFirstElement],[["price","asc"]])