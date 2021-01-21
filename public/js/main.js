// let nrInt = 1;
// let nrStr = "1"

// console.log(nrInt == nrStr);
// console.log(nrInt === nrStr);

// // EXO3
// let programme = prompt("Donnez votre prénom : ")

// if(programme.length < 5){
//     alert("ton nom est trop court")
// }

// // EXO 4
// let addition = prompt("4+4 = ?")

// if(addition==8){
//     alert("BIEN JOUER")
// } else{
//     alert("retourne en maternelle")
// }

// // EXO5
// let multi = prompt("5 x 5= ?")
// let difrep= multi - 1

// if(multi == 1) {
//     alert('la réponse est bien 25')
// }else {
//     alert(`C'est dommage, tu n'étais qu'a ${multi} unité de la bonne réponse`)
// }




// Exo 1 
// console.log(`1 == "1" = ${1 == '1'}`);
// console.log(`1 == "1" = ${1 == 1}`);

// // Exo2
// console.log(`1 === "1" = ${1 === '1'}`);
// console.log(`1 === "1" = ${1 === 1}`);

// console.log("___________");
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
// let monTab = [];
// let ask;

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
// let grandNb = [];
// let petitNb = [];

// let nbr1 = prompt("Entrez un nombre?");
// let nbr2 = prompt("Entrez un nombre?");
// let nbr3 = prompt("Entrez un nombre?");

// if (nbr1 >= 12) {
//     grandNb.push(nbr1)
// } else {
//     petitNb.push(nbr1)
// }

// if (nbr2 >= 12) {
//     grandNb.push(nbr2)
// } else {
//     petitNb.push(nbr2)
// }

// if (nbr3 >= 12) {
//     grandNb.push(nbr3)
// } else {
//     petitNb.push(nbr3)
// }
// alert(`${grandNb} : plus grand ou égal à 12 et ${petitNb} : plus petit que 12 `)

// console.log(`${grandNb} : plus grand ou égal à 12`);
// console.log(`${petitNb} : plus petit que 12`);






// let string = "1"
// let numb = 1

// 1. ### Via un console.log() vérifie l'egalité entre 1 et "1"
// console.log(string == numb);

// 2. ### Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
// console.log(string === numb);

// 3
// let prenom = prompt("Votre prénom?")
// if(prenom.length < 5){
//     alert("Votre prénom est trop court!")
// }

// 4
// let add = prompt("5+7")
// if(add == 12){
//     alert("Bien joué")
// }else{
//     alert("FAUX")
// }

// 5
// let multi = prompt("5*3=?");
// let result = 15;

// if(multi == result){
//     alert("La réponse étais bien 15.")
// }else{
//     alert(`Dommage, tu étais qu'a ${Math.abs(result-multi)} unité de la bonne réponse.`)
// }
// 6

// let monTab = []
// let ask

// if(monTab.length <= 3){
//     ask = prompt("Donnez un element");
//     monTab.push(ask);
//     ask = prompt("Donnez un 2ieme element");
//     monTab.push(ask);
//     ask = prompt("Donnez un 3ieme element");
//     monTab.push(ask);
// }else if (monTab.length==3){
//     alert(monTab);
// }

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
//     ask = prompt('Entrez un element 1?');
//     monTab.push(ask);
// }

// if (monTab.length == 3) {
//     alert(monTab)
// } else {
//     ask = prompt('Entrez un element 2 ?');
//     monTab.push(ask);
// }

// if (monTab.length == 3) {
//     alert(monTab)
// } else {
//     ask = prompt('Entrez un element 3?');
//     monTab.push(ask);
// }

// if (monTab.length == 3) {
//     alert(monTab)
// } else {
//     ask = prompt('Entrez un element 4?');
//     monTab.push(ask);
// }


let grandnbr = []
let petitnbr = []

let nbr1 = prompt("Entrez un nombre.")
let nbr2 = prompt("Entrez un nombre.")
let nbr3 = prompt("Entrez un nombre.")

if(nbr1 >= 12){
    grandnbr.push(nbr1)
}else{
    petitnbr.push(nbr1)
}

if(nbr2 >= 12){
    grandnbr.push(nbr2)
}else{
    petitnbr.push(nbr2)
}

if(nbr3 >= 12){
    grandnbr.push(nbr3)
}else{
    petitnbr.push(nbr3)
}
alert(`${grandnbr}: pour les num plus grand ou égal a 12 et ${petitnbr}: pour les num plus petit que 12`)

console.log(`${grandnbr}: pour les num plus grand ou égal a 12`);
console.log(`${petitnbr}: pour les num plus petit que 12`);
