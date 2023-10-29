//objeto que contiene la funcion para asignar 

function Planificar(semanas,familia,tareas,apellido){
    this.apellido = apellido;
    this.semanas = semanas;
    this.familia = familia;
    this.tareas = tareas;
    this.planificar = function(){ //funcion que se encarga de asignar las tareas
        console.log('PLANIFICACION FAMILIA '+this.apellido+"\n");
        var contador = 0; // este nos permitira recorrer las tareas 
    
        for(i = 1; i<=this.semanas;i++){ //bucle que corresponde a las semanas
            for(j = 0;j<this.familia.length;j++){ //bucle que recorre los miembros de la familia
                if( contador == this.tareas.length){ // de esta forma reiniciamos el contador si ha llegado al limite de tareas y quedan familiares sin tarea
                    contador = 0;
                }
                console.log("En la semana "+i+" "+this.familia[j]+" "+this.tareas[contador]);
                contador++; //permite asignar la tarea siguiente
            }
            console.log()
            var swap = this.familia.pop(); // vamos moviendo las tareas de forma que se repartan de foma equitativa y sean diferentes semana a semana
            this.familia.unshift(swap);   
        }   
    }
}
var sastre = ["padre", "madre", "hijo", "hija"];
var tarea_sastre = ["poner lavadora","limpiar cocina", "limpiar baño"]; 
var semanas_sastre = 52;

var torrens = ["padre", "madre", "hijo" , "hija"];
var tareas_torrens = ["planchar","limpiar baño"];
var semanas_torrens = 4;

var moll = ["padre", "madre", "hijo", "hija grande","hija pequeña"];
var tarea_moll = ["poner lavadora", "limpiar cocina", "limpiar comedor", "planchar","limpiar baño"];
var semanas_moll = 12;

// creamos los objetos
var familiaSastre = new Planificar(semanas_sastre,sastre,tarea_sastre,"SASTRE");
familiaSastre.planificar();

var familiaTorrens = new Planificar(semanas_torrens,torrens,tareas_torrens,"TORRENS");
familiaTorrens.planificar();

var familiaMoll = new Planificar(semanas_moll,moll,tarea_moll,"MOLL");
familiaMoll.planificar();