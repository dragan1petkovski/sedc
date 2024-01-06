//-------------------- Homework 1 - Greetings ------------------------
$("#entername-button").click(function(){
    $("#greetings-output").text(`Greetings ${$("#entername-text").first().val()} we are taking over your radio!`)
    $("#entername-text").val(" ")
})

//-------------------- Homework 1 - Greetings ------------------------

$("#enterheader-button").click(function(){
    let colour = $("#enterheader-colour").first().val();
    let message = $("#enterheader-text").first().val();
    let header = document.createElement("h3")
    header.setAttribute("style",`color: ${colour}; text-align: center`)
    header.appendChild(document.createTextNode(message))
    $("#enterheader-output").empty();
    $("#enterheader-output").append(header)
})