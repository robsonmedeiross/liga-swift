document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de ranking carregada');
    
    initializeTabs();
});


function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            switchTab(tabId);
        });
    });
}

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

function showFuncionariosContent() {
    console.log('Exibindo ranking de funcionários');

    const funcionarios = document.getElementById('container-funcionarios');
    funcionarios.classList.add('active')

}

function showLojasContent() {   
    console.log('Exibindo ranking de lojas');
    
    const loja = document.getElementById('container-lojas');
    loja.classList.add('active')
}
