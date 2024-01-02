document.getElementById("calculate").addEventListener("click", total);

function total()
{
    let nph = document.getElementById("numberofphones").value;
    let pp = document.getElementById("priceperphone").value;
    let pwt = pp*nph;
    let tax = pwt*0.05;
    document.getElementById("pricewithouttax").innerText = "Price without tax: "+String(pwt);
    document.getElementById("tax").innerText = "Tax: "+String(tax);
    document.getElementById("total").innerText = String(pwt+tax);
}