const formInputs = document.querySelectorAll("input");
const formInputEmail = document.querySelector("#emailInput");
const formInputDate = document.querySelector("#dateInput");
const submitBtn = document.querySelector("#submitBtn");

const currentDate = new Date();

function validateForm() {
  const parsedDate = Date.parse(formInputDate.value);
  validateDate(parsedDate);
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}@[a-zA-Z0-9]{5,}\.(com|net)$/gm;
  const str = formInputEmail.value;

  if (regex.exec(str) !== null && validateDate(parsedDate)) {
    alert("Welcome!");
  } else {
    alert("Try Again!");
  }
  formInputs.values = " ";
}
function validateDate(input) {
  if (input < currentDate) return alert("Invalid date!");
}
