

const liste=document.getElementById("liste")
const form=document.querySelector("form")
const resultats=document.getElementById("resultats")
console.log(resultats)

console.log(form)
console.log(liste)


async function getData(){

try {
      const response = await fetch("http://localhost:3000/cars");

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const cars = await response.json();
      console.log(cars);

      afficherCars(cars)

    form.addEventListener("submit",(e)=>{

    e.preventDefault()

        const select=document.querySelector(".form-select").value
        console.log(select)

        if(select != "Adresse de départ"){

        const carsFiltred=cars.filter( car =>  car.agence===select)

        console.log(carsFiltred)
        
        liste.innerHTML=""
        afficherCars(carsFiltred)

        }
        else{

            afficherCars(cars)
        }


})
        

}

catch (error) {
    console.error(error.message);
  }


}
getData();


function afficherCars(cars) {

    resultats.innerHTML=`<div class="col-lg-8 col-md-10">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="mb-0">${cars.length} ${cars.length>1 ? "resultats":"resultat"}</h4>
        <select class="form-select w-auto">
          <option>Prix croissant</option>
        </select>
      </div>
    </div>
    </div>`

      
  cars.forEach((car)=>{

    liste.innerHTML+=`<div class="row justify-content-center">
    <div class="col-lg-8 col-md-10">
      <div class="d-flex flex-wrap align-items-center justify-content-between mb-5 w-100 gap-3">
        <!-- Image et navigation -->
        <div class="d-flex align-items-center justify-content-center col-6 col-md-5 col-lg-4">
          <button class="btn btn-link text-dark fs-4 p-0">
           <i class="fas fa-chevron-left"></i>
          </button>
          <img src=${car.cover} class="img-fluid mx-md-3 mx-0" alt="${car.model} id="car">
          <button class="btn btn-link text-dark fs-4 p-0">
           <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <!-- Détails + bouton -->
        <div class="d-flex flex-column justify-content-center align-items-center align-items-lg-start col-md-6 col-lg-6">
          
          
          <div class="d-none d-lg-block">
            <h5 class="mb-1">${car.model}</h5>
            <p class="mb-1">${car.description}</p>
            <p class="mb-3"><strong>${car.price} €</strong> – ${car.agence}</p>
          </div>

          
          <div class="mt-2">

            <a href="car-detail.html?id=${car.id}" class="btn btn-success text-white text-decoration-none cursor-pointer">Réserver et Payer</a>
          </div>

        </div>

      </div>
    </div>
  </div>`


})


}











    



