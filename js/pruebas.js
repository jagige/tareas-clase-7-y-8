function probarValidarNombre(){
    console.assert(validarNombre("") === "Este campo debe tener al menos 1 caracter",
 "validar nombre no validó que el nombre no sea un string vacio");

console.assert(
    validarNombre("11111111112222222222333333333344444444445555555555") === "Este campo debe tener menos de 50 caracteres",
"validar nombre no validó que el nombre sea menor a 50 caracteres");

console.assert(validarNombre("123456") === "el campo nombre solo acepta letras",
"validar nombre no validó que el nombre sea solo letras")

console.assert(validarNombre("Javier") === "",
 "validar nombre falló con un nombre válido");

}

function probarValidarCiudad(){
    console.assert(validarCiudad("") === "Este campo no debe estar vacio",
"validar ciudad no validó que no haya una ciudad vacia")

console.assert(validarCiudad("Córdoba")==="", "validar ciudad no funcionó con un nombre de ciudad válido")
}

function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo("") === "Este campo debe tener al menos 1 caracter", 
"validar Descripcion Regalo no validó que el campo no esté vacío")
console.assert(
    validarDescripcionRegalo("1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555") === "Este campo debe tener menos de 250 caracteres",
"validar nombre no validó que el regalo sea menor a 250 caracteres");
console.assert(validarDescripcionRegalo("Regalo")==="",
"La función validad descripción regalo, no funcionó con una descripción correcta")
console.assert(validarDescripcionRegalo(".,,.,.,.")==="Este campo debe tener solo leras y números",
"La función validad descripción regalo no validó que fueran solo letras y números")
}

probarValidarNombre();
probarValidarCiudad()
probarValidarDescripcionRegalo()
