let user = document.querySelector('#email');
let password = document.querySelector('#password');
let button = document.querySelector('button');

function validar(){
    let todo_correcto = false;
    let expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if (expresion.test(user.value)){
        todo_correcto = true;
    }
    return todo_correcto;
}

button.addEventListener('click',validar);
