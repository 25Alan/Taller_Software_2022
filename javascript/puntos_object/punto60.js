import { Suma } from '../../models/objeto.js';

function sumar(){
    const suma1 = new Suma(parseInt(inputNumber1.value),parseInt(inputNumber2.value));

    document.querySelector('#textTotal').innerHTML = `Total = ${suma1.sumar()}`
}

let inputNumber1 = document.querySelector('#num1');
let inputNumber2 = document.querySelector('#num2');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    sumar();
});




