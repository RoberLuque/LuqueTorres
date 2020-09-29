

document.write("<h2>8.- Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.</h2>");
var nalturas;
var suma = 0; 
var promedio;
var alturas;


nalturas = parseFloat(prompt("Ingresar cantidad de alturas que se quiera calcular"));

for (var i = 1; i <= nalturas; i++) {

	alturas = parseFloat(prompt("Altura " + i));
	suma += alturas;

	document.write("<h4>Altura " + i + ": " + alturas + "</h4>"); 
}
promedio = suma / nalturas;

document.write("<h4>El promedio es: " + promedio + "</h4>");