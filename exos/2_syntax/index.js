'use strict';

// # 2-1_Syntax

console.log('--- Question 1 ---');
// [1] créer une variable x, et lui assigner un nombre
let x = 7;

console.log('--- Question 2 ---');
// [2] logguer cette variable dans la console avec console.log()
console.log(x);

console.log('--- Question 3 ---');
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez le résultat de la fonction x10 appliquée sur x.
*/

function multiplyByTen(number) {
  return number * 10;
}

console.log(multiplyByTen(x));

console.log('--- Question 4 ---');
/* [4] créer une fonction random qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

console.log(randomNumber(x));

console.log('--- Question 5 ---');
/* [5] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];

nombres.forEach((value) => {
  console.log(value);
})
console.log('--- Question 6 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/
let newNombres = nombres.filter(value => value % 2 === 0)

console.log(newNombres);

console.log('--- Question 7 ---');
/* [7] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/
let newNombresGreater100 = nombres.filter(value => {
  return value > 100;
})

console.log(newNombresGreater100);

console.log('--- Question 8 ---');
/* [8] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/

console.log(nombres.map(multiplyByTen));

console.log('--- Question 9 ---');
/* [9] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/
const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];

couleurs.forEach(valeur => {
  console.log(`Couleur : ${valeur}, Longueur : ${valeur.length}`);
})

console.log('--- Question 10 ---');
/* [10] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/

console.log(couleurs.map(value => value.length))


console.log('--- Question 11 ---');
// [11] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string
function lengthString(string) {
  return string.length;
}

console.log('--- Question 12 ---');
// [12] reprendre le code de la question 10 mais en utilisant la fonction "longueur"
console.log(couleurs.map(lengthString))

console.log('--- Question 13 ---');
// [13] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];
personnes.push(
  {
    nom: 'Felix',
    date: '2010-12-21'
  },
  {
    nom: 'Bastien',
    date: '2006-12-11'
  },
  {
    nom: 'Estelle',
    date: '1826-12-24'
  }
)

console.log(personnes);

console.log('--- Question 14 ---');
// [14] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()
console.log(personnes.map(value => value.nom));

console.log('--- Question 15 ---');
/* [15] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/
function dateToAge(date) {
  let objectDate = new Date(date);
  let diff = Date.now() - objectDate.getTime();
  let age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);

}
console.log('--- Question 16 ---');
// [16] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
console.log(personnes.map(value => dateToAge(value.date)));
