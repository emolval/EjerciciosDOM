document.addEventListener('DOMContentLoaded', function () {
    const inputNumeros = document.getElementById('numeros');
    const botonOrdenar = document.getElementById('ordenar');
    const divOrdenado = document.getElementById('ordenado');

    botonOrdenar.addEventListener('click', function () {
        //guardamos el texto del usuario y le quitamos los espacios
        const texto = inputNumeros.value.trim();

        //Validamos que no este vacio
        if (texto === '') {
            divOrdenado.textContent = 'Introduce una lista de números.';
            return;
        }

        //separamos los numeros
        const numeros = texto.split(',').map(n => n.trim()).filter(n => n !== '');

        // Validar que todos son numeros
        const sonNumeros = numeros.every(n => !isNaN(n));

        if (!sonNumeros) {
            divOrdenado.textContent = 'Error: Solo se permiten números separados por comas';
            return;
        }

        //si llega hasta aqui se ordenan los numeros con sort
        const ordenados = numeros.map(Number).sort((a, b) => a - b);
        divOrdenado.textContent = ordenados.join(', ');
    });
});
