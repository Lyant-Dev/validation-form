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
const nameIcon = document.querySelector("#name-icon");
const numberIcon = document.querySelector("#number-icon");
const emailIcon = document.querySelector("#email-icon");
const messageIcon = document.querySelector("#message-icon");

function showError(input, error, hint, icon) {
  if (hint !== "") {
    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");
    icon.classList.add("active");
  } else {
    input.classList.remove("shake");
    icon.classList.remove("active");
  }
  error.textContent = hint;
}
function validateName() {
  const value = nameInput.value.trim();
  if (value === "") {
    showError(nameInput, nameError, "Nama wajib diisi!", nameIcon);
  } else if (value.length < 2) {
    showError(
      nameInput,
      nameError,
      "Tidak boleh kurang dari 2 karakter!",
      nameIcon,
    );
  } else if (!namePattern.test(value)) {
    showError(
      nameInput,
      nameError,
      "Nama hanya boleh huruf dan apostrof (')",
      nameIcon,
    );
  } else {
    showError(nameInput, nameError, "", nameIcon);
  }
}

function validateNumber() {
  const value = numberInput.value.trim();
  const numberPattern = value.replace(/\D/g, "");
  const allowedCharacters = /^[-+0-9\s]+$/;

  if (value === "") {
    showError(numberInput, numberError, "Nomor wajib diisi!", numberIcon);
  } else if (numberPattern.length < 10 || numberPattern.length > 13) {
    showError(
      numberInput,
      numberError,
      "Nomor harus terdiri dari 10-13 angka",
      numberIcon,
    );
  } else if (!allowedCharacters.test(value)) {
    showError(
      numberInput,
      numberError,
      "Hanya boleh memakai angka dan tanda + atau -",
      numberIcon,
    );
  } else {
    showError(numberInput, numberError, "", numberIcon);
  }
}
function validateEmail() {
  const value = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

  if (value === "") {
    showError(emailInput, emailError, "Email wajib diisi!", emailIcon);
  } else if (!emailPattern.test(value)) {
    showError(emailInput, emailError, "Format email salah!", emailIcon);
  } else {
    showError(emailInput, emailError, "", emailIcon);
  }
}
function validateMessage() {
  const value = messageInput.value.trim();
  const messagePattern = /[a-zA-Z0-9]+/;
  if (value === "") {
    showError(messageInput, messageError, "Pesan wajib diisi!", messageIcon);
  } else if (value.length < 15 || value.length > 500) {
    showError(
      messageInput,
      messageError,
      "Masukkan minimal 15 dan maksimal 500 karakter",
      messageIcon,
    );
  } else if (!messagePattern.test(value)) {
    showError(
      messageInput,
      messageError,
      "Isi pesan dengan benar!",
      messageIcon,
    );
  } else {
    showError(messageInput, messageError, "", messageIcon);
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
