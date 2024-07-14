/// <reference types="../@types/jquery" />
let row = document.getElementById("row");
let data=[];
const letter = document.getElementById("search-first-letter");
const mealName = document.getElementById("search-name");
const rowsearch = document.getElementById("row-search");
let ltr;
let Mname;
let iserr;
if(document.getElementsByTagName("title")[0].textContent === 'YUMMY-Search')
{
    letter.addEventListener("input", () => {
        ltr = letter.value;
        console.log(ltr);
        callApi(`https://www.themealdb.com/api/json/v1/1/search.php?f=${ltr}`,'search-first-letter')
    });


    mealName.addEventListener("input", () => {
        Mname = mealName.value;
        callApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Mname}`,'search-name')
    });

    
}

console.log(document.getElementsByTagName("title")[0].textContent);
document.getElementsByTagName("title")[0].textContent=="YUMMY"?callApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=`,"home"):console.log("ur not in index");;




async function callApi(link = `https://www.themealdb.com/api/json/v1/1/search.php?s=`,section){
    let res = await fetch(link)
    data = await res.json();
    console.log("response",data);
    if(data.meals == null){
        console.log("this input value got no data");
        document.getElementById("alerterr").classList.remove("d-none")
    }
    else{
        fillData(section)
    }
}
function fillData(section = "home") {
    let meals = "";
    for(let i = 0; i < data.meals.length && i < 20; i++) {
        meals += `
        <div class="col-lg-3 col-md-4 col-sm-12 rounded-3 myCard position-relative p-2">
            <a href="" class="text-dark p-0">
                <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
                <div class="layer d-flex justify-content-center align-items-center">
                    <span class="text-capitalize h2">${data.meals[i].strMeal}</span>
                </div>
            </a>
        </div>
        `;
    }
    if(section === 'home')
    {
        meals =""
        for( j=0;j<data.meals.length;j++)
            {
                meals +=`
                <div class="col-lg-3 col-md-4 col-sm-12 rounded-3 myCard position-relative p-2">
                <a href="" class="text-dark p-0">
                <img src="${data.meals[j].strMealThumb}" class="w-100 rounded-3" alt="">
                <div class="layer d-flex justify-content-center align-items-center"><span class="text-capitalize h2">${data.meals[j].strMeal}</span></div>
              </a>
              </div>
                `
            }
        row.innerHTML = meals
    }
    else if(section === 'search-first-letter')
    {
        document.getElementById("alerterr").classList.add("d-none")
            rowsearch.innerHTML = meals
    }
    else if(section === 'search-name')
    {
        document.getElementById("alerterr").classList.add("d-none")
            rowsearch.innerHTML = meals
    }
}