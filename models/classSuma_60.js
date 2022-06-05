export class Suma2{

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
    getSuma2(){
        return `El objeto tiene los números ${this.a} y ${this.b}`;
    }

    /**
     * 
     * @param {number} a Número para cambiar el primer valor del objecto
     * @param {number} b Número para cambiar el segundo valor del objecto
     */
    setSuma2(a,b){
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


export class Suma3 extends Suma2{

    /**
     * 
     * @param {number} num1 Primer número
     * @param {number} num2 Segundo número
     * @param {number} num3 Tercer número
     */
    constructor(num1,num2,num3){
        super(num1,num2);
        this.num3 = num3;
    }

    /**
     * 
     * @returns Muestra el tercer número agregado
     */
    getSuma3(){
        return this.num3;
    }

    /**
     * 
     * @param {number} numNew Cambia el tercer número del objecto
     */
    setSuma3(numNew){
        this.num3 = numNew;
    }
    /**
     * 
     * @returns suma de las 3 variables por medio de la herencia de class Suma2
     */
    sumar(){
        return (super.sumar() + this.num3);
    }
}