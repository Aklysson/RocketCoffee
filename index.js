const btnMobile = document.getElementById("btnmobile");

function cliquei() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

console.log(btnMobile);

btnMobile.addEventListener('click', cliquei);