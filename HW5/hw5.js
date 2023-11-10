document.getElementById("kocka").addEventListener("click",rolldice);
document.getElementById("newgame").addEventListener("click",newgame);

function swapnode()
{
    
}

function newgame()
{
    localStorage.setItem("newgame",0);
    document.getElementById("broj").innerHTML = '';
    document.getElementById("player").setAttribute("Name","RedPlayer");
    document.getElementById("player").innerText =  "на ред е: RedPlayer";
}

function rolldice()
{
    let dice = (Math.floor((Math.random()*10000000)*(Math.random()+10000000))%7);
    if (dice === 0)
    {
        dice=dice+1;
    }
    document.getElementById("broj").innerHTML = "<img src="+dice+".png />"
    
    playerturn();
    
}

function playerturn()
{
    let turn = Number(localStorage.getItem("newgame"))%4

    switch (turn)
    {
        case 0:
            document.getElementById("player").setAttribute("Name","RedPlayer");
            document.getElementById("player").innerText =  "на ред е: RedPlayer";
            break;
        case 1:
            document.getElementById("player").setAttribute("Name","BluePlayer");
            document.getElementById("player").innerText =  "на ред е: BluePlayer";
            break;
        case 2:
            document.getElementById("player").setAttribute("Name","GreenPlayer");
            document.getElementById("player").innerText =  "на ред е: GreenPlayer";
            break;
        case 3:
            document.getElementById("player").setAttribute("Name","YellowPlayer");
            document.getElementById("player").innerText =  "на ред е: YellowPlayer";
            break;
    }
    localStorage.setItem("newgame",(Number(localStorage.getItem("newgame"))+1));
}