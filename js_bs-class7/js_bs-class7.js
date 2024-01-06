//----------------------- Homework 1 - animal -----------------------
document.getElementById("animalspeak-input").addEventListener("click",animalspeak);

let animal = {
    kind: '',
    speak: function(textoutput,message) {
        textoutput.innerHTML = '';
        let animalsays = document.createElement("p");
        let boldstatement = document.createElement("strong");
        this.kind = `${this.kind} says:`
        boldstatement.appendChild(document.createTextNode(this.kind.toUpperCase()));
        animalsays.appendChild(boldstatement);
        message = `: ${message}!!`
        animalsays.appendChild(document.createTextNode(message))
        textoutput.appendChild(animalsays);
        let = output = `${this.kind} ${message}`
        console.log(output)

    }
}

function animalspeak()
{
    animal.kind = document.getElementById("animalkind").value;
    animal.speak(document.getElementById("animalspeak-output"),document.getElementById("animalspeak-text").value)
}

