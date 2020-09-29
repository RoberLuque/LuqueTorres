document.write("<h2>5- Desarrollar un programa que permita la carga de 10 valores por teclado y nos muestre posteriormente la suma de los valores ingresados y su promedio.</h2>");



var valor;
var suma = 0;
var promedio;



for (var i = 1; i<=10; i++) {
	
	valor = parseInt(prompt("valor numero " + i)); 

	suma += valor;
	

	document.write("<h4>valor " + i + ": " + valor + "</h4>");	
}
promedio = suma / 10;
	document.write("<h4>La suma de los valores es: " + suma + "</h4>");
	document.write("<h4>El promedio de los 10 valores es: " + promedio + "</h4>");

