function validarNumero(numero){
    if (numero.length === 0){
        return "Debe ingresar algún número";
    }
    if (Number(numero) < 0){
        return "Debe ingresar numeros positivos";
    }
    if(!/^[0-9]+$/.test(numero)){
        return "Este campo solo acepta números enteros"
    }
    return ""
  }

  
function probarValidarNumero(){
    console.assert(validarNumero("") === "Debe ingresar algún número",
 "validarNumero uno no funcionó con un string vacio");

console.assert(
    validarNumero("-5") === "Debe ingresar numeros positivos",
"validarNumero uno no validó que el número sea mayor a cero");

console.assert(validarNumero("a,b") === "Este campo solo acepta números enteros",
"validarNumero no avisó que no hay números")

console.assert(validarNumero("4") === "",
 "validarNumero falló con un número válido");

}

probarValidarNumero();
