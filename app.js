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
        countryDiv.className = 'country';

        const countryInfo = `
            <h3 class = "country-name">${country.name.common}</h3>
            <p class = "country-capital">${country.capital}</p>
        `

        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);
    }

};
