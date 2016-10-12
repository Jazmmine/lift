  $(document).ready(function() {
    $("select").material_select(); //materialize
    $("#celular-numero").keydown(teclas);
    $("#celular-numero").keyup(longitudNumero);

    function teclas(evento){
    	var ascii = evento.keyCode;
    	if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
    		return true;
    	}else{
    		return false;
    	}
    }	

    function longitudNumero(evento){
    	var longitud = $(this).val().length;
    	if (longitud == 9) {
    		$("#btn-next").attr("href", "index.html");
    	}else{
    		$("#btn-next").removeAttr("href");
    	}
    }
  });