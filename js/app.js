  $(document).ready(function() {
    $("select").material_select(); //materialize
    $("#celular-numero").keydown(teclas);
    $("#celular-numero").keyup(longitudNumero);
    $("#btn-next").click(generarCodigo);

    function teclas(evento){
    	var ascii = evento.keyCode;
    	if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
            $("#btn-next").removeAttr("disabled");
    		return true;
    	}else{
    		alert("ingresar digitos");
    		return false;
    	}
    }	
/*
    function teclas(evento){
        var telefono = evento.currentTarget;
            console.log(evento.key);
        var valorTelefono = telefono.value;
            console.log("-------------:" + valorTelefono);
        var resultado = parseInt(valorTelefono);
            console.log(resultado);
        if (resultado != undefined) {
            console.log("numero");
            return true;
        }else{
            console.log("letra");
            return false;
        }
        
    }*/

    function longitudNumero(evento){
    	var $longitud = $(this).val().length;
    	if ($longitud == 9) {
    		$("#btn-next").attr("href", "codigo.html");
    	}else{
    		$("#btn-next").removeAttr("href");
    	}
    }

    function generarCodigo(evento){
    	//var longitudNumeroCelu = document.getElementById("celular-numero").value;
        var $longitudNumeroCelu = $("#celular-numero").val();
    	if ($longitudNumeroCelu.length == 9) {
	    	var numeroRandom = Math.round(Math.random()*899)+100;
	    	var codigoLetra = "LAB-";
	    	var codigoCompleto = codigoLetra + numeroRandom;
	    		alert(codigoCompleto);
    	}else{
    		alert("Completar numero de telefono");
    	}

    }
    /*formulario*/
    var btn = document.getElementById("boton");
    var nombre = document.getElementById("input-form1");
    var correo = document.getElementById("input-form2");
    var texto = document.getElementById("textarea-form");


    btn.addEventListener("click", function(event){
        event.preventDefault();
        validarForm();
    });

    nombre.addEventListener("focus", function(){
        var cuadroNegro = document.getElementById("mensaje-error-nombre");
        cuadroNegro.className = "ocultar";
    });
    
    correo.addEventListener("focus", function(){
        var cuadroNegro = document.getElementById("mensaje-error-correo");
        cuadroNegro.className = "ocultar";      
    });

    
    texto.addEventListener("focus", function(){
        var cuadroNegro = document.getElementById("mensaje-error-texto");
        cuadroNegro.className = "ocultar";      
    });

    nombre.addEventListener("blur", function(){
        validarNombre(nombre);
    });

    correo.addEventListener("blur", function(){
        validarCorreo(correo);
    });

    texto.addEventListener("blur", function(){
        validarTextarea(texto);
    });     


    function validarForm(){
        validarNombre(nombre);
        validarCorreo(correo);
        validarTextarea(texto);
    }



var validarNombre = function(nombre){
    var cuadroNegro = document.getElementById("mensaje-error-nombre");
    // Validar un campo de texto obligatorio //
    if (nombre.value == null || nombre.value == 0 || /^\s+$/.test(nombre.value) ) {
        cuadroNegro.innerHTML = "Debe ingresar su nombre";
        cuadroNegro.className = "mostrar";
    }

    // Validar un campo de texto nombre solo caracteres nombre//
    else if ( /^[a-z][a-z]*/.test(nombre.value)==false ) {  
        cuadroNegro.innerHTML = "Debe ingresar su caracteres correctos";  
        cuadroNegro.className = "mostrar";   
    };
};

var validarCorreo = function(correo){
    var cuadroNegro = document.getElementById("mensaje-error-correo");
    // Validar un campo de texto obligatorio //
    if (correo.value == null || correo.value == 0 || /^\s+$/.test(correo.value) ) {
        cuadroNegro.innerHTML = "Debe ingresar su correo";   
        cuadroNegro.className = "mostrar";   
    }

    //  Validar una dirección de email//
    else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo.value)) ) {
        cuadroNegro.innerHTML = "Formato de correo incorrecto";  
        cuadroNegro.className = "mostrar";         
    };
};

var validarTextarea = function(texto){
    var cuadroNegro = document.getElementById("mensaje-error-texto");
    // Validar un campo de texto obligattextoorio //
    if (texto.value == null || texto.value == 0 || /^\s+$/.test(texto.value) ) {
       cuadroNegro.innerHTML = "Debe ingresar mensaje"; 
       cuadroNegro.className = "mostrar";
    };           
}
  });