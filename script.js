// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-button");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Modal functionality
const modal = document.getElementById("modal");
const pageContent = document.getElementById("page-content");
const closeBtn = modal.querySelector(".close");

// Open modal
function openModal() {
  modal.classList.add("show");
  pageContent.classList.add("blur");
  document.body.style.overflow = 'hidden';
  modal.setAttribute('aria-hidden', 'false');
}

// Close modal
function closeModal() {
  modal.classList.remove("show");
  pageContent.classList.remove("blur");
  document.body.style.overflow = '';
  modal.setAttribute('aria-hidden', 'true');
}

// Close on clicking close button
closeBtn.addEventListener("click", closeModal);

// Close on clicking outside modal-content
window.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

// Close on ESC key
window.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// Auto-open modal on page load
window.addEventListener("load", () => {
  openModal();
});
