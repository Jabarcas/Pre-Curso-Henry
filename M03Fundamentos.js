//Fundamentos

/*1️⃣ EJERCICIO 01 1️⃣*/

// En los siguientes ejercicios deberás reemplazar el valor null
// por el correspondiente.

// Crea una variable de tipo string.
const nuevoString = "null";

// Crea una variable de tipo number.
const nuevoNumero = 2;

// Crea una variable de tipo boolean.
const nuevoBoolean = true;

// Resuelve el siguiente problema matemático.
const nuevaResta = 10 - 7 === 3;

// Resuelve el siguiente problema matemático.
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático.
const nuevoModulo = 21 % 5 === 1;

/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
    // Debe retornar un string.
    // Tu código:
    return(string)
 }
 
 // ⛔️ "X" e "Y" son números.
 
 function suma(x, y) {
    // Retorna el resultado de su suma.
    // Tu código:
    return(x + y)
 }
 
 function resta(x, y) {
    // Retorna el resultado de la resta.
    // Tu código:
    return(x - y)
 }
 
 function divide(x, y) {
    // Retorna el resultado de su división.
    // Tu código:
    return(x / y)
 }
 
 function multiplica(x, y) {
    // Retorna el resultado de su multiplicación.
    // Tu código:
    return(x * y)
 }
 
 function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y".
    // Tu código:
    return(x % y)
 }
 
 /*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
    // Retorna true si "x" e "y" son iguales.
    // De lo contrario, retorna false.
    // Tu código:
    if(x == y){
       return(true)
    }
   else
       return(false) 
 }
 
 function tienenMismaLongitud(str1, str2) {
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Tu código:
    if(str1.length == str2.length){
       return(true)
    }
    return(false)
 }
 
 function menosQueNoventa(num) {
    // Retorna true si el argumento "num" es menor que noventa.
    // De lo contrario, retorna false.
    // Tu código:
    if(num < 90){
       return(true)
    }
    else
       return(false)
 }
 
 function mayorQueCincuenta(num) {
    // Retorna true si el argumento "num" es mayor que cincuenta.
    // De lo contrario, retorna false.
    // Tu código:
    if(num > 50){
       return(true)
    }
    else
       return(false)
 }
 
 function esPar(num) {
    // Retorna true si "num" es par.
    // De lo contrario, retorna false.
    // Tu código:
    if((num % 2) == 0){
       return(true)
    }
    else
       return(false)
 }
 
 function esImpar(num) {
    // Retorna true si "num" es impar.
    // De lo contrario, retorna false.
    // Tu código:
    if((num % 2) != 0){
       return(true)
    }
    else
       return(false)
 }
 
 /*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
    // Retorna el valor de "num" elevado al cuadrado.
    // Tu código:
    return(Math.pow(num, 2))
 }
 
 function elevarAlCubo(num) {
    // Retorna el valor de "num" elevado al cubo.
    // Tu código:
    return(Math.pow(num, 3))
 }
 
 function elevar(num, exponent) {
    // Retorna el valor de "num" elevado al exponente "exponent".
    // Tu código:
    return(Math.pow(num, exponent))
 }
 
 function redondearNumero(num) {
    // Redondea "num" al entero más próximo y retórnalo.
    // Tu código:
    return(Math.round(num))
 }
 
 function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba y retórnalo.
    // Tu código:
    return(Math.ceil(num))
 }
 
 function numeroRandom() {
    // Genera un número al azar entre 0 y 1 y retórnalo.
    // Tu código:
    return(Math.random())
 }
 
 /*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
    // La función recibe un entero. Devuelve como resultado un string que indica si el número
    // es positivo o negativo.
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
    if (num > 0){
       return("Es positivo")
    }
    else if(num < 0){
       return("Es negativo")
    }
    else
       return(false)
 }
 
 function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final del string "str" y retórnalo
    // Ejemplo: "hello world" ---> "hello world!"
    // Tu código:
    return(str + '!')
 }
 
 function combinarNombres(nombre, apellido) {
    // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
    // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
    // Tu código:
    return(nombre + " " + apellido)
 }
 
 function obtenerSaludo(nombre) {
    // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
    // Ejemplo: "Martin" ---> "Hola Martin!"
    // Tu código:
    return("Hola " + nombre + "!")
 }
 
 function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el área de un rectángulo teniendo su altura y ancho.
    // Tu código:
    return(alto * ancho)
 }
 
 function retornarPerimetro(lado) {
    // La función recibe como argumento la medida de un lado de un cuadrado.
    // Debes retornar su perímetro.
    // Tu código:
    return(lado * 4)
 }
 
 function areaDelTriangulo(base, altura) {
    // Calcula el área de un triángulo y retorna el resultado.
    // Tu código:
    return((base * altura) / 2)
 }
 
 function deEuroAdolar(euro) {
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // Debes calcular el valor recibido como argumento pasándolo a dolares.
    // Tu código:
    return(euro * 1.20)
 }
 
 function esVocal(letra) {
    // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    // Si no es vocal, tambien debe retornar "Dato incorrecto".
    // Tu código:
    if (letra.length != 1){
       return("Dato incorrecto")
    }
    else if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
       return("Es vocal")
    }
    else
       return("Dato incorrecto")
 }