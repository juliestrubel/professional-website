const password = "34@678";

const modal = document.getElementById("password-modal");
const content = document.getElementById("site-content");
const form = document.getElementById("password-form");
const input = document.getElementById("password-input");
const message = document.getElementById("password-message");

if (modal && content && form && input && message) {
  const unlocked = sessionStorage.getItem("siteUnlocked") === "true";

  if (!unlocked) {
    modal.style.display = "flex";
    content.style.display = "none";
  } else {
    modal.style.display = "none";
    content.style.display = "block";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const entered = input.value.trim();

    if (entered === password) {
      sessionStorage.setItem("siteUnlocked", "true");
      modal.style.display = "none";
      content.style.display = "block";
      message.textContent = "";
    } else {
      message.textContent = "Incorrect password. Please try again.";
      input.value = "";
      input.focus();
    }
  });
}
