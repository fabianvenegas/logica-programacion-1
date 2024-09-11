const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Por favor, ingresa solo números.");
} else {
    if (num1 === num2 && num2 === num3) {
        console.log("Los tres números son iguales: " + num1);
    } else {
        let numerosOrdenadosAscendente = [num1, num2, num3].sort(function(a, b) { return a - b });
        
        // Ordenar los números de mayor a menor
        let numerosOrdenadosDescendente = [num1, num2, num3].sort(function(a, b) { return b - a });

        // Imprimir los resultados
        console.log("Orden de menor a mayor: " + numerosOrdenadosAscendente);
        console.log("Orden de mayor a menor: " + numerosOrdenadosDescendente);
    }
}