var nombre ="Alejandro";
alert (nombre);

var edad = 30;

if(edad >= 18){
  alert("Es mayor de edad");
} else {
  alert("Es menor de edad");
}

var sabores_de_empanada = ["carne", "pollo", "verdura"];

sabores_de_empanada[3] = "cebolla";

console.log(sabores_de_empanada);

var marcas = ["Apple", "Google", "Twitter", "Facebook", "Youtube", "Vimeo"];
var cantidad_de_marcas = marcas.length;
alert(cantidad_de_marcas);

var libros = ["El principito","El psicoanalista","El ruido y la furia"];
libros.forEach(function (libros){
  console.log(libros);});