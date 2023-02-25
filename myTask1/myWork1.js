const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};
let getting = () => {
  let getUi = document.getElementById("ui");
  person.result.forEach((element) => {
    let crtDiv = (document.createElement = "div");
    crtDiv.innerHTML = `
    <div class="card">
      <h2 class="heading">
        Person Name: <span id="name">${element.name.common} </span>
      </h2>
      <p>
        Age: <span id="age">${element.age}</span>
      </p>
      <p>
        Street: <span id="street">${element.address.street}</span>
      </p>
    </div>;
    `;
    getUi.appendChild(crtDiv);
  });
};
getting();
