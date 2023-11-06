let cards = ["2_of_clubs.png","2_of_diamonds.png","2_of_hearts.png","2_of_spades.png","3_of_clubs.png", "3_of_diamonds.png",
              "3_of_hearts.png","3_of_spades.png","4_of_clubs.png","4_of_diamonds.png","4_of_hearts.png","4_of_spades.png",
              "5_of_clubs.png","5_of_diamonds.png","5_of_hearts.png","5_of_spades.png","6_of_clubs.png","6_of_diamonds.png",
              "6_of_hearts.png","6_of_spades.png","7_of_clubs.png","7_of_diamonds.png","7_of_hearts.png","7_of_spades.png",
              "8_of_clubs.png","8_of_diamonds.png","8_of_hearts.png","8_of_spades.png","9_of_clubs.png","9_of_diamonds.png",
              "9_of_hearts.png","9_of_spades.png","10_of_clubs.png","10_of_diamonds.png","10_of_hearts.png","10_of_spades.png",
              "ace_of_clubs.png","ace_of_diamonds.png","ace_of_hearts.png","ace_of_spades.png","jack_of_clubs.png",
              "jack_of_diamonds.png","jack_of_hearts.png","jack_of_spades.png","king_of_clubs.png","king_of_diamonds.png",
              "king_of_hearts.png","king_of_spades.png","queen_of_clubs.png","queen_of_diamonds.png","queen_of_hearts.png",
              "queen_of_spades.png"]; //array principal que contiene todas las cartas


let ventana;

function play(){ //abre la ventana de juego
    ventana = window.open("./partida.html","MESA","width: 800,height: 300");
}

function cerrarVentanaJuego(){ //cierra la ventana de juego
    if(ventana){
        ventana.close();
    }
    
}

function cerrarJuego(){ //cierra todo
    open(location, '_self').close();
}


function reload(){

    let random = cards.sort(() => .5 - Math.random()).slice(0,5); //crea 5 cartas aleatorias diferentes dividiendo el array
    if(random.length== 5){ //si tenomos suficientes cartas jugamos sino fin de la partida
        matches =[];
        for (let index = 0; index < random.length; index++) { //para seleccionar las cartas y mostrarlas por pantalla

            matches.push(random[index].match(/\d+/g));//permite seleccionar las cartas que tengan numero y guardarla en un array 
            document.getElementById(index).innerHTML = `<img src="./cards/${random[index]}" alt="img">`; // muetra las imagenes por pantalla
            const remove = cards.indexOf(random[index]); // encuentra el indice de cada carta que ha salido
            if (remove > -1) { //con el indice de cada carta la eliminamos del array principal
                cards.splice(remove, 1); 
            } 
        }
        matches = matches.filter(Number);//eliminamos las cartas que no son numero
        matches = matches.sort();//ordenamos los numeros de las cartas 
        let resultado = false;
        for (let index = 0; index < matches.length-1; index++) {//al tener las cartas ordenadas podemos comparar la anterior con la siguiente 
           let n1 = matches[index][0]; 
           let n2 = matches[index+1][0]; 
            if(n1 == n2){ //si hay una pareja se cambia el resultado a verdadero
                resultado = true; 
            }
        }
        if(resultado == true){ //si hay una pareja se muestra por pantalla  
            document.getElementById("resultado").innerHTML = "Henorabuena tienes pareja"  
        }else{
            document.getElementById("resultado").innerHTML = ""
        }
    }else{
        document.getElementById("resultado").innerHTML = "Fin de la partida"
    }
}
    


