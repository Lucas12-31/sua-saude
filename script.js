document.addEventListener('DOMContentLoaded', () => {
    const formContato = document.querySelector('#form-contato');

    if (formContato) {
        formContato.addEventListener('submit', function(event) {

            event.preventDefault();

            const nome = document.querySelector('input[name="nome"]');
            const email = document.querySelector('input[name="email"]');
            const telefone = document.querySelector('input[name="telefone"]');
            const quantidade = document.querySelector('input[name="quantidade"]');

            let erros = [];

            if (nome.value.trim().length < 3) {
                erros.push("Digite seu nome completo.");
                nome.style.borderColor = "red"; 
            } else {
                nome.style.borderColor = "#ccc";
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                erros.push("Insira um e-mail válido.");
                email.style.borderColor = "red";
            } else {
                email.style.borderColor = "#ccc";
            }

            if (telefone.value.trim().length < 10) {
                erros.push("Telefone inválido (mínimo 10 dígitos).");
                telefone.style.borderColor = "red";
            } else {
                telefone.style.borderColor = "#ccc";
            }

            if (erros.length > 0) {
                alert("Erros encontrados:\n\n" + erros.join("\n"));
            } else {
                alert("Validação JS concluída com sucesso! Enviando dados...");
                formContato.submit(); 
            }
        });
    }
});
