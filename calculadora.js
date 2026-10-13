// Clase con la lógica matemática.
// Todas las operaciones reciben un arreglo de números (2 o más).
class Calculadora {
    sumar(numeros) {
        let resultado = 0;
        for (let i = 0; i < numeros.length; i++) {
            resultado = resultado + numeros[i];
        }
        return resultado;
    }
 
    restar(numeros) {
        let resultado = numeros[0]; // Se parte del primer número
        for (let i = 1; i < numeros.length; i++) {
            resultado = resultado - numeros[i];
        }
        return resultado;
    }
 
    multiplicar(numeros) {
        let resultado = 1;
        for (let i = 0; i < numeros.length; i++) {
            resultado = resultado * numeros[i];
        }
        return resultado;
    }
 
    dividir(numeros) {
        let resultado = numeros[0]; // Se parte del primer número
        for (let i = 1; i < numeros.length; i++) {
            resultado = resultado / numeros[i];
        }
        return resultado;
    }
}
 
module.exports = Calculadora; // Permite usar la clase desde otros archivos
 