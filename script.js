
const botao = document.getElementById("botaoContato");

botao.addEventListener("click", function () {
    const numeroWhatsApp = "5584994192821";

    const mensagem = "Olá! Gostaria de solicitar um orçamento para os serviços da AC TECH.";

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
});

const formulario = document.getElementById("formOrcamento");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !servico || !mensagem) {
        alert("Preencha todos os campos antes de continuar.");
        return;
    }

    const numeroWhatsApp = "5584994192821";

    const texto = `Olá! Meu nome é ${nome}.

Gostaria de solicitar um orçamento para:
${servico}

Descrição:
${mensagem}`;

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(link, "_blank");
});
