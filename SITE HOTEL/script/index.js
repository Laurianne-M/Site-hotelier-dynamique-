//on récupère les données saisies dans le formulaire, pour faire apparaitre les chambres + les données saisies par l'utilisateur/
const form = document.querySelector("form");
const roomAvailable = document.querySelector(".roomAvailable");
//début de stockage des données dans des variables//
let dateArrived = "";
let dateDeparture = "";
let numberOfAdult = "";
let numberOfChild = "";
let numberOfBedroom = "";

arrived.addEventListener("input", (e) => {
  dateArrived = e.target.value;
});

departure.addEventListener("input", (e) => {
  dateDeparture = e.target.value;
});

adult.addEventListener("input", (e) => {
  numberOfAdult = e.target.value;
});

child.addEventListener("input", (e) => {
  numberOfChild = e.target.value;
});

bedroom.addEventListener("input", (e) => {
  numberOfBedroom = e.target.value;
});
//fin de stockage des données dans des variables//

// création d'un évenement lorsque le formulaire est validé (affichage des donnés saisies et les chambres de l'hôtel/
form.addEventListener("submit", (e) => {
  e.preventDefault(); //permet de ne pas recharger la page et de ne pas écraser les données à la validation du formulaire//
  searchResult.innerHTML = `
  <h3>Du : ${dateArrived}</h3><h3>Au : ${dateDeparture}</h3>
  <h3>  Adultes : ${numberOfAdult}</h3><h3>Enfants : ${numberOfChild}</h3><h3> Chambres :${numberOfBedroom}</h3>`;
  searchResult.style.display = "flex";
  roomAvailable.style.display = "flex";
});
