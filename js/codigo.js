$(document).ready(function() {
	/*Obtener datos almacenados*/
	var celular = localStorage.getItem("telefono");
	/*Mostrar datos Almacenados*/
	$("#fono").text(celular);

	$("#segundo_codigo").keydown(codigoValidando);
	$("#tercer_codigo").keydown(codigoValidando);
	$("#cuarto_codigo").keydown(codigoValidando);
	$("#segundo_codigo").keyup(codigoSiguiente1);
	$("#tercer_codigo").keyup(codigoSiguiente2);
	$("#cuarto_codigo").keyup(codigoSiguiente3);
	//$("#segundo_codigo").keypress();
	//$("#tercer_codigo").keypress();
	//$("#cuarto_codigo").keypress(codigoAtras2);

	function codigoValidando(evento){
    	var numeroAscii = evento.keyCode;
    	if (numeroAscii == 8 || (numeroAscii >= 48 && numeroAscii <= 57)) {
            $("#btn-next-codigo").removeAttr("disabled");
			return true;
    	}else{
    		return false;
    	}
	}

	function codigoSiguiente1(evento){
		var codigo = $(this).val().length;
		if (codigo == 1) {
			console.log(codigo);
			evento.target.blur();
			$(".focus-codigo1").next().children().focus();
			return true;
		}else{
			return false;
		}
	}
	function codigoSiguiente2(evento){
		var codigo = $(this).val().length;
		if (codigo == 1) {
			console.log(codigo);
			evento.target.blur();
			$(".focus-codigo2").next().children().focus();
			return true;
		}else{
			return false;
		}
	}
	function codigoSiguiente3(evento){
		var codigo = $(this).val().length;
		if (codigo == 1) {
			console.log(codigo);
			evento.target.blur();
			return true;
		}else{
			return false;
		}
	}

	/*function codigoAtras2(evento){
		var ascii = evento.keyCode;
		if (ascii == 8 ) {
			console.log(codigo);
			$("#tercer_codigo").focus();
			return true;
		}else{
			return false;
		}
	}*/
});