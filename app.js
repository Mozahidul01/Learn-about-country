// Get Data
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
    .then(data => displayCountries(data))

//Display Data
const displayCountries = async countries => {
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        const name = document.createElement('h3');
        name.innerText = country.name.common;
        const capital = document.createElement('p');
        capital.innerText = country.capital
  
        countriesDiv.appendChild(countryDiv);
        countryDiv.appendChild(name);
        countryDiv.appendChild(capital);
        console.log(country.name);
    }

};
