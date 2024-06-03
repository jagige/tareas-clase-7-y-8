/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).

Tarea clase 8
A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias. (usando RegEx, Objetos, forEach, poner estilos,
 mostrar los errores en la interfaz del usuario y escribir pruebas)

TIP: Las edades no pueden tener decimales.
*/

const $resultados = document.querySelector("#resultados");
const $edadIntegrantes = document.querySelector("#edadIntegrantes");

function crearCampoEdades(numero) {
  const familiar = document.createElement("label");
  familiar.textContent = "Edad del familiar nº " + numero + ":";
  const input = document.createElement("input");
  familiar.appendChild(input).type = "number";
  input.setAttribute("class", "edadesFamilia");
  input.setAttribute("value", "0");
  input.setAttribute("min", "0");
  input.setAttribute("max", "150");
  const br = document.createElement("br");
  familiar.appendChild(br);
  return $edadIntegrantes.appendChild(familiar);
}
/* Esto es lo que la función agrega en el html
<label>Edad del integrante nº 1:
    <input type="number" class="edadesFamilia" value="2" min="1" max="150"><br>
</label>
*/

const $botonCalcular = document.querySelector("#botonCalcular");
const $botonEnviar = document.querySelector("#botonEnviar");

const $grupoFamiliar = document.querySelector("#grupoFamiliar")

$botonEnviar.onclick = function () {
  let $numeroGrupoFamiliar = Number(document.querySelector("#grupoFamiliar").value);
  $resultados.className = "oculto";
  if ($numeroGrupoFamiliar <= 0) {
    $grupoFamiliar.className = "invalido"
   setTimeout(function(){
    $grupoFamiliar.className = ""
}, 300);
    $botonCalcular.className = "oculto";
    document.querySelector("#advertencia").className = "";
  } else {
    $botonCalcular.className = "";
    document.querySelector("#advertencia").className = "oculto";
  }

  if ($edadIntegrantes.innerHTML === "") {
    for (let i = 0; i < $numeroGrupoFamiliar; i++) {
      crearCampoEdades(i + 1);
    }
  } else {
    $edadIntegrantes.innerHTML = "";
    for (let i = 0; i < $numeroGrupoFamiliar; i++) {
      crearCampoEdades(i + 1);
    }
  }
};

const $botonBorrar = document.querySelector("#botonBorrar");
$botonBorrar.onclick = function () {
  $edadIntegrantes.innerHTML = "";
  $botonCalcular.className = "oculto";
  $resultados.className = "oculto";
  document.querySelector("#advertencia").className = "oculto";
};


$botonCalcular.onclick = function () {
  let $edadesFamilia = document.querySelectorAll(".edadesFamilia");
  const arrayEdadesFamilia = [];
  for (let i = 0; i < $edadesFamilia.length; i++) {
    arrayEdadesFamilia.push(parseInt($edadesFamilia[i].value));
    if ($edadesFamilia[i].value === "") {
      arrayEdadesFamilia.pop();
      arrayEdadesFamilia.push(0);
    }
  }

  let acumulador = 0;
  for (let i = 0; i < arrayEdadesFamilia.length; i++) {
    acumulador += arrayEdadesFamilia[i];
  }

  $resultados.className = "";
  document.querySelector("#mayorEdad").textContent = Math.max(...arrayEdadesFamilia);
  document.querySelector("#menorEdad").textContent = Math.min(...arrayEdadesFamilia);
  document.querySelector("#promedioEdad").textContent = acumulador / arrayEdadesFamilia.length;
};

