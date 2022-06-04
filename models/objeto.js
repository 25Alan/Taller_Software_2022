export class Suma{

    /**
     * 
     * @param {number} a Número 1 a sumar
     * @param {number} b Número 2 a sumar
     */
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    /**
     * 
     * @returns Muestra las variables del objeto
     */
    getSuma(){
        return `El objeto tiene los números ${this.a} y ${this.b}`;
    }

    /**
     * 
     * @param {number} a Número para cambiar el primer valor del objecto
     * @param {number} b Número para cambiar el segundo valor del objecto
     */
    setSuma(a,b){
        this.a = a;
        this.b = b;
    }

    /**
     * 
     * @returns {number} Devuelve la suma ya hecha
     */
    sumar(){
        return (this.a + this.b);
    }
}
