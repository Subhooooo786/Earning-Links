const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    menu.classList.toggle("flex-col");
    menu.classList.toggle("absolute");
    menu.classList.toggle("top-20");
    menu.classList.toggle("left-0");
    menu.classList.toggle("w-full");
    menu.classList.toggle("bg-gray-900");
    menu.classList.toggle("p-4");
    menu.classList.toggle("text-center");
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) { 
        menu.classList.add("hidden");
        menu.classList.remove("flex", "flex-col", "absolute", "top-20", "left-0", "w-full", "bg-gray-900", "p-4", "text-center");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden-element");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-element");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});
