// Animate Mission, Vision & Cards on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".mission, .vision, .card").forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;
    if(position < screen) { el.classList.add("show"); }
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 30) {
    navbar.style.backgroundColor = "rgba(0,128,0,1)";
    navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.backgroundColor = "rgba(0,128,0,0.95)";
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
