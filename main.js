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

let opcion = prompt("¿Tienes gastos fijos mensuales? SI / NO").toLowerCase();

while(opcion!="no"){
     ingresarGastos()
};

function ingresarGastos(){
     let ingreseNombre = prompt("Ingresa el nombre del gasto");
     let ingreseMonto = parseFloat(prompt("Ingresa el monto."));
     const gastos = new Gasto (ingreseNombre, ingreseMonto);
     arregloGastos.push(gastos);
     opcion = prompt("¿Deseas agregar otro gasto? SI / NO").toLowerCase();
};

arregloGastos.forEach((Gasto) => {
     console.log(Gasto);
 });

totalGastos = arregloGastos.reduce((acumulador,elemento)=>acumulador+elemento.monto,0)
     console.log("Total: $" + totalGastos);

let ahorroDeseado;
let disponible= (sueldo - totalGastos);

while (sueldo <= totalGastos){
     alert("No te sobra nada, no vas a poder ahorrar :(");
};

ahorroDeseado = parseFloat (prompt ("¿Cuánto quieres ahorrar este mes?"));
const semanasDelMes = 4;

function calculoDisponible(valor1, valor2, valor3, valor4){
     resultado = (valor1 - valor2 - valor3) / valor4;
};

console.log(sueldo,totalGastos,ahorroDeseado,semanasDelMes)
calculoDisponible(sueldo, totalGastos, ahorroDeseado, semanasDelMes);

if (disponible <= ahorroDeseado){
     alert("Lo que quieres ahorrar es más de lo que tienes disponible, prueba con una cantidad menor :(");
} else {
     alert("Lo que puedes gastar por semana es $" + resultado);
};