function saluda1(){
    alert("HOLA SOY EL BOTÓN 1");
}
function saluda2(){
    alert("HOLA SOY EL BOTÓN 2");
}
function saluda3(){
    alert("HOLA SOY EL BOTÓN 3");
}


let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");

button1 = addEventListener("click",saluda1);
button2 = addEventListener("click",saluda2);
button3 = addEventListener("click",saluda3);
