/*Ejercicio – Par/Impar
• Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
• En el caso de ser 0 (cero) el algoritmo deberá
informarlo*/

let greater_zero:boolean=true;

console.clear();
while (greater_zero){
  let num : number = Number (prompt("Ingrese el numero a evaluar"));
  // pregunto primero si introdujo números, entero y si es mayor a 0
  if (isNaN(num) || (num%1) || (num===0)){
    alert("solos entero mayor a 0");
    } else {
        greater_zero=false;
        if (num%2===0) { 
          console.log ("Su número es Par");
          } else {
         console.log ("Su número es impar");
              }
        }
  }
