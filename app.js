/* const process = require('process').argv;
const argv = process.argv; */

const argv = require('process').argv;
const operacion = argv[2];
const numberA = +argv[3];
const numberB = +argv[4];

/* requerimos el módulo calculadora */
const calculadora = require('./calculadora');

/* if(operacion === "sumar"){
    //console.log(numberA + numberB);
    console.log(calculadora.sumar(numberA,numberB));
}else if (operacion === "restar"){
    //console.log(numberA - numberB);
    console.log(calculadora.restar(numberA,numberB));
} else {
    console.log("Operación no reconocida");
} */