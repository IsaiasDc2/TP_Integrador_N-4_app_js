const productos = [
  { id:1, nombre:"Celular", precio:1000, categoria:"tecnologia", enStock:true },
  { id:2, nombre:"Notebook", precio:2000, categoria:"tecnologia", enStock:false },
  { id:3, nombre:"Remera", precio:500, categoria:"ropa", enStock:true },
  { id:4, nombre:"Pantalón", precio:800, categoria:"ropa", enStock:true },
  { id:5, nombre:"Tablet", precio:1200, categoria:"tecnologia", enStock:true },
  { id:6, nombre:"Campera", precio:1500, categoria:"ropa", enStock:false },
  { id:7, nombre:"Auriculares", precio:300, categoria:"tecnologia", enStock:true },
  { id:8, nombre:"Zapatillas", precio:900, categoria:"ropa", enStock:true }
];

const contenedor = document.getElementById("productos");

const renderizar = () => {
  const categoria = document.getElementById("categoria").value;
  const precio = document.getElementById("precio").value;
  const stock = document.getElementById("stock").checked;
  const busqueda = document.getElementById("busqueda").value.toLowerCase();

  const filtrados = productos.filter(p => {
    return (
      (categoria === "" || p.categoria === categoria) &&
      p.precio <= precio &&
      (!stock || p.enStock) &&
      p.nombre.toLowerCase().includes(busqueda)
    );
  });

  contenedor.innerHTML = filtrados.map(p => `
    <div class="card">
      <h3>${p.nombre}</h3>
      <p>Precio: $${p.precio}</p>
      <p>Categoría: ${p.categoria}</p>
      <p>${p.enStock ? "En stock" : "Sin stock"}</p>
    </div>
  `).join("");
};


document.getElementById("categoria").onchange = renderizar;
document.getElementById("precio").oninput = (e) => {
  document.getElementById("precioValor").textContent = e.target.value;
  renderizar();
};
document.getElementById("stock").onchange = renderizar;
document.getElementById("busqueda").oninput = renderizar;


renderizar();
