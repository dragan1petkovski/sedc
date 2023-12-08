document.getElementById("calculatechinesezodiac").addEventListener("click",calculatechinesezodical);



function calculatechinesezodical()
{
    const chinesezodiacs = new Map();
    chinesezodiacs.set("0","Rat");
    chinesezodiacs.set("1","Ox");
    chinesezodiacs.set("2","Tiger");
    chinesezodiacs.set("3","Rabbit");
    chinesezodiacs.set("4","Dragon");
    chinesezodiacs.set("5","Snake");
    chinesezodiacs.set("6","Horse");
    chinesezodiacs.set("7","Goat");
    chinesezodiacs.set("8","Monkey");
    chinesezodiacs.set("9","Rooster");
    chinesezodiacs.set("10","Dog");
    chinesezodiacs.set("11","Pig");

    let yearofbirth = document.getElementById("yearofbirth").value;
    let chinesezodiac = chinesezodiacs.get(String((yearofbirth-4)%12));
    document.getElementById("announcementofchinesezodiac").innerText = chinesezodiac;
}