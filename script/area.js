/// <reference types="../@types/jquery" />
let row = document.getElementById("row");
let data=[];
let src = [];
const nationalityToCountry = {
    "American": "United States Of America",
    "British": "United Kingdom",
    "Canadian": "Canada",
    "Chinese": "China",
    "Croatian": "Croatia",
    "Dutch": "Netherlands",
    "Egyptian": "Egypt",
    "Filipino": "Philippines",
    "French": "France",
    "Greek": "Greece",
    "Indian": "India",
    "Irish": "Ireland",
    "Italian": "Italy",
    "Jamaican": "Jamaica",
    "Japanese": "Japan",
    "Kenyan": "Kenya",
    "Malaysian": "Malaysia",
    "Mexican": "Mexico",
    "Moroccan": "Morocco",
    "Polish": "Poland",
    "Portuguese": "Portugal",
    "Russian": "Russia",
    "Spanish": "Spain",
    "Thai": "Thailand",
    "Tunisian": "Tunisia",
    "Turkish": "Turkey",
    "Ukrainian": "Ukraine",
    "Vietnamese": "Vietnam",
    "Unknown": ""
};

callApi()
async function callApi(link = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`){
    let res = await fetch(link)
    data = await res.json();
    console.log("data=",data);
        fillData()
}

async function fillData() {
    let meals = "";
    let flags="";
    let flagsrc;
    for(let i = 0; i < data.meals.length; i++) {
        try {
             flags = await fetch(`https://restcountries.com/v3.1/name/${nationalityToCountry[data.meals[i].strArea]}?fields=flags`);
            let flagData = await flags.json();
            flagsrc = flagData[0].flags.png;
        } catch (error) {
            console.error(`Error fetching flag for ${data.meals[i].strArea}:`, error);
            flagsrc = "./media/Unknown_Flag.jpg"; // Use a default image if the flag is not found
        }
        console.log("now you are in fill data ",flagsrc);
        meals += `
        <div  class="col-lg-3 col-md-4 col-sm-12 rounded-3 myCard position-relative p-2">
            <a  href="../meals.html" class="text-dark p-0">
                <img src="${flagsrc}" class="w-100 rounded-3" alt="">
                <div id='categoryclicked' onclick="setstorage('${data.meals[i].strArea}')" class="layer  text-center overflow-hidden d-flex flex-column justify-content-center align-items-center">
                <h5 class="text-capitalize h2">${data.meals[i].strArea}</h5>
                </div>
            </a>
        </div>
        `;
    }
    row.innerHTML = meals;

}

function setstorage(aname) {
    localStorage.setItem("category",null);
    localStorage.setItem("area",aname);
    localStorage.setItem("ingredients",null);
}
