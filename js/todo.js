
const form = document.getElementById("form");
const input = document.getElementById("input");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

function actualizarContador() {
  const pendientes = document.querySelectorAll("li:not(.completada)").length;
  contador.textContent = pendientes;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  
  li.addEventListener("click", () => {
    li.classList.toggle("completada");
    actualizarContador();
  });


  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.classList.add("delete");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    actualizarContador();
  });

  li.appendChild(btn);
  lista.appendChild(li);

  input.value = "";
  actualizarContador();
});
