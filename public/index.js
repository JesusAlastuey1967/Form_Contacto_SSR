const inputNombre = document.querySelector('#nombre')
const inputCorreo = document.querySelector('#correo')
const inputTelefono = document.querySelector('#telefono')
const inputComentarios = document.querySelector('#comentarios')

const button = document.querySelector('button')

button.addEventListener('click', (e) => {
const nombre = inputNombre.value;  const correo = inputCorreo.value;  const telefono = inputTelefono.value; const comentarios = inputComentarios.value

//(Creamos la Ruta API del tipo que sea para hacer la Peticion, Creamos la Peticion FETCH a nuestra Base de Datos tipo POST)

fetch('/api/v1/contactos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({nombre, correo, telefono, comentarios})
})
})