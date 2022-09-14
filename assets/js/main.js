// Sidenav
function toggleNav() {
    const nav = document.getElementById("sidenav");
    const line1 = document.getElementById("ham--line1");
    const line2 = document.getElementById("ham--line2");
    const line3 = document.getElementById("ham--line3");
    const overlay = document.getElementById("navOverlay");
    const title = document.getElementById("title");

    nav.style.marginLeft = nav.style.marginLeft == "0px" ? "-300px" : "0px";
        
    // Toggle hamburguer button
    line2.classList.toggle("ham--line-2-active");
    line1.classList.toggle("ham--line-1-active");
    line3.classList.toggle("ham--line-3-active")

    // Darky overlay when nav is opened
    overlay.classList.toggle("nav-overlay-active");

    // Hide title
    title.classList.toggle("title-hidden");
}

// Typer
function createTyper(element, string) {
    return new Typed(element, {
        strings: [string],
        typeSpeed: 100,
        backSpeed: 0,
        fadeOut: true,
    });
}

let typer1 = createTyper("#whoamiCommand", "whoami");
let typer2 = createTyper("#knowledgeCommand", "cat /usr/share/knowledge<br> >> ~/knowledge");

// Create the observer
const observer = new IntersectionObserver(entries => {
    typer1.reset();
    typer2.reset();
});

// Tell the observer which elements to track
observer.observe(document.getElementById("whoamiCommand"));
observer.observe(document.getElementById("knowledgeCommand"));

