let viceversaword = (word) => {
    let temp =[];
    for(let i =0 ;i<word.length; i++){
        temp[(word.length -1)- i] = word[i]
    }
    return temp.join('')
}

let getstring = () => {
    let string = document.getElementById("text").value
    let output_reverse_words =[]
    let output_reverse_sentence =[]
    let words = string.split(" ")
    for(let i =0; i<words.length; i++)
    {
        let reverseword = viceversaword(words[i])
        output_reverse_words.push(reverseword)
        output_reverse_sentence[(words.length-1)-i] =reverseword
    }
    document.getElementById("output_reverse_words").innerText =output_reverse_words.join(" ")
    document.getElementById("output_reverse_sentence").innerText = output_reverse_sentence.join(" ")
    
}

document.getElementById("viceversawords").addEventListener("click",()=>getstring())