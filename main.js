// const cars = [
//     {
//       id: 1,
//       model: "Peugeot 208",
//       year: 2023,
//       cover: "./images/c4173f1e-8ffc-486f-b94b-96be0f338f66.png",
//       description:"Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5€/km supplémentaire).",
//       agence: "Agence Paris",
//       price: "999",
//       color: "Noir métallisé",
//       transmission: "Automatique"
//     },
//     {
//       id: 2,
//       model: "Ford Fiesta",
//       year: 2023,
//       cover: "./images/09bca341-66df-4300-8276-490865325617.png",
//       description:"Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5€/km supplémentaire).",
//       agence: "Agence Nantes",
//       price: "999",
//       color: "Bleu métallisé",
//       transmission: "Automatique"
//     },
//     {
//       id: 3,
//       model: "Opel Astra",
//       year: 2023,
//       cover: "./images/02c31279-46a9-4ff4-bf8a-242f86c26496.png",
//       description:"Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5€/km supplémentaire).",
//       agence: "Agence La Rochelle",
//       price: "999",
//       color: "Blan nacré",
//       transmission: "Automatique"
//     },
//     {
//       id: 4,
//       model: "Audi A4",
//       year: 2023,
//       cover: "./images/2a39b392-6dc9-478c-8c6a-990c150176fd.png",
//       description:"Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5€/km supplémentaire).",
//       agence: "Agence Toulouse",
//       price: "999",
//       color: "Gris métallisé",
//       transmission: "Automatique"
//     }
// ]

//console.log(JSON.stringify(cars))



const liste=document.getElementById("liste")
console.log(liste)


async function afficherCars() {

    

try {
      const response = await fetch("http://localhost:3000/cars");

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const cars = await response.json();
      console.log(cars);
      

 cars.forEach((car)=>{

    liste.innerHTML+=`<div class="row justify-content-center">
    <div class="col-lg-8 col-md-10">
      <div class="d-flex flex-wrap align-items-center justify-content-between mb-5 w-100 gap-3">
        
        <!-- Image et navigation -->
        <div class="d-flex align-items-center justify-content-center col-md-5 col-lg-4">
          <button class="btn btn-link text-dark fs-4 p-0">
           <i class="fas fa-chevron-left"></i>
          </button>
          <img src=${car.cover} class="img-fluid mx-3" style="max-width: 250px;" alt="Peugeot 208">
          <button class="btn btn-link text-dark fs-4 p-0">
           <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <!-- Détails + bouton -->
        <div class="d-flex flex-column justify-content-center align-items-center align-items-lg-start col-md-6 col-lg-6">
          
          <!-- Détails visibles seulement à partir de lg -->
          <div class="d-none d-lg-block">
            <h5 class="mb-1">${car.model}</h5>
            <p class="mb-1">${car.description}</p>
            <p class="mb-3"><strong>${car.price} €</strong> – ${car.agence}</p>
          </div>

          <!-- Bouton toujours visible, sans modifier sa taille -->
          <div class="mt-2">

            <a href="#" class="btn btn-success text-white text-decoration-none cursor-pointer">Réserver et Payer</a>
          </div>

        </div>

      </div>
    </div>
  </div>`


})



} catch (error) {
    console.error(error.message);
  }

}
afficherCars()








    



