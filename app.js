const form = document.querySelector(".form-data");
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector(".submit-btn");
const sent = document.querySelector("#success-message");
const namePattern = /^[a-zA-Z\s']+$/;

const nameError = document.querySelector("#name-error");
const numberError = document.querySelector("#number-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

function showError(error, hint) {
  error.textContent = hint;
}
function validateName() {
  const value = nameInput.value.trim();
  if (value === "") {
    showError(nameError, "Nama wajib diisi!");
  } else if (value.length < 2) {
    showError(nameError, "Tidak boleh kurang dari 2 karakter!");
  } else if (!namePattern.test(value)) {
    showError(nameError, "Nama hanya boleh huruf dan apostrof (')");
  } else {
    showError(nameError, "");
  }
}

function validateNumber() {
  const value = numberInput.value.trim();
  const numberPattern = value.replace(/\D/g, "");
  const allowedCharacters = /^[-+0-9\s]+$/;

  if (value === "") {
    showError(numberError, "Nomor wajib diisi!");
  } else if (numberPattern.length < 10 || numberPattern.length > 13) {
    showError(numberError, "Nomor harus terdiri dari 10-13 angka");
  } else if (!allowedCharacters.test(value)) {
    showError(numberError, "Hanya boleh memakai angka dan tanda + atau -");
  } else {
    showError(numberError, "");
  }
}
function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

  if (value === "") {
    showError(emailError, "Email wajib diisi!");
  } else if (!emailPattern.test(value)) {
    showError(emailError, "Format email salah!");
  } else {
    showError(emailError, "");
  }
}
function validateMessage() {
  const value = messageInput.value.trim();
  const messagePattern = /[a-zA-Z0-9]+/;
  if (value === "") {
    showError(messageError, "Pesan wajib di isi");
  } else if (value.length < 15 || value.length > 500) {
    showError(messageError, "Masukkan minimal 15 dan maksimal 500 karakter");
  } else if (!messagePattern.test(value)) {
    showError(messageError, "Isi pesan dengan benar!");
  } else {
    showError(messageError, "");
  }
}

nameInput.addEventListener("blur", validateName);
numberInput.addEventListener("blur", validateNumber);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMessage);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateName();
  validateNumber();
  validateEmail();
  validateMessage();
  if (
    nameError.textContent === "" &&
    numberError.textContent === "" &&
    emailError.textContent === "" &&
    messageError.textContent === ""
  ) {
    form.style.display = "none";
    sent.style.display = "block";
  }
});
