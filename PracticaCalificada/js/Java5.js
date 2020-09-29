document.write("<h2>6.- Una planta que fabrica perfiles de hierro posee un lote de n piezas. Confeccionar un programa que pida ingresar por teclado la cantidad de piezas a procesar y luego ingrese la longitud de cada perfil; sabiendo que la pieza cuya longitud esté comprendida en el rango de 1,20 y 1,30 son aptas. Imprimir por pantalla la cantidad de piezas aptas que hay en el lote.</h2>");


var piezas;
var proceso;
var contPiezas;


piezas = parseFloat(prompt("Cuantas piezas van a realizar el proceso"));


for (var i = 1; i <= piezas; i++) {
	
	proceso = parseFloat(prompt("Longitud de la pieza: "));

	if (proceso >= 1.2 && proceso <= 1.3) {
		contPiezas++; 
	}else{
		contPiezas = contPiezas;
	}

	document.write("<h4>La pieza " + i + " mide: " + proceso + "</h4>");
}
document.write("<h4>La cantidad de piezas de 1.20 a 1.30 son: " + contPiezas + "</h4>");
