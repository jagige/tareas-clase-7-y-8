/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

//Esto es una copia. Los archivos funcionales son: pruebas.js y main.js de la carpeta js

//dentro de main.js
const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form["descripcion-regalo"].value

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre){
    if (nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }
    if (nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }
    return ""
}

function validarCiudad(ciudad){
    if(ciudad === ""){
        return "Este campo no debe decir: Selecciona...";
    }
    return ""
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }
    return ""
}

//dentro de pruebas.js
function probarValidarNombre(){
    console.assert(validarNombre("") === "Este campo debe tener al menos 1 caracter",
 "validar nombre no validó que el nombre no sea un string vacio");

console.assert(
    validarNombre("11111111112222222222333333333344444444445555555555") === "Este campo debe tener menos de 50 caracteres",
"validar nombre no validó que el nombre sea menor a 50 caracteres");
}

function probarValidarCiudad(){
    console.assert(validarCiudad("") === "Este campo no debe decir: Selecciona...",
"validar ciudad no validó que no haya una ciudad vacia")
}

function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo("") === "Este campo debe tener al menos 1 caracter", 
"validar Descripcion Regalo no validó que el campo no esté vacío")
}

probarValidarNombre();
probarValidarCiudad()
probarValidarDescripcionRegalo()
