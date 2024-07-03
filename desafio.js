//` `
//1
function mostrarHola(){
    console.log ("hola mundo");
}
mostrarHola();

//2
function mostrarHolanombre(nombre){
    console.log(`¡hola, ${nombre}!`);
} 

mostrarHolanombre("Daniel");

//3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function calcularDoble(numero) {
    return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

//4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(a,b,c){
    return (a + b + c)/ 3;
    let promedio = calcularPromedio(`2,5,3`);
    console.log (promedio);
}

//5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor (a, b){
    return a > b ? a : b; 
}
let numeroMayor = encontrarMayor(16, 28);
console.log (numeroMayor);

//6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero){
    return numero * numero;
}
let resultado = cuadro(2);
console.log(calcularCuadrado(44));
console.log(resultado);