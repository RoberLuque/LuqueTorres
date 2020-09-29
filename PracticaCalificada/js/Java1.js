document.write("2.- En una fabrica de computadoras se planea ofrecer a los clientes un descuento que dependerá del numero de computadoras que compre. Si las computadoras son menos de cinco se les dará un 10% de descuento sobre el total de la compra; si el numero de computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de descuento; y si son 10 o mas se les da un 40% de descuento. El precio de cada computadora es de $1000");



var com;
var monto;
var final;
var descuento;

com = parseInt(prompt("Ingrese la cantidad de computadoras que desea comprar"));
monto = parseInt;
final = parseInt;

monto = com * 1000;

document.write("<h4>Cantidad de Computadoras compradas: " + com + "</h4>");
document.write("<h4>Cuanto Costara las " + com + " Computadoras: " + monto +"</h4>");


if(com<5){
	final = (monto - (monto * 0.10));
	descuento = "10%";
	document.write("<h4>El descuento es de: " + descuento + "</h4>");
	document.write("<h4>Cuanto tendra que pagar: " + final + "</h4>");
}else if(com>=5 && com<10){
	final = (monto - (monto * 0.20));
	descuento = "20%";
	document.write("<h4>El descuento es de: " + descuento + "</h4>");
	document.write("<h4>Cuanto tendra que pagar: " + final + "</h4>");
}else{
	final = (monto - (monto * 0.40));
	descuento = "40%";
	document.write("<h4>El descuento es de: " + descuento + "</h4>");
	document.write("<h4>Cuanto tendra que pagar: " + final + "</h4>");
}




