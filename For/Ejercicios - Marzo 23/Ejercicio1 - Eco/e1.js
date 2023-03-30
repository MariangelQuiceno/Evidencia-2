//Cree un programa que imprima el eco de una letra tantas veces como se lo indique. 
//Por ejemplo, si el usuario quiere el eco de la letra A cuatro veces, 
//entonces el programa deberá imprimir AAAAA

let letra = prompt("Ingrese una letra");
let limite = parseInt(prompt("Ingrese cuantas veces quiere que se repita la letra"));
let acumuladora = "";


for (let contador = 0; contador <= limite; contador++) {
     acumuladora = acumuladora + letra;
   
    
}

console.log(acumuladora);
  
   