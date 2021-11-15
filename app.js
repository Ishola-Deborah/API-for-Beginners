//calling and using the API
fetch("https://restcountries.eu/rest/v2/all")
.then(response => response.json())
.then(data => console.log(data));

//setting up the app.js
const myButton = document.getElementById("fetch");
myButton.addEventListener("click", fetchInfo());

//parsing the data
function fetchInfo() {
    window.fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(jsonObj => displayUi(jsonObj))
    .catch(() => window.alert('API Could not be reached at this time'))
}

//displayUI Function display the data on the page.
function displayUi(country) {
    const { name, capital, languages, currencies, population, region } = country[Math.floor(Math.random() * 150)]
    const template = `
    <div> 
        <h1 id="head">${name}</h1> 
        <p id="content"> This is a country with its capital in ${capital}. The language(s) spoken here are ${languages[0].name}. The nation of ${name} is located in the ${region} region with a population of ${population} and uses ${currencies[0].name}as it's currency</p>
    </div>
    `
    
     
    document.getElementById("template").innerHTML = template;
}