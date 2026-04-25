
const contenedor = document.getElementById("contenedor");
const estado = document.getElementById("estado");
const buscar = document.getElementById("buscar");

let listaPokemon = [];


const render = (lista) => {
  if (lista.length === 0) {
    contenedor.innerHTML = `<p class="vacio">No se encontraron resultados</p>`;
    return;
  }

  contenedor.innerHTML = lista.map(p => `
    <div class="card">
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
    </div>
  `).join("");
};


const cargar = async () => {
  try {
    estado.className = "loading";
    estado.textContent = "Cargando...";

    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40");

    if (!res.ok) throw new Error("Error en API");

    const data = await res.json();

    const detalles = await Promise.all(
      data.results.map(async (p) => {
        const res2 = await fetch(p.url);
        const data2 = await res2.json();

        return {
          nombre: data2.name,
          imagen: data2.sprites.front_default
        };
      })
    );

    listaPokemon = detalles;

    estado.className = "";
    estado.textContent = "";

    render(listaPokemon);

  } catch (error) {
    estado.className = "error";
    estado.textContent = "Error al cargar datos";
  }
};


buscar.addEventListener("input", () => {
  const valor = buscar.value.toLowerCase().trim();

  if (valor.length === 0) {
    estado.className = "";
    estado.textContent = "";
    render(listaPokemon);
    return;
  }

  if (valor.length < 3) {
    estado.className = "loading";
    estado.textContent = "Escribí al menos 3 caracteres";
    return;
  }

  estado.className = "loading";
  estado.textContent = "Buscando...";

  const filtrados = listaPokemon.filter(p =>
    p.nombre.includes(valor)
  );

  estado.className = "";
  estado.textContent = "";

  render(filtrados);
});


cargar();