const name = document.getElementById("form-name")
const email = document.getElementById("form-mail")
const message = document.getElementById("form-message");
const phone = document.getElementById("form-phone");
const frm = document.getElementById("contact");

const send = (templateParams) => {
  emailjs.sendForm("service_rhr5ves", "template_0knhxip", "#contact").then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};

const resetForm = () => {
  name.value = "";
  email.value = "";
  message.value = "";
  phone.value = "";
};

const submit = (e) => {
    debugger;
  e.preventDefault();
  console.log(name.value, email.value, message.value,phone.value);

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