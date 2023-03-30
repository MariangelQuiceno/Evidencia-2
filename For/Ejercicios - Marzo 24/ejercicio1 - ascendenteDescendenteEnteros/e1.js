//Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use
//ciclo for

let acumuladora = 0;

for (let contador = 0; contador < 100; contador++) {
   acumuladora = acumuladora + 1;
    console.log(acumuladora);
}
for (let contador = 100; contador > -0; contador--) {
    acumuladora = acumuladora - 1;
    console.log(acumuladora);
    
}