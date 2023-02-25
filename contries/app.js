let loadCountries = () => {
  let selectionValue = document.getElementById("CONTINENTS").value;
  let URL = `https://restcountries.com/v2/region/${selectionValue}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => getCountries(data));
};
let getCountries = (countries) => {
  let getCountry = document.getElementById("country");
  getCountry.innerHTML = "";
  countries.forEach((country) => {
    let crtDiv = document.createElement("div");
    crtDiv.classList.add("card");
    crtDiv.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h2 class="Region">
         Region  <span id="Region">${countries[0].region}</span>
        </h2>
        <p class="name">
            <b>Country: </b> <span id="name">${country.name}</span>
        </p>
        <p class="name">
        <b>Capital City: </b>  <span id="name">${country.capital}</span>
        </p>
        <p class="name">
            <b>Language:</b> <span id="name">${country.languages[0].nativeName}</span>
        </p>
  `;
    getCountry.appendChild(crtDiv);
  });
};

loadCountries();
