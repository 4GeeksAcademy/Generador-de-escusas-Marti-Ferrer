import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};






function generarExcusa() {
  const sujetos = [
    "Mi perro",
    "El vecino",
    "Mi computadora",
    "El internet",
    "El despertador",
    "Mi jefe"
  ];

  const acciones = [
    "se comió",
    "rompió",
    "borró",
    "perdió",
    "apagó",
    "mojó"
  ];

  const objetos = [
    "mi tarea",
    "el archivo",
    "el proyecto",
    "el correo",
    "mi teléfono",
    "las llaves"
  ];

  const cuando = [
    "mientras dormia", 
    "cuando estaba en clase", 
    "cuando hacia ejercicio", 
    "jugando", 
    "mientras me duchaba"
  ];

  const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
  const accion = acciones[Math.floor(Math.random() * acciones.length)];
  const objeto = objetos[Math.floor(Math.random() * objetos.length)];
  const cuando = cuando[Math.floor(Math.random() * cuando.length)];

  return `${sujeto} ${accion} ${objeto} ${cuando}.`;
}

// Ejemplo de uso
console.log(generarExcusa());