document.addEventListener("DOMContentLoaded", () => {
  // 1. Lógica del Menú Móvil
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = mobileMenu.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-bars");
    }
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileMenu.querySelector("i").classList.replace("fa-times", "fa-bars");
    });
  });

  // 2. Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // 3. Lógica del Slider de Testimonios
  const track = document.getElementById("sliderTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn && nextBtn && track) {
    const getScrollAmount = () => {
      const card = track.querySelector(".testimonial-card");
      return card.offsetWidth + 30;
    };

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });
  }

  // 4. Simulación de Envío de Formulario
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = this.querySelector("button");
    const originalText = btn.innerText;
    btn.innerText = "Enviando...";
    btn.disabled = true;

    setTimeout(() => {
      alert(
        "¡Mensaje enviado con éxito! Un especialista de GlobalSolutions te responderá en breve.",
      );
      this.reset();
      btn.innerText = originalText;
      btn.disabled = false;
    }, 1500);
  });
});

// 4. año actualizado en el pie de página
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;
