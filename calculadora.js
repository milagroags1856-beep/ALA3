class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error("No es posible dividir por cero.");
    }
    return a / b;
  }

  calcular(num1, operador, num2) {
    switch (operador.trim()) {
      case "+":
        return this.sumar(num1, num2);
      case "-":
        return this.restar(num1, num2);
      case "*":
        return this.multiplicar(num1, num2);
      case "/":
        return this.dividir(num1, num2);
      default:
        throw new Error("Operador no válido. Usa +, -, * o /.");
    }
  }
}

module.exports = Calculadora;