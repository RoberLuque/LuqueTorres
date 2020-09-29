document.write("<h2>4.- Escribir un programa que solicite la carga de un valor positivo y nos muestre desde 1 hasta el valor ingresado de uno en uno. Ejemplo: Si ingresamos 30 se debe mostrar en pantalla los números del 1 al 30.</h2>");


var cant;


cant= parseInt(prompt("Cuantos numeros quieres que se muestre?"));

document.write("<h4>");

for (var i = 1; i <= cant; i++) {
	
	document.write(i + " - ");

}
document.write("</h4>");