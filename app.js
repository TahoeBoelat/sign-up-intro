// Learning from
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript

// Initialing Variable
const form = document.getElementsByTagName("form")[0];

const firstNameField = document.querySelector(".js-first-name-field");
const firstNameFieldError = document.querySelector(
  ".js-first-name-field + span.alert-dialog"
);

const lastNameField = document.querySelector(".js-last-name-field");
const lastNameFieldError = document.querySelector(
  ".js-last-name-field + span.alert-dialog"
);

const userEmailField = document.querySelector(".js-email-field");
const userEmailFieldError = document.querySelector(
  ".js-email-field + span.alert-dialog"
);

const userPasswordField = document.querySelector(".js-password-field");
const userPassFieldError = document.querySelector(
  ".js-password-field + span.alert-dialog"
);

// Per Input Logic
// First name input
firstNameField.addEventListener("input", function (event) {
  if (firstNameField.validity.valid) {
    firstNameFieldError.textContent = "";
  } else {
    showErrorFirstName();
  }
});
// Last name input
lastNameField.addEventListener("input", function (event) {
  if (lastNameField.validity.valid) {
    lastNameFieldError.textContent = "";
  } else {
    showErrorLastName();
  }
});
// Email input
userEmailField.addEventListener("input", function (event) {
  if (userEmailField.validity.valid) {
    userEmailFieldError.textContent = "";
  } else {
    showErrorEmail();
  }
});
// Password input
userPasswordField.addEventListener("input", function (event) {
  if (userPasswordField.validity.valid) {
    userPassFieldError.textContent = "";
  } else {
    showErrorPassword();
  }
});

// Form Logic
form.addEventListener("submit", function (event) {
  // First name condition
  if (!firstNameField.validity.valid) {
    showErrorFirstName();
    event.preventDefault();
  }
  // Last name condition
  if (!lastNameField.validity.valid) {
    showErrorLastName();
    event.preventDefault();
  }
  // Email input condition
  if (!userEmailField.validity.valid) {
    showErrorEmail();
    event.preventDefault();
  }
  // Password input condition
  if (!userPasswordField.validity.valid) {
    showErrorPassword();
    event.preventDefault;
  }
});

// Error Logic
// First name error function
function showErrorFirstName() {
  // First Name Input Error Logic
  if (firstNameField.validity.valueMissing) {
    firstNameFieldError.textContent = "First name cannot be empty";
  }
  firstNameFieldError.className = "alert-dialog";
}
// Last name error function
function showErrorLastName() {
  // Last name input error logic
  if (lastNameField.validity.valueMissing) {
    lastNameFieldError.textContent = "Last name cannot be empty";
  }
  lastNameFieldError.className = "alert-dialog";
}
// Email error function
function showErrorEmail() {
  if (userEmailField.validity.valueMissing) {
    userEmailFieldError.textContent = "Email cannot be empty";
  } else if (userEmailField.validity.typeMismatch) {
    userEmailFieldError.textContent = "Looks like this is not an email";
  }
  userEmailFieldError.className = "alert-dialog";
}
// Password error function
function showErrorPassword() {
  if (userPasswordField.validity.valueMissing) {
    userPassFieldError.textContent = "Password cannot be empty";
  }
  userPassFieldError.className = "alert-dialog";
}
// Testing
