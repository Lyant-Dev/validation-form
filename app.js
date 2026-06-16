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

function validateName() {
  const value = nameInput.value.trim();
  if (value === "") {
    nameError.textContent = "Nama wajib diisi!";
  } else if (value.length < 2) {
    nameError.textContent = "Tidak boleh kurang dari 2 karakter";
  } else if (!namePattern.test(value)) {
    nameError.textContent = "Nama hanya boleh huruf dan apostrof (')";
  } else {
    nameError.textContent = "";
  }
}
function validateNumber() {
  const value = numberInput.value.trim();
  const numberPattern = value.replace(/\D/g, "");
  const allowedCharacters = /^[-+0-9\s]+$/;

  if (value === "") {
    numberError.textContent = "Nomor wajib diisi!";
  } else if (numberPattern.length < 10 || numberPattern.length > 13) {
    numberError.textContent = "Nomor harus terdiri dari 10-13 angka";
  } else if (!allowedCharacters.test(value)) {
    numberError.textContent = "Hanya boleh memakai angka dan tanda + atau -";
  } else {
    numberError.textContent = "";
  }
}
function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

  if (value === "") {
    emailError.textContent = "Email wajib diisi!";
  } else if (!emailPattern.test(value)) {
    emailError.textContent = "Format email salah!";
  } else {
    emailError.textContent = "";
  }
}
function validateMessage() {
  const value = messageInput.value.trim();
  const messagePattern = /[a-zA-Z0-9]+/;
  if (value === "") {
    messageError.textContent = "Pesan wajib di isi";
  } else if (value.length < 15 || value.length > 500) {
    messageError.textContent = "Masukkan minimal 15 dan maksimal 500 karakter";
  } else if (!messagePattern.test(value)) {
    messageError.textContent = "Isi pesan dengan benar!";
  } else {
    messageError.textContent = "";
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
