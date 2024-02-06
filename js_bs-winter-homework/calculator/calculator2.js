let sum = (number1,number2) => number1+number2
let subtraction = (number1,number2) => number1-number2
let multiplication = (number1,number2) => number1*number2
let division = (number1,number2) =>
{
    if(number2 ===0)
    {
        console.log("devision by zero")
        return null
    }
    return number1/number2
}

let mathOperator = (sign) =>
{
    switch(sign)
    {
        case "+":
            return sum
        case "-":
            return subtraction
        case "*":
            return multiplication
        case "/":
            return division
    }
}