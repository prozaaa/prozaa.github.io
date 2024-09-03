function verificarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    } else {
        document.getElementById("meuForm").submit(); // Submete o formulário se todos os campos estiverem preenchidos
    }
}