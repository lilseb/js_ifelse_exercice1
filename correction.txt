// Exo 1 
console.log(`1 == "1" = ${1 == '1'}`);
console.log(`1 == "1" = ${1 == 1}`);

// Exo2
console.log(`1 === "1" = ${1 === '1'}`);
console.log(`1 === "1" = ${1 === 1}`);

console.log("___________");
// Exo3 
// let prenom = prompt('Ton prenom?');
// console.log(prenom.length);
// let taille = prenom.length

// if (taille < 5) {
//     alert(`${prenom} : ton prenom est trop court`)
// } else {
//     alert(`${prenom} : ton prenom est bon`)
// }

// Exo4
// let add = parseInt(prompt("Résou l'addition 5 + 5 ?"));

// if (add === 10) {
//     alert('bien joué')
// } else {
//     alert(`c'est faux`)
// }

// Exo5
// let multi = parseInt(prompt('Resou moi 5 * 5 ?'));
// let result = 25;

// if (multi === result) {
//     alert(`La réponse était bien : ${result}`);
// } else {
//     alert(`C'est dommage, tu n'étais qu'a ${Math.abs(result - multi)} unitées de la bonne réponse`);
// }

// Exo6
let monTab = [];
let ask;

// if (monTab.length <= 3) {
//     ask = prompt('Entrez un element?');
//     monTab.push(ask);
//     ask = prompt('Entrez un 2eme element?');
//     monTab.push(ask);
//     ask = prompt('Entrez un 3eme element?');
//     monTab.push(ask);
// } else {
//     alert(monTab)
// }

// if (monTab.length == 3) {
//     alert(monTab)
// } else {
//     ask = prompt('Entrez un element?');
//     monTab.push(ask);
// }

// if (monTab.length == 3) {
//     alert(monTab)
// } else {
//     ask = prompt('Entrez un element?');
//     monTab.push(ask);
// }

// if (monTab.length == 3) {
//     alert(monTab)
// } else {
//     ask = prompt('Entrez un element?');
//     monTab.push(ask);
// }

// if (monTab.length == 3) {
//     alert(monTab)
// } else {
//     ask = prompt('Entrez un element?');
//     monTab.push(ask);
// }

// Exo7
let grandNb = [];
let petitNb = [];

let nbr1 = prompt("Entrez un nombre?");
let nbr2 = prompt("Entrez un nombre?");
let nbr3 = prompt("Entrez un nombre?");

if (nbr1 >= 12) {
    grandNb.push(nbr1)
} else {
    petitNb.push(nbr1)
}

if (nbr2 >= 12) {
    grandNb.push(nbr2)
} else {
    petitNb.push(nbr2)
}

if (nbr3 >= 12) {
    grandNb.push(nbr3)
} else {
    petitNb.push(nbr3)
}
alert(`${grandNb} : plus grand ou égal à 12, ${petitNb} : plus petit que 12 `)

// console.log(`${grandNb} : plus grand ou égal à 12`);
// console.log(`${petitNb} : plus petit que 12`);