//Cree un programa que calcula la suma de los primeros n números naturales. 
//Use ciclo for


let limite = parseInt(prompt("Ingrese un limite"))
let acumuladora = 0;
let contador = 1;


for (let contador = 1; contador <= limite; contador++) {
    acumuladora = acumuladora + contador;   
}

console.log("suma total :", acumuladora)


