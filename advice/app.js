let loadAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => getAdvice(data));
};
getAdvice = (data) => {
  let getAdviceDiv = document.getElementById("adviceDiv");
  let crtDiv = document.createElement("div");
  crtDiv.innerHTML = `
    <h5 class="h1">Advice No: <span>${data.slip.id} </span></h5>
    <h2 class="h1">" ${data.slip.advice} "</h2>
    `;
  getAdviceDiv.appendChild(crtDiv);
};
loadAdvice();

let loadAdviceForSearch = () => {
  fetch("https://api.adviceslip.com/advice/search/{query}")
    .then((res) => res.json())
    .then((search) => getAdvice(search));
};
getAdvice = (search) => {
  let getAdviceDiv = document.getElementById("adviceDiv");
  let crtDiv = document.createElement("div");
  crtDiv.innerHTML = `
    <h5 class="h1">Advice No: <span>${search.slip.id} </span></h5>
    <h2 class="h1">" ${search.slip.advice} "</h2>
    `;
  getAdviceDiv.appendChild(crtDiv);
};
loadAdviceForSearch();
