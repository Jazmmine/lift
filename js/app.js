$(document).ready(function() {
    $("select").material_select(); //materialize
    $(".button-collapse").sideNav(); //materialize
    $("#celular-numero").keydown(teclas);
 //   $("#celular-numero").keyup(longitudNumero);
    $("#btn-next").click(generarCodigo);
    $("#nombre").keydown(validandoUsuario);
    $("#apellido").keydown(validandoUsuario);
    $("#mail").keydown(validandoMailCaracteres);
    $("#mail").blur(validandoMail);

/*singup.html validando ingreso de solo numero*/
    function teclas(evento){
        var longitud = $(this).val().length;
    	var ascii = evento.keyCode;
    	if (ascii == 8 || (ascii >= 48 && ascii <= 57) && longitud <= 8) {
            $("#btn-next").removeAttr("disabled");
            $("#btn-next").attr("href", "codigo.html");
    		return true;
    	}else{
            $("#celular-numero").attr("disabled");
            $("#btn-next").removeAttr("href");
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

/*singup.html Solo 9 digitos*/
   /* function longitudNumero(evento){
        console.log(evento.key);
    	var longitud = $(this).val().length;
        var ascii = evento.keyCode;

    	if (longitud <= 8 || ascii == 8) {
    		$("#btn-next").attr("href", "codigo.html");
            return true;
    	}
        else if(longitud > 8){
            evento.target.blur();
            $("#celular-numero").attr("disabled");
    		$("#btn-next").removeAttr("href");
            return false;
    	}
    }*/
/*singup.html Generar y Guardar codigo -- Gurdar valor al ingresar numero de telefono*/
    function generarCodigo(){
        var longitudNumeroCelu = $("#celular-numero").val();
    	if (longitudNumeroCelu.length == 9) {
	    	var numeroRandom = Math.round(Math.random()*899)+100;
	    	var codigoLetra = "LAB-";
	    	var codigoCompleto = codigoLetra + numeroRandom;
            alert(codigoCompleto);
            $("#btn-next").attr("href", "codigo.html");
    	}else{
    		alert("Completar numero de telefono");
            $("#celular-numero").attr("disabled");
            $("#btn-next").removeAttr("href");
    	}
        localStorage.setItem("telefono",longitudNumeroCelu);
        localStorage.setItem("codigo", numeroRandom);
    }

/*Validando usuario.html*/
    function validandoUsuario(evento){
        console.log("validandoUsuario");
        console.log(evento); 
        var nAscii = evento.keyCode;
        var validarLetra = evento.key;
        var datos = $(this).val();
        var regex = /^[a-zA-Z\s]+$/;
        var resultadoValor = regex.test(validarLetra);
        console.log(resultadoValor);

        if ((datos.length <= 19 || nAscii == 8) && resultadoValor) {
             console.log(resultadoValor);
            return true;
        }
        else if (datos.length >= 20) {
            alert("Paso el maximo de caracteres permitidos");
            return false;
        }
        else if (!resultadoValor){
             console.log(resultadoValor);
            alert("solo letras");
            return false;
        }
    }

    function validandoMailCaracteres(evento){
        console.log("validandoMailCaracteres");
        console.log(evento); 
        var nAscii = evento.keyCode;
        var datos = $(this).val();

        if (datos.length <= 49 || nAscii == 8) {
            return true;
        }
        else if (datos.length >= 50) {
            alert("Paso el maximo de caracteres permitidos");
            return false;
        }
    }

    function validandoMail(evento){
        var datos = $(this).val();
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var resultadoValor = regex.test(datos);
        console.log(resultadoValor);
        if (resultadoValor) {
            return true;
        }
        else if (!resultadoValor){
            console.log(resultadoValor);
            alert("validar correo");
            return false;
        }        
    }
   
  });