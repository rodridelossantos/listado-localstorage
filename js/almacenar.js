document.addEventListener("DOMContentLoaded", () => {
  const item = document.getElementById("item");
  const btnAgregar = document.getElementById("agregar");
  const btnLimpiar = document.getElementById("limpiar");
  const contenedor = document.getElementById("contenedor");

  let arrayDatos = JSON.parse(localStorage.getItem("datos")) || [];

  function addEntireArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.textContent = arr[i];
      contenedor.appendChild(li);
    }
  }

  function displayAnElement(arr) {
    contenedor.innerHTML += `<li class="list-group-item">${
      arr[arr.length - 1]
    } </li>`;
  }

  addEntireArray(arrayDatos);

  btnAgregar.addEventListener("click", () => {
    arrayDatos.push(item.value);
    localStorage.setItem("datos", JSON.stringify(arrayDatos));
    item.value = "";
    displayAnElement(arrayDatos);
  });

  btnLimpiar.addEventListener("click", () => {
    localStorage.removeItem("datos");
    contenedor.textContent = "";
  });
});
