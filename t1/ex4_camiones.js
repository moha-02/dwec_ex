var chofer = ["pep","juan","toemu","moha"];
var camion = ["volvo","scania","man","iveco"];
var nSemanas = 52;
for(i = 0; i<nSemanas;i++){
    for(j = 1;j<=chofer.length;j++){
        console.log("En la semana  "+i+"  conduce: "+chofer[j]+" -"+camion[j]);
    }
    descanso = camion.pop();
    camion.unshift(descanso);    
}
  