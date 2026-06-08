const form = document.querySelector(".form-data");
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector(".submit-btn");

function validateName() {
  const value = nameInput.value.trim();
  if (value === "") {
    console.log("Nama wajib diisi!");
  } else if (value.length < 2) {
    console.log("Tidak boleh kurang daru 2 karakter");
  }
}
nameInput.addEventListener("blur", validateName);
