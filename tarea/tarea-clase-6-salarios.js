/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

Tarea clase 8
A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias. (usando RegEx, Objetos, forEach, poner estilos,
 mostrar los errores en la interfaz del usuario y escribir pruebas)
TIP: Las edades no pueden tener decimales.
*/

const $areaSalarios = document.querySelector("#area-salarios");
const $resultados = document.querySelector("#resultados");
const $advertencia = document.querySelector("#advertencia");
const $botonCrear = document.querySelector("#botonCrear");
const $botonQuitar = document.querySelector("#botonQuitar");
const $botonCalcular = document.querySelector("#botonCalcular");
const $botonBorrar = document.querySelector("#botonBorrar");

function crearCampoSalario(){
    const label = document.createElement("label");
    label.textContent = "Ingresar salario anual ";
    const input = document.createElement("input");
    input.type = "number";
    input.setAttribute("class", "salarios");
    input.setAttribute("value", "");
    input.setAttribute("min", "0");
    const div = document.createElement("div");
   
    div.appendChild(label);
    div.appendChild(input);
  return $areaSalarios.appendChild(div);
}


$botonCrear.onclick = function(){
    crearCampoSalario();
}

$botonQuitar.onclick = function () {
    $areaSalarios.removeChild($areaSalarios.lastChild);
}

$botonBorrar.onclick = function(){
    $areaSalarios.innerHTML ="";
    $resultados.className = "oculto"
    $advertencia.className = "oculto"
    $botonCalcular.className ="";
    $botonBorrar.classList.remove("mensaje");
}

$botonCalcular.onclick = function(){
    const $valores = document.querySelectorAll(".salarios");
    $valores.forEach(function(i){
        if(validarEdad(i.value)){
            i.className = "invalido"
            i.value = "";
            $advertencia.innerHTML = "Solo se permiten números enteros positivos o cero. El resultado corresponde a los números válidos.";
            $advertencia.className ="";
            $botonCalcular.className = "oculto";
            $botonBorrar.classList.add("mensaje");
        }
    })

    let arraysalarios =[]
    for(let i=0; i<$valores.length; i++){
        arraysalarios.push(parseInt($valores[i].value))
        if($valores[i].value === ""){
            arraysalarios.pop();
        }
    }    
    $resultados.className = ""
    document.querySelector("#mayorSalarioAnual").textContent ="El mayor salario anual es: "+ numeroMaximo(arraysalarios);
    document.querySelector("#menorSalarioAnual").textContent ="El menor salario anual es: "+ numeroMinimo(arraysalarios);
    document.querySelector("#salarioAnualPromedio").textContent ="El salario anual promedio es: "+ calcularPromedio(arraysalarios);
    document.querySelector("#salarioMensualPromedio").textContent ="El salario mensual promedio es: "+ calcularPromedio(arraysalarios)/12
}

