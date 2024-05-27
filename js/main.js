
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
    if(!/^[a-z]+$/i.test(nombre)){
        return "el campo nombre solo acepta letras"
    }
    return ""
}

function validarCiudad(ciudad){
    if(ciudad === ""){
        return "Este campo no debe estar vacio";
    }
    return ""
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }else if (descripcionRegalo.length >= 250){
        return "Este campo debe tener menos de 250 caracteres";
    }else if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return "Este campo debe tener solo leras y números"
    }else{
        return ""
    }  
}

function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa");
    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)
    
    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo
    };

    manejarErrores(errores);
    event.preventDefault();
}

function manejarErrores(errores){
    errorNombre = errores.nombre; //nombre
    errorCiudad = errores.ciudad; //ciudad
    errorDescripcionRegalo = errores.descripcionRegalo; // descripcionRegalo
    if(errorNombre)
    {
        $form.nombre.className = "error";
    } else{
        $form.nombre.className = ""
    }

    if(errorCiudad){
        $form.ciudad.className = "error";
    } else{
        $form.ciudad.className = ""
    }

    if(errorNombre){
        $form["descripcion-regalo"].className = "error";
    } else{
        $form["descripcion-regalo"].className = ""
    }
}

$form.onsubmit = validarFormulario;
