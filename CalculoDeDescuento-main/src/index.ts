/*Ejercicio – Descuento Octubre
• Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
• Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no*/

const oct_off:number= 0.15;

let unit_price: number = Number(prompt("Indique el precio unitario de la compra:"));
let lot: number = Number(prompt("Indique la cantidad comprada:"));
let month_num: number = Number (prompt("Indique el número de mes:"));

if (month_num===10) {
alert("Felicidades tiene un descuento del 15%");
console.log("Su descuento es de $" + unit_price*lot*oct_off + ". Debe abonar $" + unit_price*lot*0.85);
} else {
console.log("Debe abonar $" + unit_price*lot);
}
