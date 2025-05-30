const h1=document.getElementById("heading")
const detail=document.getElementById("detail")
console.log(h1)

const searchParams = new URLSearchParams( window.location.search);

const urlId = searchParams.get("id")
console.log(urlId)

async function getData() {

    const url = `http://localhost:3000/cars/${urlId}`;

try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const car = await response.json();
      console.log(car);
      


h1.textContent += `Confirmer la réservation`

detail.innerHTML+=`<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-lg-8 col-md-10">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between justify-content-md-between mb-5 gap-3">

        <!-- Image + navigation -->
        <div class="d-flex align-items-center justify-content-center col-12 col-md-5 col-lg-4">
          <button class="btn btn-link text-dark fs-4 p-0">
            <i class="fas fa-chevron-left"></i>
          </button>
          <img src="${car.cover}" class="img-fluid mx-3" style="max-width: 250px;" alt="${car.model}">
          <button class="btn btn-link text-dark fs-4 p-0">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <!-- Détails + bouton -->
        <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start col-12 col-md-6 col-lg-6 text-md-start">
          <!-- Détails visibles dès md -->
            <div>
                <h5 class="mb-1">${car.model}</h5>
                <p class="mb-1">${car.description}</p>
                <p class="mb-1">${car.color}</p>
                <p class="mb-1">${car.transmission}</p>
                <p class="mb-3"><strong>${car.price} €</strong> – ${car.agence}</p>
            </div>
        </div>

      </div>


     

      <form class="container my-4 p-4 border rounded shadow-sm bg-light">
  <div class="mb-3">
    <label for="email" class="form-label">Adresse email</label>
    <input type="email" class="form-control" id="email" placeholder="exemple@domaine.com" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nous ne partagerons jamais votre email avec qui que ce soit.</div>
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Mot de passe</label>
    <input type="password" class="form-control" id="password" placeholder="Votre mot de passe">
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="rememberMe">
    <label class="form-check-label" for="rememberMe">Se souvenir de moi</label>
  </div>

  <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
    <button type="submit" class="btn btn-primary mb-2 mb-md-0">Se connecter</button>
    <a href="#" class="text-decoration-none">Créer un compte</a>
  </div>
</form>
      
      
      
      
     





    </div>
  </div>
</div>`


} catch (error) {
    console.error(error.message);
  }

}

getData()