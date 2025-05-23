document.addEventListener('DOMContentLoaded', function () {
    //extraemos todos los elementos del html
    const btnSaludar = document.getElementById('saludar');
    const inputNombre = document.getElementById('nombre');
    const inputApellidos = document.getElementById('apellidos');
    const divSaludo = document.getElementById('saludo');

    btnSaludar.addEventListener('click', function () {
        const nombre = inputNombre.value.trim();
        const apellidos = inputApellidos.value.trim();

        //Nos aseguramos de que esten los campos rellenos
        if (nombre !== '' && apellidos !== '') {
            divSaludo.textContent = `Hola ${nombre} ${apellidos} bienvenido a esta página.`;
        } else {
            // Si falta alguno se limpia la caja
            divSaludo.textContent = '';
        }
    });
});
