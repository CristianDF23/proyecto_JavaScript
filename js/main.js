// Variables de botones y del contenedor de las tarjetas
const contenedorDeTarjetas = document.getElementById('contenedorDeTarjetas');

// Mostrar productos en pantalla
function mostrarProductos(array) {
    contenedorDeTarjetas.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        contenedorDeTarjetas.innerHTML += `
        <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
            <img class="lg:h-80 md:h-80 w-full object-cover object-center" src=${array[i].image.one} alt="blog">
            <div class="p-6">
            <h2 class="tracking-widest text-xl title-font font-medium text-gray-700 mb-1">Categoria: ${array[i].category}</h2>
            <h1 class="title-font text-lg font-medium text-gray-700 mt-3 mb-3">Marca: ${array[i].brand}</h1>
            <p class="leading-relaxed text-gray-700 mb-3">Modelo: ${array[i].model}</p>
            <p class="leading-relaxed text-lg font-bold text-green-500 mb-3">$ ${array[i].price.toLocaleString()}</p>
            <div class="flex items-center flex-wrap ">
                <button><a class="btnInformacion text-indigo-500 text-lg inline-flex items-center md:mb-2 lg:mb-0">Ver Producto
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                </svg>
                </a></button>
                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
                </span>
            </div>
            </div>
        </div>
        </div>
        `;
    };
}

mostrarProductos(articulos);
let btnInformacion = document.getElementsByClassName('btnInformacion');

// Funciones Para Filtrar
let filtro;
function filtrar(categoria) {
        let filtroArticulo = articulos.filter((elem) => elem.category === categoria);
        mostrarProductos(filtroArticulo)
        verInformacionProducto(0);
}

const filtrarZapatillas = document.getElementById('zapatillas');
filtrarZapatillas.addEventListener('click', () => {
    filtrar('Zapatillas');
})


const filtrarBotines = document.getElementById('botines');
filtrarBotines.addEventListener('click', () => {
    filtrar('Botines');
    verInformacionProducto(16);
})

const filtrarIndumentaria = document.getElementById('indumentaria');
filtrarIndumentaria.addEventListener('click', () => {
    filtrar('Indumentaria');
    verInformacionProducto(32);
})

// Función Para Tomar La Informacion Del Producción Seleccionado

verInformacionProducto(0);

function verInformacionProducto(num) {
    for (let i = 0; i < btnInformacion.length; i++) {
        btnInformacion[i].addEventListener('click', () => {
            const producto = articulos[i + num];
            localStorage.setItem('productoSeleccionado', JSON.stringify(producto));
            window.open('./pages/articles.html', '_parent')
        });
    }
}

// // Función Para Mostrar Productos En Carrito

// let arrayCarrito;

// function renderizacionCarrito() {
//     arrayCarrito = JSON.parse(localStorage.getItem('carritoActual')) || [];
//     const mostrarEnCarrito = document.getElementById('contenedorCarrito');
//     mostrarEnCarrito.innerHTML = "";
//     let precioTotal = 0
//     if (arrayCarrito.length === 0) {
//         mostrarEnCarrito.innerHTML = "El Carrito Esta Vacío";
//     } else {
//         for (let i = 0; i < arrayCarrito.length; i++) {
//             let totalProducto = arrayCarrito[i].cantidad * arrayCarrito[i].precio;
//             mostrarEnCarrito.innerHTML += `
//                 <div class="offcanvas-body">
//                     <img id="imagenProducto" src="../${arrayCarrito[i].imagen.principal}" alt="">
//                     <div>
//                     <h3 id="precioProducto">Total $ ${(totalProducto).toLocaleString()}</h3>
//                     <p>Cantidad: ${arrayCarrito[i].cantidad}</p>
//                     </div>
//                     <h2 id="nombreProducto">${arrayCarrito[i].tipo} ${arrayCarrito[i].marca} ${arrayCarrito[i].modelo}</h2>
//                     <button class="btnEliminar" data-index="${i}">Eliminar Producto</button>
//                 </div>
//                 <hr>
                
//             `;
//             precioTotal += totalProducto
//         }
//         localStorage.setItem('precioTotal', JSON.stringify(precioTotal))
//         const botonesEliminar = document.querySelectorAll('.btnEliminar');
//         botonesEliminar.forEach((boton) => {
//             boton.addEventListener('click', (event) => {
//                 const index = event.target.getAttribute('data-index');
//                 eliminarProducto(index);
//             });
//         });
//     }
//     badge();
//     mostrarPrecioTotal(precioTotal)
// };

// // Función Para Mostrar El Precio Total En El Carrito

// function mostrarPrecioTotal(precio) {
//     const precioTotalElement = document.getElementById('precioTotal');
//     if (arrayCarrito.length === 0) {
//         precioTotalElement.style.display = 'none'
//     } else {
//         precioTotalElement.style.display = 'inline'
//         precioTotalElement.textContent = `Precio Total: $${precio.toLocaleString()}`;
//     }
// }

// // Función Para Actualizar El Valor Del Badge Del Carrito

// function badge() {
//     const badge = document.getElementById('badgeId');
//     if (arrayCarrito.length > 0) {
//         badge.innerText = arrayCarrito.length;
//         badge.classList.add('bg-primary');
//     } else {
//         badge.innerText = '';
//         badge.classList.remove('bg-primary');
//     }
// }

// renderizacionCarrito();

// // Función Para Eliminar Productos Del Carrito

// function eliminarProducto(index) {
//     if (arrayCarrito && arrayCarrito.length > index) {
//         arrayCarrito.splice(index, 1);
//         localStorage.setItem('carritoActual', JSON.stringify(arrayCarrito));
//         renderizacionCarrito();
//     }
// }

// const btnFinalizarCompra = document.getElementById('btnFinalizarCompra');

// btnFinalizarCompra.addEventListener('click', () => {
//     if (arrayCarrito.length > 0) {
//         window.open('./pages/pay.html', '_parent');
//     } else{
//         swal({
//             title: "Carrito de Compras Vacío!",
//             text: "Selecciona Un Producto",
//             icon: "warning",
//             button: "Volver",
//         });
//     }
// });

// // API Cotización de Monedas

// const cotizacionUSD = document.getElementById('cotizacionUSD')

// fetch('https://api.getgeoapi.com/v2/currency/convert?api_key=ea21353d5063863b38be2b44a3c92aa4c8fbebec&from=USD&to=ARS&amount=10&format=json')
//     .then((response) => response.json())
//     .then((data) => {
//         cotizacionUSD.innerText = `Cotización U$D Oficial: ${(data.rates.ARS.rate)}`;
//         cotizacionUSD.style.color = '#f2f2f2'
//     })
//     .catch((error) => {
//         console.error('Error en la solicitud:', error);
//     });

