
document.write("<h2>3.-Calcular el promedio de un alumno que tiene 7 calificaciones en la materia de JavaScript.</h2>");


var nota;
var i=1;
var suma = 0;
var promedio;



for (var i = 1; i<=7; i++) {
	
	nota = parseInt(prompt("nota numero " + i)); 

	suma += nota;
	

	document.write("<h4>Nota " + i + ": " + nota +"</h4>");	
}
promedio = suma / 7;
	document.write("<h4>El promedio de las 7 notas es: " + promedio + "</h4>");

