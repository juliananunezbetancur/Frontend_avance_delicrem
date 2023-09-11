const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

const loginForm = document.querySelector(".sign-in-form");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");


// Obtén el botón "Acceder" por su clase
const accessButton = document.querySelector(".sign-btn");

// Agrega un evento de clic al botón "Acceder" para redireccionar
accessButton.addEventListener("click", function () {
  // Redirige a la página deseada (reemplaza "nueva_pagina.html" con la URL de tu página de destino)
  window.location.href = "inicio.html";
});


inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
    successMessage.style.display = "none"; // Oculta el mensaje de éxito al cambiar entre el inicio de sesión y el registro.
    errorMessage.style.display = "none"; // Oculta el mensaje de error al cambiar entre el inicio de sesión y el registro.
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// Manejar el envío del formulario de inicio de sesión
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Simula una verificación de credenciales aquí (reemplaza esto con tu lógica real)
  const username = "usuario"; // Cambia esto a tu nombre de usuario válido
  const password = "contraseña"; // Cambia esto a tu contraseña válida

  const usernameInput = document.querySelector(".sign-in-form input[type='text']");
  const passwordInput = document.querySelector(".sign-in-form input[type='password']");

  if (usernameInput.value === username && passwordInput.value === password) {
    // Credenciales correctas, muestra un mensaje de éxito
    successMessage.style.display = "block";
    errorMessage.style.display = "none"; // Oculta el mensaje de error si está visible
    usernameInput.value = ""; // Limpia los campos del formulario
    passwordInput.value = "";
  } else {
    // Credenciales incorrectas, muestra un mensaje de error
    successMessage.style.display = "none"; // Oculta el mensaje de éxito si está visible
    errorMessage.style.display = "block";
  }
});
