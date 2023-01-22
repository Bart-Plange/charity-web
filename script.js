const btn = document.getElementById('navbtn')
const btnmenu = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    btnmenu.classList.toggle('flex')
    btnmenu.classList.toggle('hidden')

})

/* accordian  */
function toggleAccordion(e) {
    const accordionContent = e.target.nextElementSibling;
    accordionContent.classList.toggle("hidden");
  
    const accordionArrow = e.target.querySelector(".accordion-arrow");
    accordionArrow.classList.toggle("transform rotate-90");
  }

  
  
  