Abstracción: Se separó la interacción con el usuario (la consola y las preguntas de readline) de la lógica matemática real. La clase Calculadora representa el concepto abstracto de un dispositivo de cómputo: expone una interfaz simple con métodos como sumar(), restar() o calcular(), ocultando al archivo principal cómo se resuelven internamente los cálculos o las validaciones aritméticas.

Encapsulamiento: En la versión estructurada original, las operaciones matemáticas y la validación de dividir por cero estaban mezcladas directamente dentro del flujo de lectura de la terminal. Al usar clases, agrupamos las cuatro operaciones básicas y sus reglas dentro de la misma estructura (Calculadora.js).

Ejemplo: Si alguien intenta dividir por cero, la propia clase detecta la anomalía y lanza una excepción (throw new Error('No es posible dividir por cero.')), centralizando el control del error en el objeto y no en la interfaz de consola.
Clases e Instanciación: Se utilizó la sintaxis formal de clases (class) para definir la estructura y el comportamiento de la calculadora. En el archivo principal se crea una instancia concreta mediante el operador new:

JavaScript
const miCalculadora = new Calculadora();
const resultado = miCalculadora.calcular(num1, operador, num2);
A través de este objeto instanciado, el programa principal despacha los mensajes y obtiene las respuestas necesarias.

Características de la POO no utilizadas y fundamentación:

Herencia: No se crearon subclases derivadas (como una clase base Operacion que herede a Suma, Resta, etc.). Como el programa solo resuelve una calculadora básica con cuatro operaciones elementales, condensar los métodos dentro de una única clase Calculadora resulta mucho más limpio, directo y fácil de mantener. Crear una jerarquía de herencia para operaciones tan simples hubiera sumado complejidad y sobrecarga innecesaria al código.

Polimorfismo: No se implementó polimorfismo dinámico o sobreescritura de métodos. El polimorfismo se justifica cuando existen diferentes objetos que deben responder a un mismo mensaje de maneras distintas (por ejemplo, si tuviéramos objetos Suma y Division respondiendo cada uno a su método ejecutar()). En este diseño, todos los cálculos se canalizan de forma directa y uniforme a través de los métodos específicos de la única instancia de Calculadora.