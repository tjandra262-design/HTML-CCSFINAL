/* =========================================================
   PT SURYA SATU BERSAMA
   SSB v2 — Vanilla JavaScript
   No dependencies
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {

  navToggle.addEventListener("click", () => {

    const isOpen =
      navLinks.classList.toggle("is-open");

    navToggle.classList.toggle(
      "is-active",
      isOpen
    );

    navToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  /*
    Close mobile menu after selecting
    a navigation link.
  */

  navLinks
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("is-open");

        navToggle.classList.remove("is-active");

        navToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });


  /*
    Close menu when resizing back
    to desktop.
  */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 760) {

        navLinks.classList.remove("is-open");

        navToggle.classList.remove("is-active");

        navToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );

}


/* =========================================================
   FOOTER YEAR
   ========================================================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   CLOSE MENU WITH ESCAPE
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      navLinks &&
      navToggle
    ) {

      navLinks.classList.remove("is-open");

      navToggle.classList.remove("is-active");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }
);
