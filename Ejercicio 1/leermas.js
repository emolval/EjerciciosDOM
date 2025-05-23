window.addEventListener('DOMContentLoaded', function () {
    const enlace = document.querySelector('.enlace');
    //solo uso la palabra dicional, pues al tener un espacio de separación no podrá leer bien si le doy el valor "adicional oculto"
    const textoAdicional = document.querySelector('.adicional');

    enlace.addEventListener('click', function (event) {
        //prevenimos posible uso del enlace, que no hago nada que no manejemos nosotros aqui
        event.preventDefault();
        //quitamos la clase oculto y añadimos visible
        textoAdicional.classList.remove('oculto');
        textoAdicional.classList.add('visible');
        //QUitamos el enlace
        enlace.style.display = 'none';
    });
});
