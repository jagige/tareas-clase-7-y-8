/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $resultados = document.querySelector("#resultados");
const $edadIntegrantes = document.querySelector("#edadIntegrantes"); //selecciono el div

function crearCampoEdades(numero) {
  const familiar = document.createElement("label"); //creo un label
  familiar.textContent = "Edad del familiar nº " + numero + ":"; //escribo el texto del label
  const input = document.createElement("input"); //creo un nuevo cuadro de texto
  familiar.appendChild(input).type = "number"; //agrego al label pidiendo que sea de números
  input.setAttribute("class", "edadesFamilia"); //digo que los input tengan clase edadesFamilia
  const br = document.createElement("br"); //creo un br para separar
  familiar.appendChild(br); //agrego el br
  return $edadIntegrantes.appendChild(familiar); //digo que el div tenga dentro el label con su texto, input y br
}

/* Esto es lo que la función agrega en el html
<label>Edad del integrante nº 1:
    <input type="number" class="edadesFamilia"><br>
</label>
*/
const $botonCalcular = document.querySelector("#botonCalcular");
const $botonEnviar = document.querySelector("#botonEnviar");
//Atrapo el número de integrantes para crear la misma cantidad de cuadros
//si es 0 o menos muestra advertencia, si no aparece el botón calcular
$botonEnviar.onclick = function () {
  let $grupoFamiliar = Number(document.querySelector("#grupoFamiliar").value);

  if ($grupoFamiliar <= 0) {
    $botonCalcular.style.display = "none";
    document.querySelector("#advertencia").style.display = "block";
  } else {
    $botonCalcular.style.display = "block";
    document.querySelector("#advertencia").style.display = "none";
  }

  if ($edadIntegrantes.innerHTML === "") {
    for (let i = 0; i < $grupoFamiliar; i++) {
      crearCampoEdades(i + 1);
    }
  } else {
    $edadIntegrantes.innerHTML = "";
    for (let i = 0; i < $grupoFamiliar; i++) {
      crearCampoEdades(i + 1);
    }
  }
};

//Botón para reiniciar, también oculta el botón calcular y los resultados
const $botonBorrar = document.querySelector("#botonBorrar");
$botonBorrar.onclick = function () {
  $edadIntegrantes.innerHTML = "";
  $botonCalcular.style.display = "none";
  $resultados.style.display = "none";
};

//Obtengo los NodeList de la clase edadesFamilia y lo convierto en numeros para
//agregarlo a un array, teniendo en cuenta que el campo vacio se reemplace por cero
// para que no afecte al calculo del promedio
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
  //una vez obtenido los numeros empiezo a clcular
  let acumulador = 0;
  for (let i = 0; i < arrayEdadesFamilia.length; i++) {
    acumulador += arrayEdadesFamilia[i];
  }

  $resultados.style.display = "block";
  document.querySelector("#mayorEdad").textContent = Math.max(...arrayEdadesFamilia);
  document.querySelector("#menorEdad").textContent = Math.min(...arrayEdadesFamilia);
  document.querySelector("#promedioEdad").textContent = acumulador / arrayEdadesFamilia.length;
};
