/// <reference types="../@types/jquery" />
let row = document.getElementById("row");
let data=[];


callApi()
async function callApi(link = `https://www.themealdb.com/api/json/v1/1/categories.php`){
    let res = await fetch(link)
    data = await res.json();
    console.log("response",data);
    fillData()
}

function fillData() {
    let meals = "";
    for(let i = 0; i < data.categories.length; i++) {
        meals += `
        <div  class="col-lg-3 col-md-4 col-sm-12 rounded-3 myCard position-relative p-2">
            <a  href="../meals.html" class="text-dark p-0">
                <img src="${data.categories[i].strCategoryThumb}" class="w-100 rounded-3" alt="">
                <div id='categoryclicked' onclick="setstorage('${data.categories[i].strCategory}')" class="layer  text-center overflow-hidden d-flex flex-column justify-content-center align-items-center">
                    <h5 class="text-capitalize h4">${data.categories[i].strCategory}</h5>
                    <p  class="fs-6 fw-normal " >${cut(data.categories[i].strCategoryDescription)}</p>
                </div>
            </a>
        </div>
        `;
    }
    row.innerHTML = meals;

}

function cut(string="") {
    let breakPoint = string.indexOf("[1]")
    if(breakPoint === -1){
        breakPoint = string.indexOf(".")
        return string.slice(0, breakPoint)
    }
    else{
        return string.slice(0, breakPoint)
    }
    
}

function setstorage(cname) {
    localStorage.setItem("category",cname);
    localStorage.setItem("area",null);
    localStorage.setItem("ingredients",null);
}

