function toggleLanguage() {
  const enText = document.querySelector(".en");
  const vnText = document.querySelector(".vn");
  const toggleButton = document.getElementById("toggleButton");
  if (enText.style.display === "none") {
    enText.style.display = "block";
    vnText.style.display = "none";
    toggleButton.textContent = "VN";
  } else {
    enText.style.display = "none";
    vnText.style.display = "block";
    toggleButton.textContent = "EN";
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".vn").style.display = "none";
});
