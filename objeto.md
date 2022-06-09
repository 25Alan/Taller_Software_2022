# OBJETO

## Qué es?
Hay dos formas de ver y entender, la forma teórica y de código. 

En Código es un conjunto de pares de claves con sus valores y funciones.
En la teoría es un paradigma de programación. (esto quiere decir una forma de resolver problemas).
 
 __Hay dos formas de crear, el objeto literal o simple como quieran llamarlo, y después tenemos el objeto con constructor.__

## Objeto literal o simple

Objeto llamado user, donde tiene sus propiedades.

```
const user = { 
  name : "Alan",  
	lastname : "Romero",
  age : 24,
  vector : ["alan","romero"],
  arreglo : {
      dirección : "Andangalá",
      hobbies : ["ajedrez","voley","viciar"]
  }
}
```

## Propiedades de objeto literal

Propiedades (Properties)  viene a ser dicho de forma teórica, pero en código son variables. 

Las propiedades pueden ser tanto datos primitivos, como arreglos, como otros objetos dentro del objeto y así. 

## Propósito de POO

Para solucionar problemas de forma que no se tenga repetir dichos códigos, un ejemplo más simple sería un banco con sus clientes, sabemos q todos son personas, pero con diferentes cualidades, fisico etc etc. Cliente sería el objeto, y todos los clientes nuevos van a partir de ese objeto, Objeto Cliente, salen cliente2, cliente3, etc.

## Métodos

También tienen funciones, En la teoría de POO las funciones serían los métodos. En códigos serían funciones.

```
const userfunction = { 
  name : "Alan", 
  lastname : "Romero",
  age : 24,
  vector : ["alan","romero"],
  mostraredad : function(){ //Acá tenemos una función
    return 24; 
  } 
}
```

**Cuando queremos acceder a propiedad especifica de un objeto sería así.**
```
console.log(userfunction.name); 
console.log(userfunction.mostraredad()) 
console.log(userobjeto.objeto) //muestro el objeto q tiene dentro. Osea un objeto dentro de otro objeto.
```

* **NOTA: Invocar funciones es con los parentesis puestos, referenciar es sin poner los parentesis**

## This

this = esto. 

```
const userobjetothis = {
  name : "Alan",   
  lastname : "Romero",
  age : 24, 
  vector : ["alan", "romero"],
  mostraredad : function(){ 
    return this.age; //Osea acá señalando que variable queremos de la q está dentro del objeto
  },

  // Dicho de paso una forma más simple de escribir un método es la siguiente. 

  mostrarnombreyapellido(){ //Sin poner function
    return `Me llamo ${this.name} ${this.lastname}`;
  }
}

console.log(userobjetothis.mostrarnombreyapellido())
```

## Constructor
Repasando, sabemos q para crear un nuevo objeto user instanciando, tenemos q ir poniendo un nuevo nombre y así por cada user q creamos. Por eso acá viene el "constructor".

La finalidad del constructor es ahorrar dichos pasos.

```
function Person(name,lastname){ //Esto sería un constructor, tiene parametros q abajo le decimos q donde van a ir a parar.
  
  'use strict' //esto se ve en la explicación del new
  this.name = name;
  this.lastname = lastname;
}
```

Así estamos formando cada objeto nuevo q se instancia desde este constructor

```
const persona1 = new Person("alan","romero");

console.log(persona1.name);

const persona2 = new Person("maria","lencina");

console.log(persona2.lastname);
```
## New

El **NEW** viene a ser el enlace del objecto nuevo con el constructor. 

user1 (nuevo objeto) -----> new User("alan"). Acá conecta con el constructor y como bien dice la documentación oficial en estos pasos lo hace.

1. Crea un objeto JavaScript simple y en blanco;
2. Vincula (establece el constructor de) este objeto a otro objeto;
3. Pasa el objeto recién creado del Paso 1 como el contexto this;
4. Devuelve this si la función no devuelve un objeto.

***NOTA : ¿QUÉ PASA SI NO USAMOS NEW? Es mejor ver esto en video así q explico como pueda y simple jeje.
Sucede que al no usar new, sale fuera del class que tiene el constructor, Osea por ejemplo tenemos una class así:*** 

```
class User{
  constructor (user){
    this.user = user;
  }
}

user1 = User("alan");
```
***Acá va a salir fuera del objeto y va a formar parte del window, de tal forma que se lo puede invocar desde el window.user1. Es por eso que en el objeto literal, por ejemplo como el siguiente :*** 
```
function Person(name,lastname){ 
  'use strict'  
  this.name = name;
  this.lastname = lastname;
}
```
***ACÁ APLICAMOS ESTO PARA OBLIGAR A QUE SE USE EL NEW DESDE AFUERA A LA HORA DE INTANCIAR***

## SUGAR SINTAX
Ahora veamos la forma más linda, o como se dice la sintaxis dulce de crear un objeto, y es mediante el "class"

**El class engloba todo el objeto, dentro vamos a tener el constructor, propiedades y métodos.**

```
class Persona { // Acá es usar una mayuscula en la inicial. 
  
  constructor
  constructor(name,lastname){
    this.name = name;
    this.lastname = lastname;
  }
  
	mostrarnombreyapellido(){
    return `Nombre : ${this.name} Apellido : ${this.lastname}`;
  }
  
}


const personaclass1 = new Persona('maria','romero');

console.log(personaclass1.name);


class Auto {
  
  el constructor si o si va con la palabra constructor. solo en español re raro jaja

  constructor(modelo,velocidad){ 
    this.modelo = modelo;
    this.velocidad = velocidad;
  }
  
  aumentarvelocidad(aumento){ si es un parametro
    this.velocidad = this.velocidad + aumento;
  }
}
const auto1 = new Auto(2022,100);

console.log(auto1.velocidad); esta en 100
auto1.aumentarvelocidad(200); aplico el metodo, sumando 200.
console.log(auto1.velocidad); y tenemos 300.
```
El class lo que viene a ser, básicamente como una fabrica de objecto, tenemos constructor, propiedades y métodos adentro.