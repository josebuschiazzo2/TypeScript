/*Invertir arreglo:
Almacene en un arreglo de tamaño N los números ingresados por el usuario
La dimensión N también es ingresada por el usuario
Muestre los números del arreglo pero del último al primero*/


// declaro una Funciones para solicitar el valor y validar el dato ingresado o pedirle de nuevo
function isnumber (position:number):number
  {
    let itsnotnum: boolean = true; 
    let num: number=0;
    while (itsnotnum) 
      {
      
        if (position<0) {
          num = Number(prompt("Ingrese el largo del vector "));
          } else {
              num = Number(prompt("Ingrese un número de la posición " + position));
              }
      if (isNaN(num) || num % 1){
                alert("Solos se adminten un números enteros");
                } else {
                  itsnotnum = false;
                  return num;
                  }
      }
  }

//Empiezo con mi programa main
console.clear();
let longvector: number = isnumber(-1);
let vector:number[] = new Array (longvector);
for (let i: number = 0; i <longvector; i++)                                //Cargo los datos
  {
    vector[i]=isnumber(i+1);
  }
  console.log("el vector invertido es: ");
  for (let n:number= (longvector-1) ; n>=0 ; n--)
  {
    console.log(vector[n]);
  }
