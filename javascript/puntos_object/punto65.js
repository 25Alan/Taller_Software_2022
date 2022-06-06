import { Login } from "../../models/classvalidLogin";

const user1 = new Login("alan","password");

console.log(user1.validUser());