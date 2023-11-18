// Tomar Información del Producto Almacenado en LocaleStorage

const productos = JSON.parse(localStorage.getItem('productoSeleccionado'));

// Mostrar Información del Producto en Pantalla

const verProducto = document.getElementById('informacionProducto')

verProducto.innerHTML = `  
<section class="text-gray-600 body-font overflow-hidden">
<div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
    <div id="indicators-carousel" class="relative lg:w-1/2 w-full lg:h-auto h-64" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="../${productos.image.one}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../${productos.image.two}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../${productos.image.three}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../${productos.image.four}" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
</div>
    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-lg title-font text-gray-500 tracking-widest">${productos.category} ${productos.brand}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${productos.model}</h1>
        <div class="flex mb-4">
        <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </a>
            <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </a>
            <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
            </a>
        </span>
    </div>
    <p class="leading-relaxed">${productos.description}</p>
    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
        </div>
        <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
            <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
            </select>
            <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                </svg>
            </span>
            </div>
        </div>
        </div>
        <div class="flex">
        <span class="title-font font-medium text-2xl text-gray-900">$ ${productos.price.toLocaleString()}</span>
        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Agregar al Carrito</button>
        <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
        </button>
    </div>
    </div>
    </div>
</div>
</section>`;


// Funciones Para Control De Cantidades

function cantidadActual() {
    const cantidadProducto = document.getElementById('mostrarCantidad');
    cantidadProducto.textContent = `${productos.cantidad}`
}

const sumarCantidad = document.getElementById('btnSumar')
sumarCantidad.addEventListener('click', () => {
    aumentar();
})


const restarCantidad = document.getElementById('btnRestar')
restarCantidad.addEventListener('click', () => {
    disminuir();
})

function aumentar() {
    productos.cantidad++;
    cantidadActual();
}

function disminuir() {
    if (productos.cantidad > 1) {
        productos.cantidad--;
    } else {
        productos.cantidad = 1;
    }
    cantidadActual();
}

// Función Para Agregar Al Carrito 

const btnAgregar = document.getElementById('btnAgregar')

function agregarAlCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carritoActual')) || [];
    carrito.push(productos);
    localStorage.setItem('carritoActual', JSON.stringify(carrito));
    productos.cantidad = 1;
}

btnAgregar.addEventListener('click', () => {
    agregarAlCarrito();
    cantidadActual()
    renderizacionCarrito();
    Toastify({
        text: `Agregaste Al Carrito ${productos.tipo} ${productos.marca} ${productos.modelo}`,
        duration: 2000,
        close: true,
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #646464, #afafaf)",
        }
    }).showToast();
});

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

// Función Para Mostrar Productos En Carrito

let arrayCarrito;

function renderizacionCarrito() {
    arrayCarrito = JSON.parse(localStorage.getItem('carritoActual')) || [];
    const mostrarEnCarrito = document.getElementById('contenedorCarrito');
    mostrarEnCarrito.innerHTML = "";
    let precioTotal = 0
    if (arrayCarrito.length === 0) {
        mostrarEnCarrito.innerHTML = "El Carrito Esta Vacío";
    } else {
        for (let i = 0; i < arrayCarrito.length; i++) {
            let totalProducto = arrayCarrito[i].cantidad * arrayCarrito[i].precio;
            mostrarEnCarrito.innerHTML += `
                <div class="offcanvas-body">
                    <img id="imagenProducto" src="../${arrayCarrito[i].imagen.principal}" alt="">
                    <div>
                    <h3 id="precioProducto">Total $ ${(totalProducto).toLocaleString()}</h3>
                    <p class="cantidad">Cantidad: ${arrayCarrito[i].cantidad}</p>
                    </div>
                    <h2 id="nombreProducto">${arrayCarrito[i].tipo} ${arrayCarrito[i].marca} ${arrayCarrito[i].modelo}</h2>
                    <button class="btnEliminar" data-index="${i}">Eliminar Producto</button>
                </div>
                <hr>
                
            `;
            precioTotal += totalProducto
        }
        localStorage.setItem('precioTotal', JSON.stringify(precioTotal))
        const botonesEliminar = document.querySelectorAll('.btnEliminar');
        botonesEliminar.forEach((boton) => {
            boton.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                eliminarProducto(index);
            });
        });
    }
    badge();
    mostrarPrecioTotal(precioTotal)
};

// Función Para Mostrar El Precio Total En El Carrito

function mostrarPrecioTotal(precio) {
    const precioTotalElement = document.getElementById('precioTotal');
    if (arrayCarrito.length === 0) {
        precioTotalElement.style.display = 'none'
    } else {
        precioTotalElement.style.display = 'inline'
        precioTotalElement.textContent = `Precio Total: $${precio.toLocaleString()}`;
    }
}

// Función Para Actualizar El Valor Del Badge Del Carrito

function badge() {
    const badge = document.getElementById('badgeId');
    if (arrayCarrito.length > 0) {
        badge.innerText = arrayCarrito.length;
        badge.classList.add('bg-primary');
    } else {
        badge.innerText = '';
        badge.classList.remove('bg-primary');
    }
}

renderizacionCarrito();

// Función Para Eliminar Productos Del Carrito

function eliminarProducto(index) {
    if (arrayCarrito && arrayCarrito.length > index) {
        arrayCarrito.splice(index, 1);
        localStorage.setItem('carritoActual', JSON.stringify(arrayCarrito));
        renderizacionCarrito();
    }
}

const btnFinalizarCompra = document.getElementById('btnFinalizarCompra');

btnFinalizarCompra.addEventListener('click', () => {
    if (arrayCarrito.length > 0) {
        window.open('./pay.html', '_parent');
    } else {
        swal({
            title: "Carrito de Compras Vacío!",
            text: "Selecciona Un Producto",
            icon: "warning",
            button: "Volver",
        });
    }
});

