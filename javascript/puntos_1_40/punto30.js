function suma(){
    const NUMBER1 = parseInt(document.querySelector('#num1').value);
    const NUMBER2 = parseInt(document.querySelector('#num2').value);

    let iguales = false;
    if(NUMBER1 === NUMBER2){
        iguales = true;
    }

    if(isNaN(NUMBER1) || isNaN(NUMBER2)) return alert("VALORES INGRESADOS INCORRECTOS");
    else return alert("SON IGUALES?? : " + iguales + " ||| LA SUMA ES = " + (NUMBER1 + NUMBER2));
}

const BUTTON = document.getElementById('button');

BUTTON.addEventListener('click', suma);