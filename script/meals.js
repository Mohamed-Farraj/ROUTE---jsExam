if(localStorage.getItem('category')!='null'&&localStorage.getItem('category')!=null)
{

    callApi()
async function callApi(link = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${localStorage.getItem('category')}`) {
    let res = await fetch(link)
    data = await res.json();
    console.log("response",data);
    fillData()
}

function fillData() {
    let meals = "";
    for(let i = 0; i < data.meals.length; i++) {
        meals += `
        <div  class="col-lg-3 col-md-4 col-sm-12 rounded-3 myCard position-relative p-2">
            <a  href="./meals.html" class="text-dark p-0">
                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
                <div class="layer  text-center overflow-hidden d-flex flex-column justify-content-center align-items-center">
                    <h5 class="text-capitalize h4">${data.meals[i].strMeal}</h5>
                </div>
            </a>
        </div>
        `;
    }
    row.innerHTML = meals;

}
}



else if(localStorage.getItem('ingredients')!='null'&&localStorage.getItem('area')!=null)
{

    callApi()
async function callApi(link = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${localStorage.getItem('ingredients')}`) {
    let res = await fetch(link)
    data = await res.json();
    console.log("response",data);
    fillData()
}

function fillData() {
    let meals = "";
    for(let i = 0; i < data.meals.length && i<20; i++) {
        meals += `
        <div  class="col-lg-3 col-md-4 col-sm-12 rounded-3 myCard position-relative p-2">
            <a  href="./meal.html" class="text-dark p-0">
                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
                <div onclick="setMealId('${data.meals[i].idMeal}')" class="layer  text-center overflow-hidden d-flex flex-column justify-content-center align-items-center">
                    <h5 class="text-capitalize h4">${data.meals[i].strMeal}</h5>
                </div>
            </a>
        </div>
        `;
    }
    row.innerHTML = meals;

}
}

function setMealId(id) {
    localStorage.setItem("mealId",id);
}