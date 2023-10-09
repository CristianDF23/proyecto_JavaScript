// Botones Para Seleccionar El Medio De Pago
const btnCredito = document.getElementById('btnCredito');
const btnDebito = document.getElementById('btnDebito');
const btnEfectivo = document.getElementById('btnEfectivo');

// Contenedores Principales

const contenedorTarjeta = document.getElementById('contenedorTarjeta');
const contenedorMediosPago = document.getElementById('contenedorMediosPago');
const listadeProductos = document.getElementById('listadeProductos');

// Ocultar Formulario De Tarjetas y Lista de Productos En Pagina Principal

contenedorTarjeta.style.display = 'none'
listadeProductos.style.display = 'none'

// Botones Para Elegir Cuota, Regresar Elegir Medio Pago y Formulario De Tarjetas

const contenedorCuotas = document.getElementById('contenedorCuotas')
const flechaVolver = document.getElementById('flechaVolver')
const formulario = document.getElementById('formulario')


btnCredito.addEventListener('click', () => {
    contenedorMediosPago.style.display = 'none'
    contenedorTarjeta.style.display = 'flex'
    listadeProductos.style.display = 'flex'
    mostrarDescuento.innerText = 'Descuento: No se aplica'
});

btnDebito.addEventListener('click', () => {
    contenedorMediosPago.style.display = 'none'
    contenedorCuotas.style.display = 'none'
    contenedorTarjeta.style.display = 'flex'
    listadeProductos.style.display = 'flex'
    mostrarDescuento.innerText = 'Descuento: No se aplica'
});

flechaVolver.addEventListener('click', () => {
    window.location.href = './pay.html';
})

// Información De Precio Total, Iva, Descuento

const precioSubtotal = JSON.parse(localStorage.getItem('precioTotal'));
const valorDeDescuento = Math.round(precioSubtotal * 0.20)
const precioConIvaIncluido = Math.round(precioSubtotal * 1.21);

// Información De La Compra A Realizar

const listaCarrito = JSON.parse(localStorage.getItem('carritoActual'));
for (let i = 0; i < listaCarrito.length; i++) {
    listadeProductos.innerHTML += `
${listaCarrito[i].tipo}
${listaCarrito[i].marca}
${listaCarrito[i].modelo}
$${(listaCarrito[i].precio * listaCarrito[i].cantidad).toLocaleString()}
<hr>
`;
}

// Creación De Botón Comprar, Mostrar Iva, Descuento

const btnComprar = document.createElement('button')
const mostrarDescuento = document.createElement('p')
const mostrarIva = document.createElement('p')
const precioFinal = document.createElement('p')
listadeProductos.appendChild(precioFinal)
listadeProductos.appendChild(mostrarDescuento)
listadeProductos.appendChild(mostrarIva)
listadeProductos.appendChild(btnComprar)

// Precio Final 

precioFinal.innerText = `Subtotal $ ${precioSubtotal.toLocaleString()}`
btnComprar.classList.add('btnFinalizarCompra')
mostrarIva.innerText = `Total: $ ${precioConIvaIncluido.toLocaleString()} (IVA incluido)`;
mostrarIva.style.fontWeight = 'bold'
btnComprar.innerText = "Comprar";

// Botones Para Elegir Cuotas

const cuotaSeis = document.getElementById('cuotaSeis')
const cuotaNueve = document.getElementById('cuotaNueve')
const cuotaDoce = document.getElementById('cuotaDoce')

// Mostrar Valores De Las Cuotas

let arrayCuotas = [];

cuotaSeis.addEventListener('click', () => {
    arrayCuotas = [];
    valorCuota(precioConIvaIncluido, 6);
    mostrarValoresCuota();
});
cuotaNueve.addEventListener('click', () => {
    arrayCuotas = [];
    valorCuota((precioConIvaIncluido), 9);
    mostrarValoresCuota();
});
cuotaDoce.addEventListener('click', () => {
    arrayCuotas = [];
    valorCuota(precioConIvaIncluido, 12);
    mostrarValoresCuota();
});

function valorCuota(total, cuota) {
    if (cuota === 6) {
        let resultado = total / cuota;
        for (let i = 0; i < cuota; i++) {
            arrayCuotas.push(resultado);
        }
    } else if (cuota === 9) {
        resultado = Math.round((total * 1.15) / cuota);
        for (let i = 0; i < cuota; i++) {
            arrayCuotas.push(resultado);
        }
    } else {
        resultado = Math.round((total * 1.30) / cuota);
        for (let i = 0; i < cuota; i++) {
            arrayCuotas.push(resultado);
        }
    }
}

function mostrarValoresCuota() {
    let mostrarValCuotas = '';
    for (let i = 0; i < arrayCuotas.length; i++) {
        mostrarValCuotas += `Cuota ${i + 1} - Valor $${arrayCuotas[i].toLocaleString()}\n`;
    }
    swal({
        text: `El valor de las cuotas es:\n\n${mostrarValCuotas}`,
    });
}

// Pago En Efectivo

btnEfectivo.addEventListener('click', () => {
    contenedorMediosPago.style.display = 'none'
    contenedorTarjeta.style.display = 'flex'
    listadeProductos.style.display = 'flex'
    formulario.style.display = 'none'
    mostrarDescuento.innerText = `Descuento: $ ${valorDeDescuento.toLocaleString()}`
    mostrarIva.innerText = `Total: $ ${((precioSubtotal - valorDeDescuento) * 1.21).toLocaleString()} (IVA incluido)`;
    pagoEfectivo();
})

// Creación Aleatoria De Números De Referencia De Pago
let numeroRefenciaPago = `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`

// Creación De Contenedor Para Pago En Efectivo

const contenedorPagoEfectivo = document.createElement('div')
contenedorPagoEfectivo.id = 'pagosConEfectivo';
contenedorTarjeta.appendChild(contenedorPagoEfectivo);

function pagoEfectivo() {
    const pagosConEfectivo = document.getElementById('pagosConEfectivo')
    pagosConEfectivo.innerHTML = `
    <div class="pagoEfectivo">
    <ul class="transferencia">
        <li>Pago con transferencia:</li>
        <li>Banco: <span>BBVA Frances</span></li>
        <li>Titular de la cuenta: <span>Royal Shoes S.A</span></li>
        <li>CUIT: <span>33-25321398-2</span></li>
        <li>CBU: <span>2100022331220300041231</span></li>
    </ul>
    <hr>
    <ul class="efectivo">
        <li>Pago en PagoFacil o RapiPago</li>
        <li><span>${numeroRefenciaPago}</span></li>
    </ul>
</div>
    `;
}

// Botón Para Finalizar La Compra

btnComprar.addEventListener('click', () => {
    finalizaCompra();
})

function finalizaCompra() {
    const nombre = document.getElementById('nombreTarjeta').value.trim();
    const numero = document.getElementById('numeroTarjeta').value.trim();
    const vencimiento = document.getElementById('vencimientoTarjeta').value.trim();
    const codigo = document.getElementById('CVCTarjeta').value.trim();

    if (nombre === "" || numero === "" || vencimiento === "" || codigo === "") {
        swal({
            title: "COMPLETE LOS DATOS DE TARJETA",
            icon: "warning",
            buttons: false
        });
    } else {
        swal({
            title: "GRACIAS POR SU COMPRA!",
            icon: "success",
            buttons: false
        });
        setTimeout(() => {
            window.location.href = '../index.html';
            localStorage.clear();
        }, 3000);
    }
}
