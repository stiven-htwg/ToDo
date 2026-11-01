function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 11) {
    return "Guten Morgen!";
  }
  if (hour < 18) {
    return "Guten Tag!";
  }
  return "Guten Abend!";
}

function showGreeting() {
  document.querySelector("#greeting").textContent = getGreeting() + " Schön, dass du da bist.";
}

function generateVoucher() {
  const name = document.querySelector("#name").value.trim();
  if (name === "") {
    return;
  }
  const voucher = document.querySelector("#voucher");
  voucher.textContent = "Dein Gutscheincode: HAPPY" + name.length + name.toUpperCase();
  voucher.hidden = false;
}

document.addEventListener("DOMContentLoaded", showGreeting);
document.querySelector("#voucher-button").addEventListener("click", generateVoucher);
