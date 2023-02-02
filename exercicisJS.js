//inicialització
function init(){
    document.getElementById("calculaFact").addEventListener("click", function(){executaFuncio(calculaFactorial, "resFact", "numFact")});
    document.getElementById("calculaSenar").addEventListener("click", function(){executaFuncio(esSenar, "resSenar", "numSenar")});
    document.getElementById("calculaPot").addEventListener("click", function(){executaFuncio(potencia, "resPot", "numPot1", "numPot2")});
    document.getElementById("calculaArrel").addEventListener("click", function(){executaFuncio(calculaArrel, "resArrel", "numArrel")});
    document.getElementById("numeroAleatori").addEventListener("click", function(){executaFuncio(numeroAleatori, "resNombre")});
    document.getElementById("fondoAleatori").addEventListener("click", fondoAleatori);
}

//funcions d'ajuda
function obteNum(id){ //aquesta funció retorna un núm o NaN
    if (id === undefined) return NaN;
    return parseInt(document.getElementById(id).value);
}

function executaFuncio(funcioCalcul, output, input1, input2){
    var num1=obteNum(input1);
    var num2=obteNum(input2);

    var resultat = "";
    if (input1!==undefined && isNaN(num1) || input2!==undefined && isNaN(num2) ){
        resultat = "Error!";
    } else{
        resultat = funcioCalcul(num1, num2);
    }

    document.getElementById(output).value = resultat;
}
//fi funcions ajuda

//funcions que heu d'implementar
function calculaFactorial(numero){
    let resultat = 1;
    if(numero == 0){
        return 0;
    }
    for(let i = 1; i <= numero; i++ ){
        resultat *=  i;
    }
    return resultat;
}

function esSenar(numero){
    return(numero % 2 == 1)?"Sí":"No";
}

function potencia(numPot1, numPot2){
    return numPot1 ** numPot2;
}

function calculaArrel(num){

    return Math.sqrt(num);
}

function numeroAleatori(){
    return Math.round(Math.random()*255);
}

function fondoAleatori(){
    document.body.style.backgroundColor = "rgb(" + numeroAleatori() + "," + numeroAleatori() + "," + numeroAleatori() + ")" ;
}




