/* Ejercicios de Repaso
Ejercicio – Personas en una Disco
• Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total
------------------------------
Si el aleatorio lo generás entre 16 y 40..
Cuántas personas quedan afuera?
Cuántas personas entran? Y de las que entran...cuántas tienen entre 18 y 21 años y cuántas más de 21?
En este último caso cobraría sentido la pregunta de cuanta gente en total entro, considerando que el límite es de 270 personas. (editado) 

*/

let age_people: number;
let people_inside: number=0;
let under_21: number=0;
let older_21: number=0;

console.clear();
for (let i :number = 0; i < 270; i++) 
{
  if (Math.round(Math.random() * (40-18)+18) < 21)
  {
    under_21++;
  } else
    {
      older_21++;
    }
}
console.log("Primer caso")
console.log("Los menores de 21 son: " + under_21 + " y los mayores o igual a 21 años son: " + older_21 + " de un total de 270 Personas");

//segundo caso
under_21=0;
older_21=0;
for (let i :number = 0; i < 270; i++) 
{
  age_people= Math.round(Math.random() * (40-16)+16);
  if ( age_people > 17)
  { 
    people_inside++;
    if (age_people < 21)
      { 
      under_21++;
      } else
        {
          older_21++;
        }
  }
}
console.log("Segundo caso")
console.log("Los menores de 21 son: " + under_21 + " y los mayores o igual a 21 años son: " + older_21 + " de un total de " + people_inside + " Personas");
