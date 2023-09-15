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



