/*Aumento de sueldo*/

/* defino las constantes de aumento de sueldo*/
const increase1 = 0.20;
const increase2 = 0.10;
const increase3 = 0.05;


let salary:number= Number(prompt("Ingrese su salario (sin signo de moneda ni coma)"));

// pregunto primero si introdujo un número
if (isNaN(salary))
  {
  alert ("Solo son validos los números");
  } else {
      if (salary<15001)
        { console.log("Su salario se incrementa un 20%, quedando el mismo en " + (salary*(1+increase1)).toFixed(2)); // recorto a 2 unidades despues de la coma 
        } else {
            if (salary<20001)
              {console.log("Su salario se incrementa un 10%, quedando el mismo en " + (salary*(1+increase2)).toFixed(2)); // recorto a 2 unidades despues de la coma
              } else {
                  if (salary<25001)
                  {console.log("Su salario se incrementa un 5%, quedando el mismo en " + (salary*(1+increase3)).toFixed(2)); // recorto a 2 unidades despues de la coma
                  } else {
                    console.log("Su salario momentaneamente no tiene incremento");
                      } 
                }
            }

        }
