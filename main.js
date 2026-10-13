const readline = require("readline");
const Calculadora = require("./calculadora.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function iniciarCalculadora() {
  console.log("Calculadora Básica");

  const miCalculadora = new Calculadora();

  const input1 = await preguntar("Ingresa el primer número: ");
  const num1 = parseFloat(input1);

  const operador = await preguntar("Ingresa la operación (+, -, *, /): ");

  const input2 = await preguntar("Ingresa el segundo número: ");
  const num2 = parseFloat(input2);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Ambos operandos deben ser números válidos.");
    rl.close();
    return;
  }

  try {
    const resultado = miCalculadora.calcular(num1, operador, num2);
    console.log("--------------------------------");
    console.log(`Resultado: ${num1} ${operador.trim()} ${num2} = ${resultado}`);
    console.log("--------------------------------");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    rl.close();
  }
}

iniciarCalculadora();