
document.write("<h2>7.- Escribir un programa que solicite ingresar 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.</h2>");

var mayor = 0;
var menor = 0;
var notas;

for (var i = 1; i <= 10; i++) {
	notas = parseFloat(prompt("Ingrese nota " + i + ": "));

	if (notas>=7) {
		mayor++;
	}else{
		menor++;
	}
document.write("<h4>La nota " + i + " es: " + notas + "</h4>");

}

document.write("<h4>Las notas mayores o iguales a 7 son: " + mayor + "</h4>");
document.write("<h4>Las notas menores son: " + menor + "</h4>");


