/* 
    Une variable est le nom d'un emplacement dans la mémoire de votre ordinateur permettant de stocker des valeurs et de les utiliser dans le code. 
*/



/* let */
let mainCharacter = "Mario";
// let mainCharacter = "Luigi"; On ne peut pas redéclarer une variable avec le même nom
mainCharacter = "Luigi"; // On peut réaffecter une variable déclarée avec let
// mainCharacter = "Luigi";

// On peut déclarer une variable avec let et la réaffecter plus tard
// let mainCharacter;
// console.log(mainCharacter);




/* ⚠️Impossible d'utiliser let et const avant de les déclarer */


/* ⚠️Impossible de redéclarer une let ou const avec le même nom */


/* const */

const userName = "John";
// userName = "Jane"; On ne peut pas réaffecter une constante
// console.log(userName);

/* var */
// console.log(test); On peut utiliser une variable avant de la déclarer elle sera undefined

var test = "test";
var test = "test2"; // On peut redéclarer une variable avec le même nom
console.log(test); 



/* ⚠️ Attention, on ne peut pas déclarer de constante sans les initialiser, contrairement aux var et let. */