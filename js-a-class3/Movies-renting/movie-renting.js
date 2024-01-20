
(() => {
    if (localStorage.getItem("movies") == undefined)
    {
        localStorage.setItem("movies",'')
    }
})()

let checknames = (text) => {
    let regex = text.match("^[a-zA-Z]+")
    if (regex[0] === text)
    {
        return true;
    }
    else
    {
        return false;
    }
}


let writetostorage = (movie) => {
    let temp = localStorage.getItem("movies")
    try 
    {
        temp = JSON.parse(temp)
        temp.push(movie)
        localStorage.setItem("movies",JSON.stringify(temp))
    }
    catch
    {
        let temp = [];
        temp.push(movie)
        localStorage.setItem("movies",JSON.stringify(temp))
    }
}

let addnewmovie = () => {
    let name = document.getElementById("name").value;
    let genre = document.getElementById("genre").value;
    let producer = document.getElementById("producer").value;
    let director = document.getElementById("director").value;
    if (checknames(name) && checknames(genre) && checknames(producer) && checknames(director))
    {
        writetostorage({
            "name":name,
            "genre":genre,
            "producer":producer,
            "director":director
        })

    }

}

let writeoutput = (outputmovies) => {
    if (outputmovies.length == 0)
    {
        let header = document.createElement("h1");
        header.style.color = "red";
        header.className = "text-center"
        header.innerHTML = `<p>The move cannot be rented</p>`
        let output = document.getElementById('output')
        output.innerHTML = '';
        output.appendChild(header)
    }
    else
    {
        let output = document.getElementById('output')
        output.innerHTML = '';
        for(let movie of outputmovies)
        {
            let header = document.createElement("h1");
            header.style.color = "green";
            header.className = "text-center"
            header.innerHTML = `<p>name of  the movie: ${movie.name}</p>
                                <p>genre of the movie: ${movie.genre}</p>
                                <p>Producer of the movie: ${movie.producer}</p>
                                <p>Direcotor of the movie: ${movie.director}</p>`

            output.appendChild(header)
        }
    }

}

let searchformovie = () => {
    let movies = localStorage.getItem("movies")
    try
    {
        movies = JSON.parse(movies)
    }
    catch
    {
        writeoutput()
        return;
    }
    let searchtype = document.getElementById("searchtype").value.toLowerCase()
    let searchparameter = document.getElementById("searchparameter").value.toLowerCase()
    
    let outputmovies = [];
    for(movie of movies)
    {
        if (movie[searchtype].toLowerCase() === searchparameter.toLowerCase())
        {
            outputmovies.push(movie)
        }
    }
    writeoutput(outputmovies)
}

document.getElementById("addnewmovie").addEventListener("click",function() { addnewmovie()})
document.getElementById("searchbutton").addEventListener("click",function() { searchformovie()})