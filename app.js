const form = document.querySelector(".form-data");
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector(".submit-btn");
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
  console.log("value:", value);
  console.log("test result:", allowedCharacters.test(value));
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
nameInput.addEventListener("blur", validateName);
numberInput.addEventListener("blur", validateNumber);
emailInput.addEventListener("blur", validateEmail);
