/* 
    En JavaScript, il existe plusieurs types permettant de manipuler des valeurs avec des comportements et des caractéristiques différents.
*/

/* 
    NUMBER : Le type nombre représente un nombre entier ou à virgule entre 9007199254740991 et 9007199254740992.
    Au-delà de ces nombres, les calculs ne sont plus fiables et nous pouvons utiliser un nouveau type bigInt.
*/
let age = 25;
// console.log(typeof age);

/*  
    STRING : Le type représentant des chaînes de caractères.
    On peut utiliser la longueur de la chaîne grâce à length.
    On peut accéder à une lettre avec la bracket notation.
*/
const userName = "John";
// console.log(userName);
// console.log(userName.length);
// console.log(typeof userName);
// console.log(userName[3]);



/* 
    BOOLEAN : Un type représentant une valeur vraie(true) ou fausse(false).
*/
let isAdult = true;
// console.log(isAdult);
// console.log(typeof isAdult);


/* 
    UNDEFINED : Le type représentant une valeur non-définie, typiquement quand une variable n'a pas encore reçue de valeurs.
*/
let price;
// console.log(price);
/* 
    NULL : Ce type réprésente une valeur qui n'existe pas, typiquement quand on essaye d'utliser une variable non créée. 
*/
// console.log(null);
// console.log(typeof price);

/* 
    BIGINT : Ce type représente des nombres très grands.
    Il a été rajouté récemment pour palier à des problèmes assez rares.
*/
// console.log(typeof 9007199254740991n);

/* 
    SYMBOL : Un symbole est un identifiant unique qui permet d’éviter des collisions entre des valeurs similaires.
    À ce stade de votre apprentissage, il ne vous sert à rien de vous pencher dessus.
*/

/* 
    OBJECT : Un objet est un container de propriétés représentant des valeurs.
    On appelle une propriété "méthode" lorsque sa valeur est une fonction.
    C'est un type très important, qu'il faut maîtriser et qui représente une grande partie du fonctionnement du langage JavaScript.
*/
const norway = {
    name: "Norway",
    capital: "Oslo",
    population: 5367580,  
}
// console.log(norway);

/* 
    FUNCTION : Les fonctions sont ... des objets ! Même si typeof nous donne le "type" function, ce sont bien des objets éxécutables. 
    Nous verrons le fonctionnement des fonctions en détail dans ce cours, regardons simplement un exemple classique. 
*/
function getSquare(a) {
    return a * a;
}
// console.log(getSquare(5));

/* 
    ARRAY : Les tableaux sont ... également des objets ! 
    Mais alors, pourquoi les avoir créés ? Afin d'exploiter certaines propriétés et méthodes très pratiques, propres aux tableaux, comme la propriété length, ou les méthodes .map(), .filter(), etc ...
    Nous reviendrons également très en détail sur les tableaux.
*/
const salaries = [1000, 2000, 3000, 4000, 5000];


// On accède aux élément d'un tableau grâce à l'indice de ce dernier qui commence à 0

// C'est à dire que le premier élément est à l'indice 0.
// console.log(salaries);
// console.log(typeof salaries);
// salaries.forEach(salary => console.log(salary));
// console.log(salaries[0]);
// console.log(salaries[1]);

