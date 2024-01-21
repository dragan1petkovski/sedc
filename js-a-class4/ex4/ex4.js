let checknumber = () => {
    let number = parseInt(document.getElementById("number").value)
    if(isNaN(number))
    {
        confirm(`Value is not a number`)
    }
    else 
    {
        if(number <= 500 && number >= 0)
        {
            return parseInt(number)
        }
        else
        {
            confirm("number can less or equal to 500 and more or equal of zero")
            throw new Error("number can less or equal to 500 and more or equal of zero")
        }
    }
}

let factorial = (number) => {
    if(number>0)
    {
        return number*factorial(number-1)
    }
    else {
        return 1
    }
}

let output = (inputnumber) => {
    let output = document.getElementById("output")
    try{ 
        let number = checknumber(inputnumber)
        output.innerHTML = ''
        output.innerHTML = `${number}! = ${factorial(number)}`
        document.getElementById("number").value = ''
    }
    catch{
        output.innerHTML = ''
        output.innerHTML = "Wrong number"
    }

}

document.getElementById("calculatefactorial").addEventListener("click",()=>output(document.getElementById("number")))