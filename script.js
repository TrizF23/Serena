// Botão de saudação
document.getElementById("botao-saudacao").addEventListener("click", function () {
  document.getElementById("mensagem").textContent = "Olá! Obrigado por visitar meu site 😄";
});

// Envio do formulário
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault(); // impede que a página recarregue
  document.getElementById("confirmacao").textContent = "Mensagem enviada com sucesso!";
});
