const contatoForm = document.getElementById("contato-form"),
  contatomensagem = document.getElementById("contato__mensagem");

const sendEmail = (e) => {
  e.preventDefault();
};

contatoForm.addEventListener("submit", sendEmail);
