const btn = document.getElementById('navbtn')
const btnmenu = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    btnmenu.classList.toggle('flex')
    btnmenu.classList.toggle('hidden')

})

/* popup on homepage */
  
// Get the popup container and close button
const popupContainer = document.getElementById("popup-container");
const closeButton = document.getElementById("close-button");

// Show the popup after a delay of 5 seconds
setTimeout(function() {
    popupContainer.style.display = "flex";
}, 5000);

// Hide the popup when the close button is clicked
closeButton.onclick = function() {
    popupContainer.style.display = "none";
}

