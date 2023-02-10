/*Ejercicio
vamos a pedir al usuario que ingrese la cantidad alumnos a los cuales les asignará una nota, luego de que ingrese la catidad de notas de cada alumnos, se va a desplegar un menú.
las opciones del menú serán la siguentes:
1.- mostrar el promedio de notas
2.- mostrar si la nota es aprobatoria o reprobatoria
3.- mosatrar si la nota está por sobre o por debajo del promedio del curso
*/



const notas = [];
let notaAprueba = 4;
//pedimos cantiadad de alumnos al usuario
let cantidadAlumnos = parseInt(prompt("Ingresa la cantidad de alumnos: "));
//guardamos las notas en el array notas
for (let i = 0; i < cantidadAlumnos; i++) {
  let notaAlumno = 0;
  do {
    notaAlumno = parseFloat(prompt("Ingresa nota del alumno " + (i + 1) + " : "));
    
  } while (notaAlumno > 7 || notaAlumno < 1)
  notas.push(notaAlumno);
}
/*if (isNaN(notaAlumno)){
      console.log("Ingresa una nota");
      break;
    }*/


// creamos las funciones a llamar para luego ocupar en el menu 
// sacamos el promedio de notas del curso
function promedio(arregloNotas) {
  let sumador = 0;
  for (let i = 0; i < arregloNotas.length; i++) {
    sumador = sumador + arregloNotas[i];
  }
  return sumador / arregloNotas.length;
}

//console.log("el promedio de notas es: " + promedio(notas));
// revisamos si la nota del alumno aprueba o reprueba 
function apruebaReprueba(arregloNotas) {
  //console.table(arregloNotas);
  for (let i = 0; i < arregloNotas.length; i++) {
    //console.log("la nota es: " + notas)
    if (arregloNotas[i] >= notaAprueba) {
      console.log("La nota del alumno " + (i + 1) + " es: " + arregloNotas[i] + " por lo tanto aprueba ");

    }
    else {
      console.log("La nota del alumno " + (i + 1) + " es: " + arregloNotas[i] + " por lo tanto reprueba ");
      // console.log("la nota es: " + notas)
    }
  }
}
//apruebaReprueba(notas);

// revisamos si la nota del alumno esta por sobre o por debajo del promedio

function sobreDebajo(arregloNotas) {

  for (let i = 0; i < arregloNotas.length; i++) {
    if (arregloNotas[i] >= promedio(arregloNotas)) {
      console.log("La nota del alumno " + (i + 1) + " es: " + arregloNotas[i] + " por lo tanto esta sobre el promedio ");
    }
    else {
      console.log("La nota del alumno " + (i + 1) + " es: " + arregloNotas[i] + " por lo tanto esta debajo del promedio ");
    }
  }
}

// sobreDebajo(notas);

// creamos el menu 
let opcion = 0;
console.log("-------- MENU --------");
console.log(" 1.- Sacar el promedio de notas\n 2.- Revisar si aprobo o reprobro el alumno\n 3.- Revisar si el alumno esta por sobre o debajo del promedio general del curso\n 4.- Salir");

do {
  opcion = parseInt(prompt("Ingresa tu opcion"));
  console.log("-------- Respuesta  --------");
  switch (opcion) {
    case 1:
      console.log("El promedio de notas del curso es de: " + promedio(notas));
      break;
    case 2:
      apruebaReprueba(notas);
      break;
    case 3:
      sobreDebajo(notas);
      break;
    case 4:
      console.log("gracias, hasta pronto");
  }
  console.log("---------------------------");

} while (opcion != 4);






















