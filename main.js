alert("¡Hola! Esto es una calculadora de ahorro. Te indicará cuánto puedes gastar por semana para llegar a tu objetivo de ahorro mensual.");
let sueldo = parseFloat (prompt ("Indícame cuál es tu sueldo."));
alert("Te pediré que me indiques tus gastos fijos mensuales.");

class Gasto{
   constructor(nombre,monto){
        this.nombre = nombre;
        this.monto = monto;
    } 
}

const arregloGastos = [];
let totalGastos = 0;

let gastosAlquiler = {
     alquiler: parseFloat (prompt ("Ingresa el monto que pagas de alquiler")),
};
let gastosServicios = {
      electricidad: parseFloat (prompt ("Ingresa el monto que pagas de corriente eléctrica")),
      agua: parseFloat (prompt ("Ingresa el monto que pagas de agua")),
      internet: parseFloat (prompt ("Ingresa el monto que pagas de internet"))
};
let gastosVarios = {
     varios: parseFloat (prompt ("Si tienes, ingresa el monto de otros gastos mensuales")),
};

let opcion = prompt("¿Desea agregar un gasto?").toLowerCase()

while(opcion!="no"){
     ingresarGastos()
}

function ingresarGastos(){
     let ingreseNombre = prompt("Ingrese el nombre del gasto");
     let ingreseMonto = parseFloat(prompt("Ingrese el monto que gastó"))
     const gastos = new Gasto (ingreseNombre, ingreseMonto);
     arregloGastos.push(gastos)
     opcion = prompt("¿Desea agregar un gasto? SI / NO").toLowerCase()
}

console.log(arregloGastos);

function calcularTotal(array){
     let totalGastos = array.reduce((acumulador,elemento)=>acumulador+elemento.monto,0)
     console.log("Total: $" + totalGastos);
}

calcularTotal(arregloGastos)

let suma = 0;

for ( let i=0; i < arregloGastos.length; i++) {
     console.log(arregloGastos)
     suma += arregloGastos[i];
}

let ahorroDeseado;

while (sueldo <= suma){
     alert("No te sobra nada, no vas a poder ahorrar :(");
};
while ((sueldo - suma) <= ahorroDeseado) {
     alert("Lo que quieres ahorrar es más de lo que tienes disponible, prueba con una cantidad menor :(");
};

ahorroDeseado = parseFloat (prompt ("¿Cuánto quieres ahorrar este mes?"));
const semanasDelMes = 4;

function calculoDisponible(valor1, valor2, valor3, valor4){
     resultado = (valor1 - valor2 - valor3) / valor4;
}

function mostrar(mensaje){
    console.log(mensaje);
}
console.log(sueldo,suma,ahorroDeseado,semanasDelMes)
calculoDisponible(sueldo, suma, ahorroDeseado, semanasDelMes);
mostrar(resultado);
alert("Lo que puedes gastar por semana es $" + resultado);