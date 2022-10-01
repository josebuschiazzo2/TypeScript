/*Eureca*/

let count:number=0;
while(count<3){
  let password: string = prompt("Ingrese su contraseña");
  if (password!== "eureka") {
    count++;
    alert("Contraseña incorrecta. Tiene " + (3-count) + " intentos restantes");
  } else {
      count=3;
      alert ("Contraseña Correcta. Saliendo del programa");
    }
}
