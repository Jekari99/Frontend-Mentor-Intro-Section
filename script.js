let iconOpen = document.getElementById('iconOpen');
let iconClose = document.getElementById('iconClose');
let nav = document.getElementById('nav-bar');
let body = document.getElementById("body");

iconOpen.addEventListener("click", () => {
    iconOpen.style.display = "none";
    iconClose.style.display = "block";
    nav.style.display = "block";
    body.style.backgroundColor = "grey";
});

iconClose.addEventListener("click", () => {
    iconClose.style.display = "none";
    iconOpen.style.display = "block";
    nav.style.display = "none";
    body.style.backgroundColor = "hsl(0, 0%, 98%)";
});

