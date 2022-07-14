const btnMobile = document.getElementById("btnmobile");
const closingBtn = document.getElementById("close-btn");


function handleClick() {
    const nav = document.getElementById('nav')
    const close =document.getElementById("close-btn");
    const open =document.getElementById("btnmobile");

    nav.classList.toggle('active')
    close.classList.toggle('active');
    open.classList.toggle('active');
  
}

console.log(btnMobile);
console.log(closingBtn);


btnMobile.addEventListener('click', handleClick);
closingBtn.addEventListener('click', handleClick);




