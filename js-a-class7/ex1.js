//Gender filter
let getGender = (gender,data) => {
    if (Array.isArray(data))
    {
        let tempdata = data.map((item) => item)
        tempdata = tempdata.filter((item) => item.gender === gender).map((item)=>item)
        return tempdata
    }
}

//location filter
let getLocation = (city,data) => {
    if (Array.isArray(data))
    {
        let tempdata = data.map((item) => item)
        tempdata = tempdata.filter((item) => item.city === city).map((item)=>item)
        return tempdata
    }
}

//Age filter
let getAgeFrom = (from,data) =>
{
    if (Array.isArray(data))
    {
        let tempdata = data.map((item) => item)
        return tempdata.filter((item) => item.age > from ).map((item) => item);
    }
}

let getAgeTo = (to,data) =>
{
    if (Array.isArray(data))
    {
        let tempdata = data.map((item) => item)
        return tempdata.filter((item) => item.age < to ).map((item) => item);
    }
}

let getAgeEqual = (year,data) =>
{
    if (Array.isArray(data))
    {
        let tempdata = data.map((item) => item)
        return tempdata.filter((item) => item.age === year ).map((item) => item);
    }
}

//Grade filter

let getAverageGradeBelow = (grade,data) =>
{
    if (Array.isArray(data))
    {
        let tempdata = data.map((item) => item)
        return tempdata.filter((item) => item.averageGrade < grade ).map((item) => item);
    }
}

let getAverageGradeAbove = (grade,data) =>
{
    if (Array.isArray(data))
    {
        let tempdata = data.map((item) => item)
        return tempdata.filter((item) => item.averageGrade > grade ).map((item) => item);
    }
}

let getAverageGradeEqual = (grade,data) =>
{
    if (Array.isArray(data))
    {
        let tempdata = data.map((item) => item)
        return tempdata.filter((item) => item.averageGrade === grade ).map((item) => item);
    }
}

//Email filter
let getEmail = (email,data) =>
{
    if (Array.isArray(data))
    {
        let tempdata = data.map((item)=>item)
        return tempdata.filter((item)=> item.email.includes(email))
    }
}


const link ="https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"


//1. processData([link],[getAverageGradeAbove],[3])
//2. processData([link],[getGender,getAverageGradeEqual],["Female",5])
//3. processData([link],[getGender,getAgeFrom,getLocation],["Male",18,"Skopje"])
//4. processData([link],[getGender,getAgeFrom,getSpecificData],["Female",24,"averageGrade"])
//5. processData([link],[getGender,itemStartsWith],["Male",['firstName',"b"]])
//6. processData([link],[getGender,getAgeFrom,getAgeTo,orderData],["Female",20,30,["firstName","asc"]])
//7. processData([link],[getAgeFrom,orderData],[40,["firstName","decs"]])
//8. processData([link],[getEmail,getNumberOfItems],["google"])
//9. processData([link],[getGender,getLocation,averageData],["Female","Skopje","age"])