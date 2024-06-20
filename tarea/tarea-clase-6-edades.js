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


const $edadIntegrantes = document.querySelector("#edadIntegrantes");

function crearCampoEdades(numero) {
  const label = document.createElement("label");
  label.textContent = "Edad del familiar nº " + numero + ":";
  const input = document.createElement("input");
  input.type = "number";
  input.setAttribute("class", "edadesFamilia");
  input.setAttribute("value", "0");
  input.setAttribute("min", "0");
  input.setAttribute("max", "150");
  const div = document.createElement("div");
 
  div.appendChild(label);
  div.appendChild(input);
  $edadIntegrantes.appendChild(div);
  return
}

const $advertencia = document.querySelector("#advertencia");
const $resultados = document.querySelector("#resultados");
const $grupoFamiliar = document.querySelector("#grupoFamiliar")

const $botonCalcular = document.querySelector("#botonCalcular");
const $botonEnviar = document.querySelector("#botonEnviar");
const $botonBorrar = document.querySelector("#botonBorrar");


$botonEnviar.onclick = function () {
  let $numeroGrupoFamiliar = $grupoFamiliar.value;
  const errorNumero = validarNumero($numeroGrupoFamiliar);

  $resultados.className = "oculto";
  if (errorNumero){
      $grupoFamiliar.className = "invalido"
       setTimeout(function(){
        $grupoFamiliar.className = ""
     }, 600);

      $advertencia.innerHTML = errorNumero;
      $botonCalcular.className = "oculto";
      $advertencia.className = "";
  } else {
       $botonCalcular.className = "";
       $advertencia.className = "oculto";
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


$botonBorrar.onclick = function () {
  $edadIntegrantes.innerHTML = "";
  $botonCalcular.className = "oculto";
  $resultados.className = "oculto";
  $advertencia.className = "oculto";
};


$botonCalcular.onclick = function(){
  let $edadesFamilia = document.querySelectorAll(".edadesFamilia");
  $edadesFamilia.forEach(function(i){
    if(validarEdad(i.value)){
      i.className = "invalido"
      i.value = "";
      $advertencia.innerHTML = "Solo se permiten números enteros positivos o cero. El resultado corresponde a los números válidos.";
      $advertencia.className ="";
      $botonCalcular.className = "oculto";
    } 
  });
  $edadesFamilia.forEach(function(i){
    if(i.value !=""){
      const arrayEdadesFamilia = [];
      for (let i = 0; i < $edadesFamilia.length; i++) {
        arrayEdadesFamilia.push(parseInt($edadesFamilia[i].value));
        if ($edadesFamilia[i].value === "") {
          arrayEdadesFamilia.pop();   
        }
  
        $resultados.className = "";
        document.querySelector("#mayorEdad").textContent = numeroMaximo(arrayEdadesFamilia);
        document.querySelector("#menorEdad").textContent = numeroMinimo(arrayEdadesFamilia);
        document.querySelector("#promedioEdad").textContent = calcularPromedio(arrayEdadesFamilia) ;
      }
    }
  })
}
