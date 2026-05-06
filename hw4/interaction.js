const backgroundSelect = document.getElementById("backgroundSelect");
const nameInput = document.getElementById("userName");
const nameMessage = document.getElementById("nameMessage");

// Register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(function () {
        console.log("Service worker registered successfully.");
      })
      .catch(function (error) {
        console.log("Service worker registration failed:", error);
      });
  });
}

// Change background 
backgroundSelect.addEventListener("change", function () {
  document.body.classList.remove("blue-background", "gold-background");

  if (backgroundSelect.value === "blue") {
    document.body.classList.add("blue-background");
  } else if (backgroundSelect.value === "gold") {
    document.body.classList.add("gold-background");
  }
});

// Check local storage
window.addEventListener("load", function () {
  const savedName = localStorage.getItem("name");

  if (savedName) {
    nameMessage.textContent = "Welcome back, " + savedName + "!";
  }
});

// Save the user's name 
nameInput.addEventListener("change", function () {
  const typedName = nameInput.value.trim();
  const savedName = localStorage.getItem("name");

  if (!savedName && typedName !== "") {
    localStorage.setItem("name", typedName);
    nameMessage.textContent = "Welcome, " + typedName + "! Your name has been saved.";
  } else if (savedName) {
    nameMessage.textContent = "Welcome back, " + savedName + "!";
  }
});