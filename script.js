function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}
// function puedeReservar(cantidad) {
//     return cantidad <= 2;

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}   

// const botonReservar = document.querySelector("#boton-reservar");

// botonReservar.addEventListener("click", function() {
//     console.log("El usuario hizo clic");
// });

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

// botonReservar.addEventListener("click", function() {
    // const tazasActuales = Number(contadorTazas.textContent);

    //if (puedeReservar(tazasActuales)) {
       // contadorTazas.textContent = tazasActuales - 1;
    //} else {
        //botonReservar.textContent = "Sin Cupos"
        //botonReservar.disabled = true
    //}
//});

botonReservar.addEventListener("dblclick", function() {   
    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        botonReservar.textContent = "Reserva Registrada"
        console.log("Reserva Registrada")
}else {

botonReservar.textContent = "No hay cupos disponibles"
        botonReservar.disabled = true
        console.log("No hay cupos disponibles")
}
});

