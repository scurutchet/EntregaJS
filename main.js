alert("¡Hola! Esto es una calculadora de ahorro. Te indicará cuánto puedes gastar por semana para llegar a tu objetivo de ahorro mensual.");
let sueldo = parseFloat (prompt ("Indícame cuál es tu sueldo."));
alert("Te pediré que me indiques tus gastos fijos mensuales.");

class GastosFijos{
   constructor(gastosAlquiler,    gastosServicios, gastosVarios){
        this.gastosAlquiler = gastosAlquiler;
        this.gastosServicios = gastosServicios;
        this.gastosVarios = gastosVarios;
    } 
}

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

const gastos = new GastosFijos (gastosAlquiler, gastosServicios,gastosVarios);

const arregloGastos = [];
arregloGastos.push(gastosAlquiler, gastosServicios,gastosVarios);

console.log(arregloGastos);

let suma = 0;

for ( let i=0; i < arregloGastos.length; i++) {
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

calculoDisponible(sueldo, suma, ahorroDeseado, semanasDelMes);
mostrar(resultado);
alert("Lo que puedes gastar por semana es $" + resultado);