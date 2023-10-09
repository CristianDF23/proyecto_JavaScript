// Variables de botones y del contenedor de las tarjetas
const contenedorDeTarjetas = document.getElementById('contenedorDeTarjetas');

// Mostrar productos en pantalla
function mostrarProductos(array) {
    contenedorDeTarjetas.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        contenedorDeTarjetas.innerHTML += `
        <div class="tarjeta">
            <img src="./${array[i].imagen.principal}" alt="${array[i].tipo} ${array[i].marca} ${array[i].modelo}">
            <h1>${array[i].tipo} ${array[i].marca}</h1>
            <p class="title">${array[i].modelo}</p>
            <p class="precio">$ ${array[i].precio.toLocaleString()}</p>
            <button class="btnInformacion">Ver Información</button>
        </div>
        `;
    };
}

mostrarProductos(articulos);
let btnInformacion = document.getElementsByClassName('btnInformacion');

// Funciones Para Filtrar
let filtro;
function filtrar(marcaProd, tipoProd) {
    let filtroArticulo = articulos.filter((elemento) => elemento.marca === marcaProd);
    filtro = filtroArticulo.filter((elem) => elem.tipo === tipoProd);
    mostrarProductos(filtro)
    verInformacionProducto(0)
}

const filtrarZapatillasNike = document.getElementById('zapatillasNike');
filtrarZapatillasNike.addEventListener('click', () => {
    filtrar('Nike', 'Zapatillas');
})

const filtrarZapatillasAdidas = document.getElementById('zapatillasAdidas');
filtrarZapatillasAdidas.addEventListener('click', () => {
    filtrar('Adidas', 'Zapatillas');
    verInformacionProducto(8)
})

const filtrarBotinesNike = document.getElementById('botinesNike');
filtrarBotinesNike.addEventListener('click', () => {
    filtrar('Nike', 'Botines');
    verInformacionProducto(16)
})

const filtrarBotinesAdidas = document.getElementById('botinesAdidas');
filtrarBotinesAdidas.addEventListener('click', () => {
    filtrar('Adidas', 'Botines');
    verInformacionProducto(24)
})

//Función Para Tomar La Informacion Del Producción Seleccionado

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
                    <p>Cantidad: ${arrayCarrito[i].cantidad}</p>
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
        window.open('./pages/pay.html', '_parent');
    } else{
        swal({
            title: "Carrito de Compras Vacío!",
            text: "Selecciona Un Producto",
            icon: "warning",
            button: "Volver",
        });
    }
});

// API Cotización de Monedas

const cotizacionUSD = document.getElementById('cotizacionUSD')

fetch('https://api.getgeoapi.com/v2/currency/convert?api_key=ea21353d5063863b38be2b44a3c92aa4c8fbebec&from=USD&to=ARS&amount=10&format=json')
    .then((response) => response.json())
    .then((data) => {
        cotizacionUSD.innerText = `Cotización U$D Oficial: ${(data.rates.ARS.rate)}`;
        cotizacionUSD.style.color = '#f2f2f2'
    })
    .catch((error) => {
        console.error('Error en la solicitud:', error);
    });

