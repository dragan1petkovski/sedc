document.getElementById("hintbutton").addEventListener("click",displayhint)
document.getElementById("startnewgame").addEventListener("click",startnewgame)
startnewgame()


function chooseword()
{
    let randomnumber;
    randomnumber = parseInt(Math.random() * 10000 + Math.random()*50000)

    localStorage.setItem("currentword",localStorage.getItem(randomnumber%8))
}

function startnewgame()
{
    chooseword()
    let word = JSON.parse(localStorage.getItem("currentword"))

    document.getElementById("topic").innerHTML =`<p><strong>Topic:</strong> ${word.topic}</p>`
    document.getElementById("hint").innerHTML = '';

    let image = document.getElementById("hangman_image")
    image.src =`images/0.PNG`

    localStorage.removeItem("wrongletter")
    displayemptyspaces(word.word);
}


function displayhint()
{
    let word = JSON.parse(localStorage.getItem("currentword"))
    document.getElementById("hint").innerHTML =`<p><strong>Hint:</strong> ${word.hint}</p>`
}


function displayemptyspaces(word)
{
    let displayword = ''
    let playword = ''
    for(let i=0; i< word.length;i++)
    {

        if(i == word.indexOf(" "))
        {
            displayword = displayword + '&#8195;&#8195;'
            playword = playword + '&#8195;&#8195;'
        }
        else
        {
            displayword = displayword + "_ "
            playword = playword + ` ${word[i]}`

        }
        
    }
    localStorage.setItem("playword",playword)
    localStorage.setItem("displayword",displayword)
    document.getElementById("theword").innerHTML = displayword;
}

function findposition(word,letter)
{
    let output = [];
    for(let i=0;i<word.length;i++)
    {
        if(letter == word[i])
        {
            output.push(i)
        }
    }
    return output
}

function changeletter(displayword,position,letter)
{
    output = displayword.slice(0,position-1)+letter +displayword.slice(position)
    return output
}

function checkforwin()
{
    let word = localStorage.getItem("playword")
    let displayword = localStorage.getItem("displayword")
    if(word.replaceAll(" ",'') == displayword.replaceAll(" ",''))
    {
        confirm("Congratulations you win!!!!")
        startnewgame()
    }
}

function checkforloss()
{
    let wrongletter = localStorage.getItem("wrongletter")
    if (parseInt(wrongletter) === 6)
    {
        confirm("You have been hanged!!!!")
        startnewgame()
    }
}

function displaytheword()
{
    let word = localStorage.getItem("playword")
    let displayword = localStorage.getItem("displayword")
    let letter = localStorage.getItem("letter")
    let position = findposition(word,letter)
    if(position.length > 0)
    {
        for(let i=0; i<position.length; i++)
        {
            console.log(position[i])
            displayword = displayword.slice(0,position[i]-1)+letter +displayword.slice(position[i])
            // displayword = changeletter(displayword,position[i],letter)
            
        }
        localStorage.setItem("displayword",displayword)
        document.getElementById("theword").innerHTML = displayword;
        checkforwin()
    }
    else
    {
        if(localStorage.getItem("wrongletter") == null)
        {
            localStorage.setItem("wrongletter",1)
            let image = document.getElementById("hangman_image")
            image.src =`images/1.PNG`
        }
        else
        {
            let wrongletter = localStorage.getItem("wrongletter")
            let image = document.getElementById("hangman_image")
            let newwrongletter = parseInt(wrongletter)+1
            image.src = `images/${newwrongletter.toString()}.PNG`
            localStorage.setItem("wrongletter",newwrongletter)
            checkforloss()
        }
    }




}