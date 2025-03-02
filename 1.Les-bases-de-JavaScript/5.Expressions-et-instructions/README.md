# 📜 Expressions et Instructions en JavaScript

## 🔹 Introduction
En JavaScript, tout code que vous écrivez est soit une **expression** soit une **instruction**. Comprendre la différence est essentiel pour bien structurer son code !

---

## 🎭 Expressions

Une **expression** est un morceau de code qui retourne une valeur. Elle peut être assignée à une variable ou utilisée directement.

### 🏷️ Types d'expressions

1. **Expressions arithmétiques** ➕➖✖️➗
   ```js
   let somme = 10 + 5; // 15
   let produit = 4 * 3; // 12
   ```
2. **Expressions logiques** ⚖️
   ```js
   let estVrai = 5 > 3; // true
   let estFaux = 10 === "10"; // false
   ```
3. **Expressions de chaîne de caractères** 📝
   ```js
   let message = "Hello" + " World!"; // "Hello World!"
   ```
4. **Expressions de fonction** 🎭
   ```js
   let carre = function(x) { return x * x; };
   console.log(carre(4)); // 16
   ```

---

## 🏛️ Instructions (Statements)

Une **instruction** est un morceau de code qui exécute une action mais ne retourne pas forcément de valeur.

### 📌 Types d'instructions

1. **Déclaration de variable** 📦
   ```js
   let age = 25;
   const PI = 3.14;
   ```
2. **Instructions conditionnelles** 🔀
   ```js
   if (age >= 18) {
       console.log("Vous êtes majeur");
   } else {
       console.log("Vous êtes mineur");
   }
   ```
3. **Boucles** 🔄
   ```js
   for (let i = 0; i < 5; i++) {
       console.log("Iteration :", i);
   }
   ```
4. **Appels de fonctions** 📣
   ```js
   function saluer(nom) {
       console.log("Bonjour " + nom);
   }
   saluer("Alice");
   ```

---

## 🎯 Différence entre Expression et Instruction
| **Expression**  | **Instruction**  |
|----------------|----------------|
| Retourne une valeur ✅ | Exécute une action 🚀 |
| Peut être assignée à une variable 📝 | Ne peut pas être assignée ❌ |
| Exemples : `5 + 2`, `true && false`, `function() {}` | Exemples : `if`, `for`, `while`, `return` |

---

## 🎓 Conclusion

- **Une expression produit une valeur** 📊
- **Une instruction exécute une action** 🎬
- **Certaines instructions contiennent des expressions** (ex: `if (x > 10) {...}`)

🚀 Maîtriser cette différence permet d'écrire un code plus propre et efficace en JavaScript !

---

