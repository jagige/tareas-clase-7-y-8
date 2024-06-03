/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $labelVacio = document.querySelector("#labelVacio");
const $botonCrear = document.querySelector("#botonCrear");
const $botonBorrar = document.querySelector("#botonBorrar");
const $botonCalcular = document.querySelector("#botonCalcular");

function crearCampoSalario() {
  const salarioAnual = document.createElement("label");
  salarioAnual.textContent = "Ingresar salario anual ";
  const input = document.createElement("input");
  salarioAnual.appendChild(input).type = "number";
  input.setAttribute("class", "salarioAnual");
  const br = document.createElement("br");
  salarioAnual.appendChild(br);
  return $labelVacio.appendChild(salarioAnual);
}

/* Esto es lo que la función agrega en el html
<label>Ingresar salario anual <input type="number" class="salarioAnual"><br></label>
*/

$botonCrear.onclick = function(){
    crearCampoSalario()
}


$botonBorrar.onclick = function () {
    let padre = document.querySelector("#labelVacio");
    padre.removeChild(padre.lastChild)
}

function calcularPromedio(numeros){
    let resultado = 0;
    for(let i =0; i < numeros.length; i++){
      resultado = resultado + numeros[i]
    }
    return resultado/numeros.length;
}

$botonCalcular.onclick = function(){
    let $valores = document.querySelectorAll(".salarioAnual");
    let arraysalarios =[]
    for(let i=0; i<$valores.length; i++){
        arraysalarios.push(parseInt($valores[i].value))
        if($valores[i].value === "" || $valores[i].value <= 0){
            arraysalarios.pop();
        }
    }    
    document.querySelector("#mayorSalarioAnual").textContent ="El mayor salario anual es: "+ Math.max(...arraysalarios);
    document.querySelector("#menorSalarioAnual").textContent ="El menor salario anual es: "+ Math.min(...arraysalarios);
    document.querySelector("#salarioAnualPromedio").textContent ="El salario anual promedio es: "+ calcularPromedio(arraysalarios);
    document.querySelector("#salarioMensualPromedio").textContent ="El salario mensual promedio es: "+ calcularPromedio(arraysalarios)/12
}

