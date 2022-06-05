import { Suma2, Suma3 } from '../../models/classSuma_60.js';

function sum(){
    const suma1 = new Suma2(parseInt(inputNumber1.value),parseInt(inputNumber2.value));

    console.log(suma1.sumar());

    const suma2 = new Suma3(parseInt(inputNumber1.value),parseInt(inputNumber2.value),1);
    
    document.querySelector('#textTotal').innerHTML = `Total = ${suma2.sumar()}`
}

let inputNumber1 = document.querySelector('#num1');
let inputNumber2 = document.querySelector('#num2');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    sum();
});