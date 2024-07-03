//1 Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularMasaCorporal (altura,peso){
let imc = peso / (altura * altura);
return imc;
}

//2 Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero){
if (numero === 0 || numero=== 1){
    return 1;
    }else {
        return numero * calcularFactorial (numero - 1);
    }
}

let numero = 55;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAPesos (dolares){
    let cotizaciónDolar = 4000;
    let pesos = dolares * cotizaciónDolar;
    return pesos
}
let valorEnDolar = 1.25
let valorEnPesos = convertirDolaresAPesos(valorEnDolar);
console.log(`${valorEnDolar} dólares  es P$ ${valorEnPesos}`);

//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreayPerimetroRectangular(altura, anchura){
    let area = altura * anchura;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}

let altura = 90
let anchura = 70 //altura y anchura en metros
calcularAreayPerimetroRectangular(altura, anchura);

//5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreayPerimetroCircular(radio){
    let Pi = 3.14;
    let area = Pi* radio*radio;
    let perimetro = 2 * Pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}
radio = 4; // en metros
calcularAreayPerimetroCircular(radio);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaDeMultiplicar(numero){
    for (let i=1; i<=10 ; i++){
        let resultado= numero *i
        console.log(numero + " x " + i + " = " + resultado);
    }
}
numero = 9;
mostrarTablaDeMultiplicar(numero);

//propio
function sumarDosNumeros(numero1,numero2){
let suma = numero1 + numero2
return suma 
}
resultado = sumarDosNumeros(10,5)
console.log("La suma de 10 y 5 es: " + resultado); 
