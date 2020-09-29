
document.write("<h2>9.- En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.</h2>");

var nEmpleados;
var sueldos;
var importes;
var cobranM = 0, cobranm = 0;

nEmpleados = parseInt(prompt("Cuantos empleados estan: "));

for (var i = 1; i <= nEmpleados; i++) {
	
	sueldos = parseInt(prompt("Cuanto gana el empleado " + i + ": (recordar que sus sueldo es de 100$ a 500$)"));
	importes += sueldos;

	if (sueldos>300) {

		cobranM++;

	}else if(sueldos>=100 && sueldos<=300){

		cobranm++;

	}

	document.write("<h4>El empleado " + i + "cobra: " + sueldos + "</h4>"); 
}

document.write("<h4>Las personas que combran mas de 300$ son: " + cobranM + "</h4>");

document.write("<h4>Las personas que cobran entre 100$ y 300$ son: " + cobranm + "</h4>");










