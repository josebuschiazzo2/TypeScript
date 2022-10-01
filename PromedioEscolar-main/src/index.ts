/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información
*/


// declaro una Funciones para solicitar la cantidad de alumnos (hasta 10 alumnos, es la versión no paga jajja) 
// Tambien valido las nota por cada alumno, la position and name es solo para ponerlo en el prompt 
function noteStudent (position:number , Name:string):number
  {
    let itsnotnum: boolean = true; // lo pongo en true para obligar a entre en el chequeo 
    let num: number=0;
    while (itsnotnum) 
      {
       if (position<0) {
          num = Number(prompt("Ingrese la cantidad de Alumnos: "));
          } else {
              num = Number(prompt("Ingrese la Nota " + position + " del Alumno " + Name + " (de 0 a 10) " ));
              }
      if (isNaN(num) || num % 1 || num>10){
                alert("Solos se adminten un números entero entre el rango 0 y 10");
                } else {
                  itsnotnum = false;
                  return num;
                  }
      }
  }

//Empiezo con mi programa main
console.clear();
let countstudent: number = noteStudent(-1,"I dunno");
let NamesStudents: string[] = new Array (countstudent);
let note1:number[]= new Array (countstudent); //Las creo para mantener las notas (no hice matriz porque estabamos practivando vectores)
let note2:number[]= new Array (countstudent); //Las creo para mantener las notas 
let note3:number[]= new Array (countstudent); //Las creo para mantener las notas 
let averagenote: number[]= new Array (countstudent);

//ingreso todos los nombres
for (let i:number=0; i<countstudent ; i++)
  {
   NamesStudents[i] = String (prompt("Ingrese el nombre del alumno " + (i+1)));
  } 

//Pido las notas de cada alumno llamando a la función con sus nombres
for (let i:number=0;i<countstudent;i++)
{
 note1[i]= noteStudent(1,NamesStudents[i]); 
 note2[i]= noteStudent(2,NamesStudents[i]);
 note3[i]= noteStudent(3,NamesStudents[i]);
 averagenote[i]= (note1[i]+note2[i]+note3[i])/3;
}

for (let i:number=0;i<countstudent;i++)
{
  console.log("El promedio de " + NamesStudents[i] + " es: "+ averagenote[i].toPrecision(2));
}
/*let buscarUno: string = String(
  prompt(`Ingrese nombre a buscar promedio anual: `)
);
let aux1: number = alumnosIngresados.indexOf(buscarUno);

// validar si el nombre existe
while (aux1 === undefined) {
  console.log(` Apellido no encontrado vuelva a ingresar `);
  buscarUno = String(
    prompt(` vuelva a ingrese nombre a buscar promedio anual: `)
  );
  aux1 = alumnosIngresados.indexOf(buscarUno);
}/*
