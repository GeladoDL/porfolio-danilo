// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simples validação
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert(`Obrigado pela sua mensagem, ${nome}!`);
    
    // Limpa os campos após envio
    document.querySelector('form').reset();
});
