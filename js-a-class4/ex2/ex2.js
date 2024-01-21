let changefontsize = (element,fontsize) => {
    element.setAttribute("style",`font-size: ${fontsize}px`)
}

let changetextcolor = (element,textcolor) =>
{
    element.style.color = textcolor
}


document.getElementById("changetext").addEventListener("click",()=>{
    let element = document.getElementById("output")
    let fontsize = document.getElementById("fontsize").value;
    let textcolor = document.getElementById("color").value;
    changefontsize(element,fontsize);
    changetextcolor(element,textcolor);
})