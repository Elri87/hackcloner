let ellie = [
  {
    id: 1,
    name: "Ellie",
    img: "./ellie.jpeg",
  },
];

let originalPet = ellie[0];

const select = document.querySelector("select");
select.addEventListener("change", (e) => {
  const cloneId = +e.target.value;
  originalPet = ellie.filter((clone) => clone.id === cloneId)[0];

  function removeClone() {
    ellie = ellie.filter((clone) => clone.id !== cloneId);
    render(); // Update the select dropdown after removing a clone
  }
  removeClone();
  //render();
});

// Example usage

//const container = document.querySelector("container");

function render() {
  for (let clone of ellie) {
    //console.log(ellie);
    const option = document.createElement("option");
    option.value = clone.id;
    select.appendChild(option);
  }

  const { id } = originalPet;
  const div = document.querySelector("#clone-id-container");
  const pId = document.createElement("p");
  pId.textContent = `ID: ${id}`;
  div.appendChild(pId);

  //Button
  const button = document.querySelector("button");
  const originalPetContainer = document.querySelector("#original-container");

  //event listener to button
  button.addEventListener("click", () => {
    //console.log("click");
    //create clone from original petcontainer
    const clone = originalPetContainer.cloneNode(true);

    //increment id of original pet
    originalPet.id++;
    //update id in clone
    let pId = clone.querySelector("p");
    pId.textContent = `ID: ${originalPet.id}`;

    //add clone to the container
    const cloneContainer = document.querySelector(".clone-container");
    cloneContainer.appendChild(clone);
    console.log(clone);

    /*add id to select option
    const option = document.querySelector("option");
    option.value = originalPet.id;
    select.appendChild(option);*/

    div.appendChild(button);
  });
}

console.log(originalPet);
render();
