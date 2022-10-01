/*Suma entre números*/

let total_serie:number=0;
let num_start:number= Number(prompt("Ingrese el número inicial (entero)"));
let num_end:number= Number(prompt("Ingrese el número final (entero)"));

// pregunto primero si introdujo números, entero y si el primero es menor al final
if (isNaN(num_start) || isNaN(num_end) || (num_start%1) || (num_end%1) || (num_start>num_end)){
  alert ("Solo son validos los números enteros. Donde el primero tiene que ser menor al segundo");
}else {
  for (let i=num_start; i<(num_end+1); i++){
    total_serie+=i;
    }
    console.log("el total es: "+total_serie); 
  }
