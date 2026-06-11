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
nameInput.addEventListener("blur", validateName);
