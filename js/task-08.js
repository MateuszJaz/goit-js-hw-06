const form = document.querySelector(".login-form");
let credentials = {};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    credentials.email = email.value;
    credentials.password = password.value;
    console.log(credentials);
  }
  event.currentTarget.reset();
}
