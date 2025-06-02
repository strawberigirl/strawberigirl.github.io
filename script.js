const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
toggle.classList.toggle("active");
    toggle.setAttribute('aria-pressed', toggle.classList.contains('active'));
});