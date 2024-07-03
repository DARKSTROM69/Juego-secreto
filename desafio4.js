// 1 Crea una lista vacía con el nombre listaGenerica.
let listaGenerica= [];

// 2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion= ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang')

//4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguagesSeparadamente();

//5 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarlenguagesReversosSeparadamente(){
    for(let i= lenguagesDeProgramacion.length- 1; i >= 0; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarlenguagesReversosSeparadamente();

//6 Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista){
    let suma=0;
    for(let i = 0; i < lista.length; i++){
        suma+= lista[i];
    }
    return suma/lista.length;
}
let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log('Promedio:', promedio);

//7 Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
        mayor = lista[i];
    }
    if (lista[i] < menor) {
        menor = lista[i];
    }
    }

    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}

numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

//8 Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(suma){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma+= lista[i];
    }
    return suma;
}

numeros= [22,3,12,5,11];
let suma = calcularSuma (numeros);
console.log('Suma:', suma);