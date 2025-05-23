document.addEventListener('DOMContentLoaded', function () {
    const enlaces = document.querySelectorAll('a');

    //for each para horrar codigo, son los 3 iguales
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (event) {
            //Mismo objetivo que antes, evitamos sus funciones originales
            event.preventDefault();

            //parrafo justo antes del enlace
            const parrafo = this.previousElementSibling;

            if (parrafo.style.display === 'none') {
                //si esta oculto lo mostramos y cambiamos
                parrafo.style.display = 'block';
                this.textContent = this.textContent.replace('Mostrar', 'Ocultar');
            } else {
                //y viceversa
                parrafo.style.display = 'none';
                this.textContent = this.textContent.replace('Ocultar', 'Mostrar');
            }
        });
    });
});
