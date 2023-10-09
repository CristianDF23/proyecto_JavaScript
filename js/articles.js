// Tomar Información del Producto Almacenado en LocaleStorage

const productos = JSON.parse(localStorage.getItem('productoSeleccionado'));

// Mostrar Información del Producto en Pantalla

const verProducto = document.getElementById('informacionProducto')

verProducto.innerHTML = `  
            <div class="contenedorProducto">
                <div class="imgBx">
                    <img id="imagenPrincipal" src="../${productos.imagen.principal}" alt="${productos.marca} ${productos.marca}">
                    <div class="imgBx-bis">
                        <img id="vistaUno" class="cambioImagen"src="../${productos.imagen.principal}" alt="${productos.marca} ${productos.marca}">
                        <img id="vistaDos" class="cambioImagen"src="../${productos.imagen.lateral}" alt="${productos.marca} ${productos.marca}">
                        <img id="vistaTres" class="cambioImagen"src="../${productos.imagen.superior}" alt="${productos.marca} ${productos.marca}">
                        <img id="vistaCuatro" class="cambioImagen"src="../${productos.imagen.suela}" alt="${productos.marca} ${productos.marca}">
                    </div>
                </div>
                <div class="detalles">
                    <div class="contenedorInformacion">
                    <h2>${productos.tipo} ${productos.marca}</h2>
                    <h4>${productos.modelo}</h4>
                    <p>${productos.descripcion}</p>
                    <h3>$ ${productos.precio.toLocaleString()}</h3>
                    <div>
                <div>  
                    <div class="contenedorCantidad">
                    <button id="btnRestar"class="btnCantidad">-</button>
                    <p id="mostrarCantidad"class="cantidadValor">${productos.cantidad}</p>
                    <button id="btnSumar" class="btnCantidad">+</button>
                    </div>
                </div>
                    <button id="btnAgregar" class="btnAgregar">Agregar al Carrito</button>
            </div>`;

// Cambiar Imagen Del Productos
const imagenPrincipal = document.getElementById('imagenPrincipal')
const vistaUno = document.getElementById('vistaUno')
const vistaDos = document.getElementById('vistaDos');
const vistaTres = document.getElementById('vistaTres');
const vistaCuatro = document.getElementById('vistaCuatro');

vistaUno.addEventListener('click', () => {
    imagenPrincipal.src = `../${productos.imagen.principal}`;
});
vistaDos.addEventListener('click', () => {
    imagenPrincipal.src = `../${productos.imagen.lateral}`;
});
vistaTres.addEventListener('click', () => {
    imagenPrincipal.src = `../${productos.imagen.superior}`;
});
vistaCuatro.addEventListener('click', () => {
    imagenPrincipal.src = `../${productos.imagen.suela}`;
});

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
        text: `Agregaste Al Carrito ${productos.tipo} ${productos.marca} ${productos.modelo}` ,
        duration: 2000,
        close: true,
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #646464, #afafaf)",
        }
    }).showToast();
});

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

