listofterms = [
    {"word": "automobile","topic":"automotive Industry","hint":"Used in everyday live"},
    {"word": "tesla","topic":"automotive Industry","hint":"There is measuring unit with same name"},
    {"word": "lamborghini","topic":"automotive Industry","hint":"First start building tractors"},
    {"word": "rimac","topic":"automotive Industry","hint":"Svetsko a nashe :)"},

    {"word": "hercule poirot","topic":"books","hint":"famous fictional inspector"},
    {"word": "ian fleming","topic":"books","hint":"Give life to greatest secret agent"},
    
    {"word": "linus torvalds","topic":"Computer Science","hint":"father of an Operating System"},
    {"word": "dennis ritchie","topic":"Computer Science","hint":"Creator of general purpose progamming language "},

]

localStorage.clear();

for(let i =0;i<listofterms.length;i++)
{
    localStorage.setItem(i,JSON.stringify(listofterms[i]))
}