let loadAPI = () => {
  fetch("https://api.github.com/users?per_page=10")
    .then((res) => res.json())
    .then((data) => getAPI(data));
};
let getAPI = (data) => {
  let getTable = document.getElementById("table");
  data.forEach((element) => {
    console.log(element.followers_url);
    let createElement = document.createElement("tr");
    createElement.innerHTML = `
    <tr>
      <td>${element.login}</td>
      <td><img src="${element.avatar_url}" alt=""></td>
      <td><a href="https://github.com/${element.login}?tab=followers">1 Flower</a>
      <a href="https://github.com/${element.login}?tab=followers">2 Flower</a></td>
      <td><a href="https://github.com/${element.login}?tab=repositories"}">Repos</a></td>
    </tr>;
    `;
    getTable.appendChild(createElement);
  });
};
loadAPI();
