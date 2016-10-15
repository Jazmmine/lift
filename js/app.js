$(document).ready(function() {
    $("select").material_select(); //materialize
    $("#celular-numero").keydown(teclas);
    $("#celular-numero").keyup(longitudNumero);
    $("#btn-next").click(generarCodigo);


/*singup.html validando ingreso de solo numero*/
    function teclas(evento){
    	var ascii = evento.keyCode;
    	if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
            $("#btn-next").removeAttr("disabled");
    		return true;
    	}else{
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
    function longitudNumero(evento){
    	var $longitud = $(this).val().length;
    	if ($longitud == 9) {
    		$("#btn-next").attr("href", "codigo.html");
    	}else{
    		$("#btn-next").removeAttr("href");
    	}
    }

/*singup.html Generar y Guardar codigo -- Gurdar valor al ingresar numero de telefono*/
    function generarCodigo(){
        var longitudNumeroCelu = $("#celular-numero").val();
    	if (longitudNumeroCelu.length == 9) {
	    	var numeroRandom = Math.round(Math.random()*899)+100;
	    	var codigoLetra = "LAB-";
	    	var codigoCompleto = codigoLetra + numeroRandom;
            alert(codigoCompleto);
    	}else{
    		alert("Completar numero de telefono");
    	}
        localStorage.setItem("telefono",longitudNumeroCelu);
        localStorage.setItem("codigo", numeroRandom);
    }

/*Validando usuario.html*/

   
  });