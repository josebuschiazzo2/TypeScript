let counter: number = 0;
let total_lap: number =0;

while (counter<4) {
  let lap:number = Number(prompt ("Ingrese tiempo de la vuelta " + counter));
  total_lap+=lap;                        
  counter++;
 }
console.clear();
console.log("El tiempo total fue de: " + total_lap + ". Con un tiempo promedio de: " + total_lap/4);
