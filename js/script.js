// Productos demo — reemplaza imágenes y precios cuando tengas tus archivos
const productos = [
  ...Array(15).fill().map((_, i) => ({ id: i+1, nombre: `Arreglo Floral ${i+1}`, precio: 90+i, categoria: 'arreglos', img: 'imagenes/arreglo.jpg' })),
  ...Array(5).fill().map((_, i) => ({ id: i+21, nombre: `Ramo Floral ${i+1}`, precio: 70+i, categoria: 'ramos', img: 'imagenes/ramo.jpg' })),
  ...Array(5).fill().map((_, i) => ({ id: i+31, nombre: `Arreglo Funerario ${i+1}`, precio: 120+i, categoria: 'funerarios', img: 'imagenes/funerario.jpg' })),
  ...Array(5).fill().map((_, i) => ({ id: i+41, nombre: `Arreglo Especial ${i+1}`, precio: 150+i, categoria: 'especiales', img: 'imagenes/especial.jpg' }))
];

const contenedor = document.getElementById("productos-container");
const botones = document.querySelectorAll(".categoria-btn");

function mostrarProductos(filtro = "todos") {
  contenedor.innerHTML = "";
  const filtrados = filtro === "todos" ? productos : productos.filter(p => p.categoria === filtro);
  filtrados.forEach(p => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <div class="producto-info">
        <h3>${p.nombre}</h3>
        <p>S/ ${p.precio}</p>
        <a href="https://wa.me/51984351497?text=Hola,%20quiero%20comprar%20el%20${encodeURIComponent(p.nombre)}" target="_blank">Comprar</a>
      </div>`;
    contenedor.appendChild(div);
  });
}

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    botones.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    mostrarProductos(btn.dataset.cat);
  });
});

mostrarProductos();
