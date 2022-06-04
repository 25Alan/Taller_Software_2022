function verificar(){
    let number = document.querySelector('#num');
    
    if(number.value <= 50) number.value = 4800;
    else if(number.value > 50 && number.value <= 100) number.value = 3500;
    else if(number.value >100) number.value = 3200;
    else number.value = 0;

    document.querySelector('#result').innerHTML = `EL PRECIO TOTAL A PAGAR ES = ${number.value} PESOS`;
}

document.getElementById('num').onchange = verificar;