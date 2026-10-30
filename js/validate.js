// validera formulär
const formEl = document.querySelector("#form");
const errorEl = document.querySelector("#errorList");

const nameInputEl = document.querySelector("#name");
const emailInputEl = document.querySelector("#email");
const topicSelectEl = document.querySelector("#topic");
const messageInputEl = document.querySelector("#message");

function validateForm() {
  console.log("Validerar formulär");

  const errors = [];

  const nameInputValue = nameInputEl.value.trim();
  if (nameInputValue === "") {
    errors.push("Namn saknas");
  }

  const emailInputValue = emailInputEl.value.trim();
  if (emailInputValue === "") {
    errors.push("E-postadress saknas");
  }

  const topicSelectValue = topicSelectEl.value.trim();
  if (topicSelectValue === "") {
    errors.push("Välj ett ämne");
  }

  const messageInputValue = messageInputEl.value.trim();
  if (messageInputValue === "") {
    errors.push("Meddelande saknas");
  }
  displayErrors(errors);

  return errors.length === 0;
}

function displayErrors(errors) {
  console.log("Visar felmeddelanden");

  errorEl.innerHTML = "";

  errors.forEach(function (error) {
    const liEl = document.createElement("li");
    liEl.textContent = error;
    errorEl.appendChild(liEl);
  });
}

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    console.log("Formuläret skickades!");

    errorEl.innerHTML = "";

    const successLi = document.createElement("li");
    successLi.textContent = "Meddelande skickat, tack!";
    successLi.classList.add("success-message");
    errorEl.appendChild(successLi);

    formEl.reset();
  }
});
