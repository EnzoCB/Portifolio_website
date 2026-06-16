const contatoForm = document.getElementById("contato-form"),
  contatoMensagem = document.getElementById("contato__mensagem");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_iadyxwl",
      "template_wi2qifw",
      "#contato-form",
      "PKNxT9V2OTmkZX96v",
    )
    .then(() => {
      contatoMensagem.textContent = "Mensagem enviada com sucesso ✔";
      contatoForm.reset();
      setTimeout(() => {
        contatoMensagem.textContent = "";
      }, 5000);
    })
    .catch((erro) => {
      contatoMensagem.textContent = "Erro ao enviar a mensagem ❌";
      console.log("Erro do EmailJS:", erro);
    });
};

contatoForm.addEventListener("submit", sendEmail);
