// Sidenav
function toggleNav() {
    const nav = document.getElementById("sidenav");
    const line1 = document.getElementById("ham--line1");
    const line2 = document.getElementById("ham--line2");
    const line3 = document.getElementById("ham--line3");
    const overlay = document.getElementById("navOverlay");
    const topBar = document.getElementById("topBar");

    nav.style.marginLeft = nav.style.marginLeft == "0px" ? "-300px" : "0px";
    nav
        
    // Toggle hamburguer button
    line2.classList.toggle("ham--line-2-active");
    line1.classList.toggle("ham--line-1-active");
    line3.classList.toggle("ham--line-3-active")

    // Darky overlay when nav is opened
    overlay.classList.toggle("nav-overlay-active");

    // Hide title
    topBar.classList.toggle("top-bar-hidden");
}


window.onload = () => {

        let datak = document.querySelectorAll(".col-lg-2")
        datak.forEach( data => {
            data.style.display = 'none';
        })
}

