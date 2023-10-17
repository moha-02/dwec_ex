var palabra1 = "Ana";
var palabra2 = "A na Ana";
var palabra3 = "A na ána";
var palabra4 = "aver";

function lvl1_3(palabra){
    result = false;
    text = palabra.replaceAll(" ","");
    text = text.toLowerCase();
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    comparator = text.split("").reverse().join("");
    if(text === comparator){
        result = true;
    }
    return result;
}
console.log(lvl1(palabra4));