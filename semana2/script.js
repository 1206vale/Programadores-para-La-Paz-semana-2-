const campoPropuesta = document.getElementById("propuesta");
const botonEnviar = document.getElementById("boton-enviar");

function actualizarEstadoBoton() {
  const textoTieneContenido = campoPropuesta.value.trim().length > 0;
  botonEnviar.disabled = !textoTieneContenido;
}

campoPropuesta.addEventListener("input", actualizarEstadoBoton);
actualizarEstadoBoton();
