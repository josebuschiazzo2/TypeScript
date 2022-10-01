/*Ejercicio – Mayor de Tres
• Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres*/
let mayor: number=0;

for (let i=1; i<4; i++){
  let num_in : number = Number (prompt ("Ingrese el N°" + i));
  if (mayor<num_in) {
    mayor=num_in;
  }
}
console.clear();
console.log("El número mayor es: " + mayor);
