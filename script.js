document.addEventListener('DOMContentLoaded', () => {
    const formContato = document.querySelector('#form-contato');

    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            
            const nome = document.querySelector('input[name="nome"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const telefone = document.querySelector('input[name="telefone"]').value.trim();
            const quantidade = document.querySelector('input[name="quantidade"]').value;

            if (nome.length < 3) {
                alert("Por favor, preencha seu nome completo.");
                event.preventDefault();
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, insira um e-mail válido.");
                event.preventDefault();
                return;
            }

            if (telefone.length < 10) {
                alert("O telefone deve conter o DDD e pelo menos 8 dígitos.");
                event.preventDefault();
                return;
            }

            if (quantidade < 1) {
                alert("A quantidade de pessoas deve ser no mínimo 1.");
                event.preventDefault();
                return;
            }

            alert("Sua solicitação foi validada com sucesso! Um consultor entrará em contato em breve.");
        });
    }
});
