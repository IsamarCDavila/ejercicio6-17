function calcular(){
	var numA=document.getElementById("numero_a").value;
	var numB=document.getElementById("numero_b").value;
	var salida=document.getElementById("salida");

	var suma=parseInt(numA)+parseInt(numB);
	if(numA==10 || numB==10 || suma==10){
		salida.innerHTML="1";
	}else{
		salida.innerHTML="0";
	}
}