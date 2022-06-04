let form = document.querySelector('#form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let validados = false;

    let name_surname = document.querySelector('#name_surname');
    let dni = document.querySelector('#dni');
    let selectProv = document.querySelector('[name="selectProvincias"]');
    let selectGen = document.querySelector('input[name=gender]:checked');
    let selectTramite = document.querySelectorAll('input[name=tramite]:checked');
    let salida = [];
    selectTramite.forEach((checkbox) => {
        salida.push(checkbox.value);    
    });

    
    if(/^[a-zA-Z]*$/.test(name_surname.value)){
        validados = true;
    }

    if(/^[0-9]{5,12}$/.test(dni.value)){
        validados = true;
    }

    if(selectProv.value != 0){
        validados = true;
    }

    if(validados === true){
        document.querySelector('#textValid').innerHTML = `
        Nombre y Apellido : ${name_surname.value} || 
        D.N.I. : ${dni.value} ||
        Provincia : ${selectProv.value} ||
        Genero : ${selectGen.value} ||
        Trámite : ${salida}`;
    }else{
        document.querySelector('#textValid').innerHTML = "NO ESTÁ INGRESADOS CORRECTAMENTE LOS CAMPOS";
    }    
});










/*  
let validarnombre = /^[a-zA-Z]*$/;
if(validarnombre.test(name_surname.value)){
    console.log("Nombre valido"); 
}
else{ console.log("Nombre invalido");}

*/