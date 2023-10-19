var chofer = ["pep","juan","toemu"];
var camion = ["volvo","scania","man","iveco"];
var nSemanas = 52;
for(i = 0; i<nSemanas;i++){
    for(j = 0;j<chofer.length;j++){
        console.log("En la semana  "+i+" Conduce: "+chofer[j]+"-"+camion[j]);
    }
    descanso = camion.pop();
    camion.unshift(descanso);    
}
