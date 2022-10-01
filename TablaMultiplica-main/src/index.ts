/*Tabla de Multiplicación*/

let num:number= Number(prompt("Ingrese el número (entero) para la tabla"));
let until:number= Number(prompt("Ingrese hasta que Número (entero)"));

// pregunto primero si introdujo números y entero
if (isNaN(num) || isNaN(until) || (num%1) || (until%1)) {
  alert ("Solo son validos los números enteros");
}else {
  for (let i=0; i<(until+1); i++){
  console.log(num + "*" + i + "=" + (i*num));
    } 
  }
