const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("phone");
const phone = document.getElementById("message");
const frm = document.getElementById("contact");

const resetForm = () => {
  name.value = "";
  email.value = "";
  message.value = "";
  phone.value = "";
};

const submit = (e) => {
  e.preventDefault();
  const temp_params = {
    name: name.value,
    email: email.value,
    message: message.value,
    phone: phone.value,
  };

  send(temp_params);
  resetForm();
};

frm.addEventListener("submit", submit);