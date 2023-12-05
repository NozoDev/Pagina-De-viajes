
const nav = document.querySelector('nav');
const abrir = document.querySelector('#abrir'); // Utiliza el selector de clase ".abrir"
const cerrar = document.querySelector('#cerrar'); // Utiliza el selector de clase ".cerrar"

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
});


cerrar.addEventListener('click', () => {
    nav.classList.remove("visible")
})