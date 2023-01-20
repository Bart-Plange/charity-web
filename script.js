const btn = document.getElementById('navbtn')
const btnmenu = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    btnmenu.classList.toggle('flex')
    btnmenu.classList.toggle('hidden')

})