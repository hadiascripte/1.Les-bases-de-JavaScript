# Variables en JavaScript

## Introduction
En JavaScript, une variable est un conteneur permettant de stocker des valeurs. Une variable peut contenir des nombres, des chaînes de caractères, des objets, des tableaux, etc.

## Déclaration des Variables
Il existe trois façons principales de déclarer une variable en JavaScript :

### 1. `var`
Avant ES6, `var` était la seule manière de déclarer une variable.

```javascript
var x = 10;
console.log(x); // 10
```

Cependant, `var` a une portée fonctionnelle et peut entraîner des problèmes de visibilité des variables.

### 2. `let`
Introduit avec ES6, `let` permet de déclarer une variable avec une portée de bloc.

```javascript
let y = 20;
console.log(y); // 20
```

Contrairement à `var`, `let` limite la portée de la variable au bloc dans lequel elle est déclarée.

### 3. `const`
Utilisé pour déclarer des constantes, `const` empêche la réaffectation de la variable.

```javascript
const z = 30;
console.log(z); // 30

// z = 40; // Erreur : Assignment to constant variable.
```

## Portée des Variables

### 1. Portée Globale
Une variable déclarée en dehors d’une fonction est accessible partout dans le script.

```javascript
let globalVar = "Je suis global";

function test() {
    console.log(globalVar); // Accessible
}

test();
console.log(globalVar); // Accessible
```

### 2. Portée Locale
Une variable déclarée à l’intérieur d’une fonction n’est accessible qu’à l’intérieur de cette fonction.

```javascript
function test() {
    let localVar = "Je suis local";
    console.log(localVar); // Accessible
}

test();
// console.log(localVar); // Erreur : localVar is not defined
```

### 3. Portée de Bloc
Avec `let` et `const`, une variable déclarée à l’intérieur d’un bloc `{}` ne peut pas être accédée à l’extérieur.

```javascript
{
    let blockVar = "Je suis bloqué ici";
    console.log(blockVar); // Accessible
}

// console.log(blockVar); // Erreur : blockVar is not defined
```

## Bonnes Pratiques
- Toujours préférer `let` et `const` à `var` pour éviter les erreurs de portée.
- Utiliser `const` lorsque la variable ne doit pas être modifiée.
- Donner des noms explicites aux variables pour améliorer la lisibilité du code.

## Conclusion
Les variables sont essentielles en JavaScript. Comprendre la différence entre `var`, `let` et `const` et la gestion de la portée est crucial pour éviter les erreurs et écrire un code propre et efficace.

