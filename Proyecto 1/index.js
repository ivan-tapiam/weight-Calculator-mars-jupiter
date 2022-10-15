var usuario = prompt("Cual es tu peso?");
var planeta = prompt("Elige tu planeta\n 1 es Marte, 2 es Jupiter")
var peso = parseInt(usuario);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
var nombre;
if(planeta == 1)
{
    peso_final = peso * g_marte / g_tierra;
    nombre = "Marte";
}
else if(planeta == 2)
{
    peso_final = peso * g_jupiter / g_tierra;
    nombre = "Jupiter"
}
else 
{
    peso_final = 1000000
    nombre = "Kripton"
}
peso_final = parseInt(peso_final);
document.write("Tu peso en " + nombre + " es " + peso_final + " Kilos");