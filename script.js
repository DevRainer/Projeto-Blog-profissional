document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (email && isValidEmail(email)) {
                alert(`Obrigado por se inscrever com o e-mail: ${email}`);
                emailInput.value = ''; // Limpa o campo após o envio (simulado)
                // Aqui você faria uma chamada AJAX para o seu backend
                // para realmente salvar o e-mail na sua lista de newsletter.
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }

    function isValidEmail(email) {
        // Uma validação de e-mail básica
        return /\S+@\S+\.\S+/.test(email);
    }
});