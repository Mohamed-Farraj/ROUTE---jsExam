async function callApi(link = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${localStorage.getItem("mealId")}`){
    let res = await fetch(link)
    data = await res.json();
    console.log("response",data);
    fillData()
}
callApi();

function fillData() {
    let meals = "";
    for(let i = 0; i < data.meals.length; i++) {
        meals += `
            <div class="col-lg-4">
        <div class="card bg-transparent">
            <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-text text-light">${data.meals[0].strMeal}</h3>
            </div>
          </div>
    </div>
    <div class="col-lg-8">
        <h2>Instructions</h2>
        <p>${data.meals[0].strInstructions}</p>
        <h3>area : ${data.meals[0].strArea}</h3>
        <h3>category : ${data.meals[0].strCategory}</h3>
        <h3>recipts</h3>
        <div class="d-flex flex-row flex-wrap gap-2">
            <div class="alert alert-primary" role="alert">
                ${data.meals[0].strIngredient1}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient2}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient3}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient4}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient5}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient6}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient7}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient8}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient9}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient10}
              </div>
            <div id='lol' class="lol alert alert-primary" role="alert">
                ${data.meals[0].strIngredient11}
              </div>

    </div>
        <div class="buttons">
            <a href="${data.meals[0].strSource}" type="button" class="btn btn-success">Source</a>
            <a href="${data.meals[0].strYoutube}" type="button" class="btn btn-danger">youtube</a>
        </div>
  </div>
        `;
        
    }
    row.innerHTML = meals;
}

