let countvowels = (text) => {
    let counter = 0;
    for(let letter of text)
    {
        if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
        {
            counter++
        }
    }
    return counter
}

let  displaynumberofvowels = (number)=>{
    document.getElementById("output").innerText = `Number of vowels in the string is ${number}`
}

let getString = ()=>document.getElementById("text").value

document.getElementById("countvowels").addEventListener("click",()=>displaynumberofvowels(countvowels(getString())))