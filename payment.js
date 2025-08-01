document.addEventListener("DOMContentLoaded", function () {
  const confirmBtn = document.getElementById("confirmPayment");

  if (confirmBtn) {
    confirmBtn.addEventListener("click", function () {
      window.location.href = "scanpay.html"; // Redirect to home (or use thankyou.html)
    });
  }
});
