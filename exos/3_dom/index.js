'use strict';

// # 4_DOM
function createNodeAndPutIn(node, parent, id = null) {
    let nodeCreated = document.createElement(node);
    if (id !== null) { nodeCreated.setAttribute('id', id) };
    let parentNode = typeof parent === "object" ? parent : document.querySelector(parent);
    parentNode.appendChild(nodeCreated);
    return nodeCreated;
}

function createNodeAndReplaceBy(node, nodeToReplace) {
    let nodeCreated = document.createElement(node);
    let parentNode = nodeToReplace.parentNode;
    parentNode.replaceChild(nodeCreated, nodeToReplace);
    return nodeCreated;
}

function firstChildListener() {
    let ramdomNumberForNames = Math.floor((Math.random() * names.length));
    let ramdomNumberForColor = Math.floor((Math.random() * colors.length));
    let newName = names[ramdomNumberForNames];
    let newColor = colors[ramdomNumberForColor];
    let ramdomDiv = createNodeAndReplaceBy('div', this);
    ramdomDiv.innerHTML = newName;
    ramdomDiv.style.backgroundColor = newColor;
    ramdomDiv.style.height = `${scaleSquare}px`;
    ramdomDiv.style.width = `${scaleSquare}px`;
    ramdomDiv.style.color = 'white';
    ramdomDiv.addEventListener('click', firstChildListener);
}

let scaleSquare = 100;
/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/
const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];
colors.forEach((color, index) => {
    let div = createNodeAndPutIn('div', '#exo1');
    div.innerHTML = color;
    div.style.color = `white`;
    div.style.height = `${scaleSquare}px`;
    div.style.width = `${scaleSquare}px`;
    div.style.display = "inline-block";
    div.style.backgroundColor = color;
    div.addEventListener('click', () => {
        console.log(`Div ${index + 1}`, color);
    })

})
// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/
const exo2 = createNodeAndPutIn('section', 'body', 'exo2');
const div2 = createNodeAndPutIn('div', exo2);

div2.style.height = `${scaleSquare}px`;
div2.style.width = `${scaleSquare}px`;
div2.style.backgroundColor = "black";

div2.addEventListener('mousemove', (e) => {
    let mouseInDivX = (div2.offsetLeft + (div2.offsetWidth / 2)) - e.clientX;
    let mouseInDivY = e.clientY - (div2.offsetTop + (div2.offsetHeight / 2));
    div2.style.width = `${scaleSquare - mouseInDivX}px`;
    div2.style.height = `${scaleSquare - mouseInDivX}px`;
    //div2.style.height = `${scaleSquare + mouseInDivY}px`;
})



// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

const exo3 = createNodeAndPutIn('section', 'body', 'exo3');
const divHarry = createNodeAndPutIn('div', exo3);
divHarry.style.height = `${scaleSquare}px`;
divHarry.style.width = `${scaleSquare}px`;
divHarry.style.color = `white`;
divHarry.style.backgroundColor = "black";
divHarry.innerHTML = "Harry";
exo3.firstChild.addEventListener('click', firstChildListener);


// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

let isTracking = false;

function trackMouse(e) {
    console.log('X', e.clientX);
    console.log('Y', e.clientY);
}
const exo4 = createNodeAndPutIn('section', 'body', 'exo4');
const button = createNodeAndPutIn('button', exo4);
let textNode = document.createTextNode('Track');
button.appendChild(textNode);


button.addEventListener('click', () => {
    if (isTracking) {
        window.removeEventListener('mousemove', trackMouse);
    } else {
        window.addEventListener('mousemove', trackMouse);
    }
    isTracking = !isTracking;
});

// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/

function trackMouseFordiv(e) {
    console.log('X', e.clientX);
    console.log('Y', e.clientY);
    div3.style.top = `${e.clientY}px`;
    div3.style.left = `${e.clientX}px`;
}


let exo5 = createNodeAndPutIn('section', 'body', 'exo5');
let div3 = createNodeAndPutIn('div', exo5);
div3.style.position = "absolute";
div3.style.height = `${scaleSquare}px`;
div3.style.width = `${scaleSquare}px`;
div3.style.color = `white`;
div3.style.backgroundColor = "red";
div3.innerHTML = "Drag Me";
div3.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', trackMouseFordiv);
});
div3.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', trackMouseFordiv);
});

