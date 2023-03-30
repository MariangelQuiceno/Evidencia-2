//Cree un programa que calcule el promedio de 10 números. 
//Use ciclo for

let numeros 
let contador = 0;
let acumuladora = 0;
let promedio = 0;
 
for (let contador = 0; contador <= 10; contador++) {
    let numeros = parseFloat(prompt("Ingrese los numeros"));
    acumuladora = acumuladora + numeros;
    promedio = acumuladora / contador;
}

console.log("Promedio: ", promedio);