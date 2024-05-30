function validarNombre(nombre){
    if (nombre.length === 0){
        return "El nombre debe tener al menos 1 caracter";
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
        return "El campo ciudad no debe estar vacio";
    }
    return ""
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }else if (descripcionRegalo.length >= 150){
        return "Este campo debe tener menos de 150 caracteres";
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
        'descripcion-regalo': errorDescripcionRegalo
    };

    const esExito = manejarErrores(errores) === 0;
    if(esExito){
        $form.className = "oculto";
        document.querySelector("#exito").className="";
        setTimeout(function(){
            window.location.href = "wishlist.html";
        },5000)
    }
    event.preventDefault();
}

function manejarErrores(errores){
    const llaves = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;

    $errores.innerHTML = ""
    llaves.forEach(function(unaLlave){
        const error = errores[unaLlave];
        if(error){
            cantidadErrores++;
            $form[unaLlave].className = "error";
            const $error = document.createElement("li");
            $error.innerText = error;
            $errores.appendChild($error);
        }else{
            $form[unaLlave].className = "";
       }
    });
    return cantidadErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
