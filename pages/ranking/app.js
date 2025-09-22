// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de ranking carregada');
    
    // Carrega os dados iniciais
    initializeTabs();
});


//Inicializa a funcionalidade das tabs
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove classe active de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado
            this.classList.add('active');
            
            // Chama função para trocar o conteúdo
            switchTab(tabId);
        });
    });
}

/**
 * Troca o conteúdo baseado na tab selecionada
 * @param {string} tabId - ID da tab (funcionarios ou lojas)
 */
function switchTab(tabId) {
    console.log(`Mudando para tab: ${tabId}`);
    const contentMenu = document.querySelectorAll('.content-menu');
    contentMenu.forEach(btn => btn.classList.remove('active'));

    
    if (tabId === 'container-funcionarios') {
        showFuncionariosContent();
    } else if (tabId === 'container-lojas') {
        showLojasContent();
    }
}

// Exibe o conteúdo de funcionários
function showFuncionariosContent() {
    console.log('Exibindo ranking de funcionários');

    const funcionarios = document.getElementById('container-funcionarios');
    funcionarios.classList.add('active')

}

// Exibe o conteúdo de lojas
function showLojasContent() {   
    console.log('Exibindo ranking de lojas');
    
    const loja = document.getElementById('container-lojas');
    loja.classList.add('active')
}
