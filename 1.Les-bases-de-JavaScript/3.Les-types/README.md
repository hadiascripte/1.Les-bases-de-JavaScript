# 🎨 Les Types en JavaScript 🚀

## 🌟 Introduction
JavaScript est un langage **dynamiquement typé**, ce qui signifie qu'une variable peut contenir différentes valeurs de types différents au cours de l'exécution du programme.

Il existe **deux grandes catégories** de types en JavaScript :
- 🎯 **Les types primitifs**
- 📦 **Les types de référence**

---

## 🎭 Les Types Primitifs
Les types primitifs sont **immuables** et stockés directement en mémoire.

### 1️⃣ `string` (📝 Chaîne de caractères)
Une chaîne de caractères est un texte entouré de guillemets simples (`'`), doubles (`"`) ou backticks (`` ` ``).

```javascript
let text = "Bonjour 🌍";
console.log(typeof text); // "string"
```

### 2️⃣ `number` (🔢 Nombre)
Les nombres en JavaScript peuvent être des entiers ou des flottants.

```javascript
let age = 25;
let price = 19.99;
console.log(typeof age); // "number"
console.log(typeof price); // "number"
```

### 3️⃣ `boolean` (✅❌ Booléen)
Un booléen représente une valeur **vraie** (`true`) ou **fausse** (`false`).

```javascript
let isOnline = true;
console.log(typeof isOnline); // "boolean"
```

### 4️⃣ `undefined` (🚫 Indéfini)
Une variable déclarée mais **non initialisée** a la valeur `undefined`.

```javascript
let notDefined;
console.log(typeof notDefined); // "undefined"
```

### 5️⃣ `null` (🕳️ Valeur nulle)
`null` représente **l'absence intentionnelle** de valeur.

```javascript
let emptyValue = null;
console.log(typeof emptyValue); // "object" // Ceci est un bug historique de JavaScript
```

### 6️⃣ `symbol` (🔑 Symbole)
Introduit avec **ES6**, un `symbol` est une valeur **unique et immuable**.

```javascript
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"
```

### 7️⃣ `bigint` (💰 Très grand nombre)
Le `bigint` permet de stocker des **nombres très grands**.

```javascript
let bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // "bigint"
```

---

## 🏗️ Les Types de Référence
Les types de référence sont des objets **stockés par référence** en mémoire.

### 1️⃣ `object` (📦 Objet)
Un objet est une **collection de paires clé-valeur**.

```javascript
let person = {
    name: "Alice",
    age: 30
};
console.log(typeof person); // "object"
```

### 2️⃣ `array` (📊 Tableau)
Un tableau est un **objet spécial** permettant de stocker des collections de valeurs.

```javascript
let colors = ["🔴 rouge", "🟢 vert", "🔵 bleu"];
console.log(typeof colors); // "object"
```

### 3️⃣ `function` (⚙️ Fonction)
Les **fonctions** sont des objets de première classe en JavaScript.

```javascript
function sayHello() {
    console.log("Hello! 👋");
}
console.log(typeof sayHello); // "function"
```

---

## 🔄 Conversion de Types
JavaScript permet la **conversion implicite et explicite** des types.

### 🔁 1. Conversion Implicite

```javascript
let result = "5" + 10; // "510" 🏗️ concaténation
console.log(result, typeof result);
```

### 🎯 2. Conversion Explicite

```javascript
let strNumber = "42";
let num = Number(strNumber);
console.log(num, typeof num); // 42 "number"
```

---

## 🏁 Conclusion
✅ Comprendre les types en JavaScript est **essentiel** pour éviter les erreurs et écrire un code **robuste**. 
🎯 Il est important de **bien gérer les conversions** et d'utiliser les **types appropriés** pour chaque situation.


