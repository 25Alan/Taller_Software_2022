import { Login } from "../../models/classvalidLogin";

const user1 = new Login("alan","password");

const form = document.querySelector('#Form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("hola");
})