document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.nav');
    const abrir = document.querySelector('#abrir');
    const cerrar = document.querySelector('#cerrar');
    const elementosLista = document.querySelectorAll('.nav-list a'); // Selecciona todos los elementos 'a' dentro de la lista

    abrir.addEventListener('click', function () {
        nav.classList.add('visible');
    });

    cerrar.addEventListener('click', function () {
        nav.classList.remove('visible');
    });

    // Agregar evento de clic a cada elemento de la lista
    elementosLista.forEach(function (elemento) {
        elemento.addEventListener('click', function () {
            // Cierra el menú al hacer clic en cualquier elemento de la lista
            nav.classList.remove('visible');
        });
    });
});
