const formulario = document.querySelector(".contacto form");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";

    formulario.reset();

    setTimeout(function () {
        mensagemSucesso.textContent = "";
    }, 3000);
});