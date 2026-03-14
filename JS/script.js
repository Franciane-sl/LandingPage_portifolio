// =============================
// SCROLL SUAVE
// =============================

const links = document.querySelectorAll(".nav a");

links.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const id = this.getAttribute("href");

        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =============================
// HEADER MUDA AO ROLAR
// =============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(30,0,60,0.9)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "rgba(30,0,60,0.4)";
        header.style.backdropFilter = "blur(12px)";

    }

});


// =============================
// MENU ATIVO
// =============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =============================
// ANIMAÇÃO AO APARECER
// =============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});
