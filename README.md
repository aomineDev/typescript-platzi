# TypeScript - Platzi

<div align="center">
  <img src="./md/typescript.png" width="300" alt="typescript"/>
  <h3>Typescript by aomine</h3>
</div>

## Index
- [Entorno de desarrollo](#entorno-de-desarrollo)
  - [Compilador](#compilador)
- [Tipado en TypeScript](#tipado-en-typescript)
  - [Explícito](#explícito)
  - [Inferido](#inferido)
- [Tipos básicos](#tipos-básicos)
  - [Tipos primitivos](#tipos-primitivos)
  - [Number](#number)
  - [Boolean](#boolean)
  - [String](#string)
  - [Any](#any)
  - [Void](#void)
  - [Never](#never)
  - [Null y Undefined](#null-y-undefined)
  - [Object](#object)
  - [Array](#array)
  - [Tuplas](#tuplas)
  - [Enum](#enum)
  - [Unión de tipos](#unión-de-tipos)
  - [Alias de tipos](#Alias-de-tipos)
  - [Tipos literales](#Tipos-literales)
  - [Aserciones de Tipo](#aserciones-de-tipo)
  - [Funciones en TS](#funciones-en-TS)
- [Tipos personalizados](#tipos-personalizados)
  - [Interfaces](#interfaces)
  - [Clases](#clases)
- [Modulos](#modulos)
  - [Importando y Exportando en módulos](#importando-y-exportando-en-módulos)
  - [Principio de responsabilidad pública](#principio-de-responsabilidad-pública)
  - [Resolviendo módulos](#resolviendo-módulos)
## Entorno de desarrollo

### Compilador

## Tipado en TypeScript

### Explícito
Define una sintaxis para la creaión de variables con tipo de dato.

```typescript
  nombreVariable: TipoDeDato = Valor
```

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Inferido
TypeScript tiene la habilidad de deducir el tipo en función de un valor.

```typescript
  nombreVariable = Valor
```

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

## Tipos básicos

### Tipos primitivos
* Number
* Boolean
* Srting
* Array
* Tuple
* Enum
* Any
* Void
* Null
* Undefined
* Never
* Object

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Number
* Valores numericos
* Valores hexadecimales
* Valores binarios
* Valores octales

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Boolean

### String

### Any
* Usado para capturar valores dinámicos
* Lo svalores pueden cambiar de tipo en el tiempo
  * APIs externas
  * Librerías de terceros

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Void
* Void es lo opuesto a Any, representa la ausencia de tipo
* Comúnmente se usa como tipo de retorno en fuciones

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Never
* Representa el tipo de valor que __nunca__ ocurre
  * Funciones que lanzan excepciones
  * Funciones que nunca retornan valor

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Null y Undefined
* En TypeSCript, ambos *valores* tienen sus respectivos tipos
  * __null__ 
  * __undefined__
* Null y Undefined se pueden se pueden asumir como subtipos de los otros tipos de datos
* Significa que se puede asugnar null y undefined a una variable del tipo string, por ejemplo

#### La Opción --strictNullChecks
* Solo permite asignar null o undefined a una variable de tipo any p sus tipos respectivos
* Ayuda a evitar errores comunes en progeamación de apps en el ambito JavaScript

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Object
* Object es le tipo de dato que representa un valor no primitivo
* Es el tipo para las variables que no sean de tipo number, string, boolean, null, undefined, etc

#### Object vs object
* __Object__ instancia la clase Object de JS
* __object__ es el tipo para valores no primitivos

> Con este tipo no se puede acceder a las propiedades del objecto

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Array
* Al igual que en JS, TS permite definir un arreglo para contener un conjunto de valores
* Usa dos notacioens __[]__ y __Array\<tipo>__

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Tuplas
* Las tuplas permiten expresar un arreglo con un número fijo de elementos
* Los tipos de datos son conocidos

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Enum
* Los enumerados permiten definir un conjunto de constantes con nombre
* Tienen la ventaja de adaptarse al contexto de la aplicación

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Unión de tipos
* En TS se puede definir una variable con múltiples tipos de datos: *Union Type*
* Se usa el simbolo de pipe __|__ entre los simbolos

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Alias de tipos
* TS permite crear un alias como nuevo nombre para un tipo
* El alias se puede aplicar también a un conjunto o combinación de tipos
* Se usa la palabra reservada __type__

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Tipos literales
* Una variable con un tipo literal puede contener únicamente una cadena conjunto
* Se usan cadenas como *tipos* combinados con el simbolo de pipe __|__ entre ellos

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Aserciones de tipo
* Cuando el programador puede conocer más que TS sobre el valor de una variable
* Es un mensaje al compilador 'Confia en mí, sé lo que hago'
* Se parece al casting de tipos en otros lenguajes de programción
* Us dos sintaxis: __\<Angle Bracket>__ y __(variables *as* tipo)__

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Funciones en TS
* Los parámetros en las funciones son tipados
* Se pueden definir parámetros opcionales
* El tipo de retorno puede ser un tipo básico, enum, alias, tipo literal o una combinación de ellos

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

## Tipos personalizados

### Interfaces
Las interfaces en TS constituyen una forma poderosa de definir *contratos* tanto para tu proyecto, como para el código externo del mismo.

#### Propiedades opcionales
No todas las propiedades de una interfaz podrían ser requeridas.

Estableceremos una propiedad como opcional con el símbolo __?__ después del nombre.

#### Solo lectura
Algunas propiedades de la interfa podrían no ser *modificables* una vez creado el objecto.

Esto es posible usando __readonly__ antes del nombre de propeidad.

#### Extendiendo interfaces
Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes.

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

### Clases
A partir de ECMAScript 2015 es posible construir clases y hacer uso del paradigma de la progrmación orientada a objetos en JS.

TS permite aplicar estas técnicas sin tener que esperar por otra versión.

#### Miembros púbilcos
TS define un modificador de acceso público por defecto para los miembros de clase.

Tambien es posible marcar un miembro como público usando la palabra reservada __public__.

#### Miembros privados
TS define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada __private__.

TS también soporta(a partir de la versión 3.8) la nueva sintaxis JS para miembros privados: __#atriburo__.

Esta caracteristica puede ofrecer mejores garantías de aislamiento en miembros privados.

#### Miembros protegidos

#### Metods set y get
TS soporta los métodso accesores __set__ y __get__ como una forma de interceptar los accesos a los miembros privados de un objeto.

#### Herencia
TS soporta este patrón común en el mundo de la POO.

Implementa la habilidad de extender código de clases existentes a través de la __herencia__.

#### Clases Abstractas
Las clases abstractas son la base de donde otras clases podrían derivarse.

A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.

La palabra reservada es __abstract__.

#### Propiedades estáticas
Las clases por lo general definen atributos y métodos aplicables a las instancias de las mismas.

A través de la palabra reservada __static__ se puede definir un miembro visible a nivel de clase.

#### Propiedades de solo lectura
Al igual que en las interfaces, podemos usar la palabra servada __readonly__ para marcar el miembro de una clase como solo lectura.

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>

## Modulos
Los modulos en TS proveen un mecanismo para una mejor organización del código y promueven su reutilización.

A partir de ECMAScript 2015, los módulos son parte nativa del lenguaje JS.

### Importando y Exportando en módulos
Generalmente se define un módulo con la idea de agrupar código relacionado.

Podemos tomar criterios en torno a la funcionalidad, *feautures* utilitarios, modelos, etc.

Los miembros de módulo interactúan con el uso de las palabras reservadas __import__ y __export__.

### Principio de responsabilidad pública
Idealmente, un archivo debería tener un propósito o responsabilidad única: definir una clase, una interfaz, un enumerado, etc.

Esto mejora la legibilidad de código, facilita su lectura, testing y favorece su matenimiento.

### Resolviendo módulos
TS resuelve la ubicación de módulos observando referencias relaticas y no relativas.

Posteriormente intenta localizar el módulo usando una __estategía de resolución de módulos__.

```
tsc --moduleResolution node

tsc --moduleResolution classic
```

<div align="right">
  <a href="#index"><small>🡡 volver al inicio</small></a>
</div>