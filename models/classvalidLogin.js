export class Login{

    /**
     * 
     * @param {string} user User
     * @param {string} password Password
     */
    constructor(user,password) {
        this.user = user;
        this.password = password;
    }

    /**
     * 
     * @param {string} user User of form
     * @returns {boolean}
     */
    validUser(){
        let valid = /^[a-zA-Z0-9]*$/
    
        if (valid.test(this.user)) return true;
        else return false;
    }
}