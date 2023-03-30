//Mostrar los múltiplos de 6 entre 0 y 100

let contador = 0
while (contador <= 100) {
    contador = contador + 1;
    if (contador % 2 == 0 && contador % 3 == 0 ){
        
        console.log(contador);
    }
}