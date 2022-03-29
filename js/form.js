const form = document.getElementById('formulario');
const nombre = document.getElementById('txtNombre');
const email = document.getElementById('txtEmail');
const asunto = document.getElementById('txtAsunto');
const mensaje = document.getElementById('txtMensaje');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    if(validarInputs() == 4){
        form.action = 'https://formsubmit.co/danibelgranocab@hotmail.com';
        form.method = 'POST';
        form.submit();   


        //remplazar boton por imagen
        const boton = document.getElementById('btnEnviar');
		form.removeChild(boton);

        let confirmacionIcon = document.createElement('img');
        confirmacionIcon.src = "/files/checkEmail.svg";
        confirmacionIcon.className = 'emailExitoImg';
        confirmacionIcon.style.width='5em';
        form.appendChild(confirmacionIcon); 
        
    };


});

function validarInputs(){
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const asuntoValor = asunto.value;
    const mensajeValor = mensaje.value;
    let enviable = 0;

    if(nombreValor === ''){
        mostrarError(nombre, 'No puede estar vacio');
    }else if(nombreValor.length > 50){
        mostrarError(nombre, 'No puede haber mas de 50 caracteres');
    }else{
        mostrarExito(nombre);
        enviable++;
    }
//--------------------------
    if(emailValor === ''){
        mostrarError(email, 'Debe proporcionar un email');
    }else if(!isEmail(emailValor)){
        mostrarError(email, 'No ingreso un email valido');
    }else{
        mostrarExito(email);
        enviable++;
    }
//--------------------------
    if(asuntoValor === ''){
        mostrarError(asunto, 'No puede estar vacio');
    }else if(asuntoValor.length > 50){
        mostrarError(asunto, 'No puede haber mas de 50 caracteres');
    }else{
        mostrarExito(asunto);
        enviable++;
    }
    //--------------------------
    if(mensajeValor === ''){
        mostrarError(mensaje, 'No puede estar vacio');
    }else if(asuntoValor.length > 300){
        mostrarError(mensaje, 'No puede haber mas de 300 caracteres');
    }else{
        mostrarExito(mensaje);
        enviable++;
    }

    return enviable;
}


function mostrarError(input,mensaje){
    const formControl = input.parentElement; //el padre de input, es el div
    const small = formControl.querySelector('small'); //small dentro del div(padre de small)
    formControl.className = 'box-input error'; //la clase para activar el css
    small.innerText = mensaje; //le escribo el mensaje
}

function mostrarExito(input){
    const formControl = input.parentElement;
    formControl.className = 'box-input success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}