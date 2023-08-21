document.addEventListener("DOMContentLoaded", () => {
  const item = document.getElementById("item");
  const btnAgregar = document.getElementById("agregar");
  const btnLimpiar = document.getElementById("limpiar");
  const contenedor = document.getElementById("contenedor");
  //   displayElementsOnHTML(JSON.parse(localStorage.getItem("datos")) || []);

  let arrayDatos = JSON.parse(localStorage.getItem("datos")) || [];
  function addEntireArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      contenedor.innerHTML += `<li class="list-group-item>${arr[i]}</li>`;
      console.log(arr[i]);
    }
  }
  addEntireArray(arrayDatos);

  btnAgregar.addEventListener("click", () => {
    arrayDatos.push(item.value);
    localStorage.setItem("datos", JSON.stringify(arrayDatos));
    item.value = "";
    addAnElement(JSON.parse(localStorage.getItem("datos")));
  });

  btnLimpiar.addEventListener("click", () => {
    localStorage.removeItem("datos");
    addAnElement(JSON.parse(localStorage.getItem("datos")) || []);
  });

  function addAnElement(arr) {
    // for (let i = 0; i < arr.length; i++) {
    contenedor.innerHTML += `<li class="list-group-item">${
      arr[arr.length - 1]
    } </li>`;
    // }
    // // contenedor.appendChild(li);
  }
});
