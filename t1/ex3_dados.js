
function Dado(numeroCaras){
    this.numeroCaras = numeroCaras;
    this.tirar = function(){
        return Math.floor(Math.random() * numeroCaras) + 1;
    } 
}

var caracruz = 2;
var parchis = 6;
var rol = 12;
var tirarDado = new Dado(caracruz);
var tirarDado1 = new Dado(parchis);
var tirarDado2 = new Dado(rol);


if((tirarDado.tirar()) == 1){
    console.log("Muy bien has ganado en cara/cruz");
}else if((tirarDado1.tirar()) == 1){
    console.log("Muy bien has ganado en parchis");
}else if((tirarDado2.tirar()) == 1){
    console.log("Muy bien has ganado en rol");
}else{
    console.log("Has perdido");

}