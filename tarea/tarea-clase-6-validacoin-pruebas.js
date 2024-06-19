//CUENTAS
function numeroMinimo(numero){
    let minimo = numero[0];
    for(let i=1; i<numero.length; i++){
        if(numero[i]<minimo){
            minimo = numero[i]
        }
    }
    return minimo;
}

function numeroMaximo(numero){
    let maximo = numero[0];
    for(let i=0; i<numero.length; i++){
        if(numero[i]>maximo){
            maximo = numero[i]
        }
    }
    return maximo;
}

function calcularPromedio(numeros){
    let acumulador = 0
    for(let i =0; i<numeros.length; i++){
        acumulador = acumulador + numeros[i];
    }
 return acumulador/numeros.length;
}


//VALIDACIONES

function validarNumero(numero){
    if (numero.length === 0){
        return "Debe ingresar algún número";
    }
    if (Number(numero) < 1){
        return "Debe ingresar un número mayor a cero";
    }
    if(!/^[0-9]+$/.test(numero)){
        return "Este campo solo acepta números enteros"
    }
    return ""
}

function validarEdad(edad){
    if (edad.length === 0){
        return "Debe ingresar un número válido";
    }
    if (Number(edad) < 0){
        return "Si es un bebé pude tener cero años, no menos";
    }
    if(!/^[0-9]+$/.test(edad)){
        return "Solo se permiten números enteros (cantidad de años)"
    }
    return ""
}

//PRUEBAS

function probarValidarNumero(){
    console.assert(validarNumero("") === "Debe ingresar algún número",
 "validarNumero uno no funcionó con un string vacio");

console.assert(
    validarNumero("-5") === "Debe ingresar un número mayor a cero",
"validarNumero uno no validó que el número sea mayor a cero");

console.assert(validarNumero("a,b") === "Este campo solo acepta números enteros",
"validarNumero no avisó que no hay números")

console.assert(validarNumero("4") === "",
 "validarNumero falló con un número válido");

}

function probarValidarEdad(){
    console.assert(validarEdad("") === "Debe ingresar un número válido",
 "validarNumero uno no funcionó con un string vacio");

console.assert(
    validarEdad("-7") === "Si es un bebé pude tener cero años, no menos",
"validarNumero uno no validó que el número sea mayor a cero");

console.assert(validarEdad("0.6") === "Solo se permiten números enteros (cantidad de años)",
"validarNumero no avisó que no hay números")

console.assert(validarEdad("9") === "",
 "validarNumero falló con un número válido");

}

probarValidarNumero();
probarValidarEdad();
