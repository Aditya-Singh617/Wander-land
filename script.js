
const menuBtn = document.getElementById("menubtn");
const navLinks = document.getElementById("links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const links = navLinks.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});