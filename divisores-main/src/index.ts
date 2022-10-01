/*Divisores:
Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior*/

// Funciones a utilizar
function esMultiplo(first_num:number , second_num:number):boolean
{
  if (first_num%second_num)
    {
    return false;
    } else {
        return true;
        } 
}

//Empiezo con mi programa main
let greater_zero: boolean = true;     // Lo uso para evaluar si es mayor a cero
let counter:number=0;                 //1* empiezo en el contador en 0 para contemplar el caso de 0 

console.clear();

//Bucle para obligarlo a que me ponga un número
while (greater_zero)
{
 let first_num: number = Number(prompt("Ingrese un número (entero)"));
   if (isNaN(first_num) || first_num % 1 ) 
  {
      alert("Solos se adminten un números enteros");
  } else {
        greater_zero = false;
        } // Salgo del bucle y llamo a la función para hacer saber si son multiplos
        
for (let i:number=0;i<first_num;i++)    
{
  if (esMultiplo(first_num,i))
    { 
    counter++;
    }
}
        console.log ("La cantidad de divisores son " + counter);
}
