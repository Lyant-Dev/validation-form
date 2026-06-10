const form = document.querySelector(".form-data");
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector(".submit-btn");
const namePattern = /^[a-zA-Z\s']+$/;

function validateName() {
  const value = nameInput.value.trim();
  if (value === "") {
    console.log("Nama wajib diisi!");
  } else if (value.length < 2) {
    console.log("Tidak boleh kurang dari 2 karakter");
  } else if (!namePattern.test(value)) {
    console.log("Nama hanya boleh huruf dan apostrof (')");
  }
}
nameInput.addEventListener("blur", validateName);

// TODO next session:
// - Refactor: bikin function showError(input, message)
// - Replace console.log → tampil di DOM (di bawah field)
// - Atau: lanjut validateNumber pakai pattern yg sama