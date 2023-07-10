const displayvaloranterior = document.getElementById('valor_anterior');
const displayvaloractual = document.getElementById('valor_actual');
const botones_numeros = document.querySelectorAll('.numero');
const botones_operadores = document.querySelectorAll('.operador');

// const calculadora= new Calculadora();
// console.log(calculadora.sumar(2,4));
// console.log("holacomo estas");


const display =new Display(displayvaloranterior, displayvaloractual);
botones_numeros.forEach(boton =>{
 boton.addEventListener('click', ()=>{
   display.agregarnumero(boton.innerHTML);   
 })   
}) 
botones_operadores.forEach(boton =>{
 boton.addEventListener('click', ()=>{
   display.operar(boton.value);   
 })   
}) 