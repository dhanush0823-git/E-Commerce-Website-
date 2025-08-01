function toggleLoginForm() {
  const modal = document.getElementById("loginModal");
  modal.classList.toggle("hidden");
}

function toggleSignupForm() {
  const modal = document.getElementById("signupModal");
  modal.classList.toggle("hidden");
}

function toggleMobileMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function handleLogin() {
  alert("Login functionality coming soon!");
}

function handleSignup() {
  alert("Signup functionality coming soon!");
}

function goToPayment() {
  window.location.href="payment.html";
}

function filterCards() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}
