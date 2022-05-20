const form = document.querySelector('#form');
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    sumatoriaPersonas();
});


function sumatoriaPersonas(){
    let suma = 0;
    let selectVehiculo = document.querySelector('[name="selectVehiculo"]').value;
    let cantMayores = document.querySelector('#cantMayores').value;
    let cantMenores = document.querySelector('#cantMenores').value;

    if(selectVehiculo != 0){
        if(selectVehiculo === "Auto"){
            suma = 2;    
        }
        if(selectVehiculo === "Camioneta"){
            suma = 3;
        }
        if(selectVehiculo === "Otro"){
            suma = 4;
        }
    }
    if(cantMayores > 0 || cantMenores > 0){
        suma += (cantMayores*1.50);
    }

    let selectPago = document.querySelector('input[name="pagoElegido"]:checked');
    
    switch (selectPago.value) {  
        case "visa1":
        case "master2":
                suma += (suma*10/100);
            break;
        case "visa2":
        case "master3":
                suma += (suma*25/100);
            break;
        case "visa3":
                suma += (suma*35/100);
            break;
        case "master1":
                suma += (suma*5/100);
            break;
    }

    let selectComida = document.querySelector('[name="selectComida"]').value;
    let inputCantComida = document.querySelector('#cantComida').value;
    let selectComidaOpcional = document.querySelectorAll('input[name="selectComidaOpcional"]:checked');
    let checkedComidaOpc = [];
    selectComidaOpcional.forEach((checkbox) =>{
        checkedComidaOpc.push(checkbox.value);
    });

    if(selectComida != 0){
        if(inputCantComida > 0){
            if(selectComida == 1) suma += (1.5*inputCantComida);
            if(selectComida == 2 || selectComida == 3) suma += (2*inputCantComida);
        }
    }     
    
    if(checkedComidaOpc.length > 0){
        for(let i = 0; i < checkedComidaOpc.length;i++){
            if(checkedComidaOpc[i] === "Gaseosa") suma += 1;
            else suma += 0.5;
        }        
    }

    let textTotal = document.createElement("p");
    document.body.appendChild(textTotal);
    textTotal.innerHTML = `TOTAL A PAGAR = $${suma}`;
}