const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const cap = document.querySelector('button');

function show(){
    alert("Valor input 1 =" + num1.value+" || " + "Valor input 2 =" + num2.value);
}

cap.onclick = show;