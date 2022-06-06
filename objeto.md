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

# This

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
## NEW



Ahora veamos la forma más linda, o como se dice la sintaxis dulce de crear un objeto, y es mediante el "class"

**El class engloba todo el objeto, dentro vamos a tener el constructor, propiedades y métodos.**

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
