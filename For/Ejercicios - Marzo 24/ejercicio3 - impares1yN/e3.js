// Cree un programa que muestre los números impares entre 1 y n. 
//Use ciclo for


let limite = parseInt(prompt("Ingrese un limite"))

for (let contador = 1; contador <= limite; contador++) {
    
    if (contador % 2 == 1){
        
        console.log(contador);
    }
    
}


