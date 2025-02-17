
function abrirModal(ocultista) {
    // Definir as informações de contato baseadas no ocultista selecionado
    let infoContato = '';
    switch (ocultista) {
        case 'mortalia':
            infoContato = `<p><strong>Contato:</strong> mortalia@torbox3uiot6wchz.onion</p>
                               <p><strong>Telefone:</strong> (99) 98765-4321</p>`;
            break;
        case 'corvo':
            infoContato = `<p><strong>Contato:</strong> corvo@eludeinwjq5p6f.onion</p>
                               <p><strong>Telefone:</strong> (99) 98876-5432</p>`;
            break;
        case 'urutau':
            infoContato = `<p><strong>Contato:</strong> urutau@sinbox4dkw6e5.onion</p>
                               <p><strong>Telefone:</strong> (99) 98987-6543</p>`;
            break;
        case 'Calau-Oriental':
            infoContato = `<p><strong>Contato:</strong> calau-Oriental@deepmx7zv3onion.onion</p>
                                <p><strong>Telefone:</strong> (99) 32874-8436</p>`;
            break;
        default:
            infoContato = `<p>Informações não disponíveis.</p>`;
            break;
    }

    // Exibir o conteúdo do modal com as informações de contato
    document.getElementById('modal-info').innerHTML = infoContato;

    // Mostrar o modal
    document.getElementById('modal-contato').style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal-contato').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita navegação imediata

            // Adiciona a animação de fade-out no body
            document.body.classList.add("fade-out");

            // Espera o tempo da animação de saída (500ms) antes de navegar
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); 
        });
    });

    // Quando a nova página for carregada, aplica a animação de fade-in
    window.addEventListener('load', () => {
        const content = document.querySelector('.content');
        if (content) {
            content.classList.add("fade-in");
            
            // Adiciona a animação de entrada gradual aos elementos internos
            const elements = content.querySelectorAll('.fade-in-element');
            elements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.3}s`; // Escalonar animações
                element.classList.add('fade-in-element');
            });
        }
    });
});
