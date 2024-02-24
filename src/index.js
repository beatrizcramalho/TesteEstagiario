/*
  Definir uma validação para os campos não permitindo enviar com os valores em branco;
  Após clicar no botão enviar, os valores dos campos devem ser passados para um objeto do JS, é este deve ser exibido no console do browser;
  Após clicar no botão enviar, ocultar o formulário e exibir a mensagem: Obrigado por seu cadastro!
  Utilizar somente o arquivo index.js para adicionar todo o código JS
*/

// Mantém o card escondido até que o formulário seja preenchido e enviado corretamente.
$('#box').hide();

// Recebe os dados informados, esconde o formulário e apresenta a página de agradecimento.
function enviar(){

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  
  // Define os caracteres permitidos para validar corretamente cada campo.
  const regexNome = /^[a-zA-Z\s]+$/;
  const regexTelefone = /^\d{2} \d{5}-\d{4}$/;
  const regexEmail = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    // Validar nome.
    if (!regexNome.test(nome)) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Validar telefone.
    if (!regexTelefone.test(telefone)) {
        alert("Por favor, insira um telefone válido (no formato xx xxxxxxxxx).");
        return;
    }

    // Validar email.
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

  const formDados = {
      nome: nome,
      telefone: telefone,
      email: email
  };

  $("form").on("submit", function(event) {
    event.preventDefault();
    $("form").hide();
    $("#box").show();
  } );

  console.log(formDados);

}