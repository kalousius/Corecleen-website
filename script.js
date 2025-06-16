// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Modal Logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Feature Card Animation on Scroll
const featureCards = document.querySelectorAll(".feature-card");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;

  featureCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Initial style for feature cards (for animation)
document.addEventListener("DOMContentLoaded", () => {
  featureCards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
  });
  revealOnScroll();
});
