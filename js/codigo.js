$(document).ready(function() {
	/*Obtener datos almacenados*/
	var celular = localStorage.getItem("telefono");
	var codigoRandom = localStorage.getItem("codigo"); 
	/*Mostrar datos Almacenados*/
	$("#fono").text(celular);

	$("#segundo_codigo").keydown(codigoValidando);
	$("#tercer_codigo").keydown(codigoValidando);
	$("#cuarto_codigo").keydown(codigoValidando);
	$("#segundo_codigo").keyup(codigoSiguiente);
	$("#tercer_codigo").keyup(codigoSiguiente);
	$("#cuarto_codigo").keyup(codigoSiguiente);
	$("#resend_code").click(reenviarCodigo);
	$("#btn-next-codigo").click(validarCodigo);

	function codigoValidando(evento){
    	var numeroAscii = evento.keyCode;
    	var codigo = $(this).val();
    	if (numeroAscii == 8 || (numeroAscii >= 48 && numeroAscii <= 57 && codigo == "")) {
            $("#btn-next-codigo").removeAttr("disabled");
			return true;
    	}else{
    		return false;
    	}
	}

	/*function codigoSiguiente1(evento){
		var codigo = $(this).val().length;
		if (codigo == 1) {
			console.log(codigo);
			//evento.target.blur();
			$("#focus-codigo1").next().children().focus();
			return true;
		}else{
			return false;
		}
	}*/

	function codigoSiguiente(evento){
		var codigo = $(this).val().length;
		var ascii = evento.keyCode;

		if (codigo == 1) {
			console.log(codigo);
			//evento.target.blur();
			$(this).parent().next().children().focus();
			//return true;
		}
		else if(ascii == 8){
			$(this).parent().prev().children().focus();
			//return true;
		}
	}
	function reenviarCodigo(){
		alert("Su código es: " + codigoRandom);
	}
	function validarCodigo(){
		var segundoInput = $("#segundo_codigo").val();
		var tercerInput = $("#tercer_codigo").val();
		var cuartoInput =  $("#cuarto_codigo").val();
		var inputTotal = segundoInput + tercerInput + cuartoInput;
			console.log(inputTotal);
		if (inputTotal == codigoRandom) {
			$("#btn-next-codigo").attr("href","usuario.html");
		}
		else if (inputTotal == "") {
			alert("Ingrese su código");
		}
		else{
			alert("Código inválido");
		}
	}

	
});