/// <reference types="../@types/jquery" />
let row = document.getElementById("row");
let data=[];
callApi()
async function callApi(link = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`){
    let res = await fetch(link)
    data = await res.json();
    console.log("data=",data);
        fillData()
}

async function fillData() {
    let meals = "";
    for(let i = 0; i < data.meals.length && i<20; i++) {
        meals += `
        <div class="col-lg-3 col-md-4 col-sm-12 rounded-3 myCard  p-2">
            <a  href="../meals.html" class="text-light p-0">
                <div id='categoryclicked' onclick="setstorage('${data.meals[i].strIngredient}')"  class="  text-center overflow-hidden d-flex flex-column justify-content-center align-items-center">

 <div class="card bg-transparent">
<img class="w-100" src="https://www.themealdb.com/images/ingredients/${data.meals[i].strIngredient}.png" >      
<div class="card-body">
        <h5 class=" text-light card-title">${data.meals[i].strIngredient}</h5>
        <p class="text-light card-text">${cut(data.meals[i].strDescription)}</p>
      </div>
    </div>
                </div>
            </a>
        </div>
        `;
    }
    row.innerHTML = meals;

}

function setstorage(iname) {
    localStorage.setItem("category",null);
    localStorage.setItem("area",null);
    localStorage.setItem("ingredients",iname);
}

function cut(string="s") {
    let breakPoint = string.indexOf("[1]")
    if(breakPoint === -1){
        breakPoint = string.indexOf(".")
        return string.slice(0, breakPoint)
    }
    else{
        return string.slice(0, breakPoint)
    }
    
}