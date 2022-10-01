/*Multiplos:
Cree un método es Multiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero */

// Funciones a utilizar
function esMultiplo(first_num:number , second_num:number):boolean
{
  return ((first_num%second_num)===0);
}

//Empiezo con mi programa main
let greater_zero: boolean = true; // Lo uso para evaluar si es mayor a cero
console.clear();

//Bucle para obligarlo a que me ponga un número
while (greater_zero)
{
 let first_num: number = Number(prompt("Ingrese el primer número (entero) "));
 let second_num: number = Number(prompt("Ingrese el segundo número (entero) "));
  if (isNaN(first_num) || isNaN(second_num) || first_num % 1 || second_num % 1) 
  {
      alert("Solos se adminten un números enteros");
  } else {
        greater_zero = false;
        } // Salgo del bucle y llamo a la función para hacer saber si son multiplos
        
console.log ("El resultado es " + esMultiplo(first_num , second_num));
}
