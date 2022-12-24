const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message");
const phone = document.getElementById("phone");
const frm = document.getElementById("contact");

const resetForm = () => {
  name.value = "";
  email.value = "";
  message.value = "";
  phone.value = "";
  name.focus();
};

const submit = (e) => {
  e.preventDefault();
  const temp_params = {
    name: name.value,
    email: email.value,
    message: message.value,
    phone: phone.value,
  };
  resetForm();
};

frm.addEventListener("submit", submit);