function showTab(tabName) {
    const tabs = ['pessoal', 'preferencias'];
    tabs.forEach(tab => {
        document.getElementById(tab).classList.add('d-none');
        document.querySelector(`button[onclick="showTab('${tab}')"]`).classList.remove('active');
    });
    document.getElementById(tabName).classList.remove('d-none');
    document.querySelector(`button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

// Quando for alterar o tema
document.getElementById('tema').addEventListener('change', function () {
    const temaSelecionado = this.value;
    const logo = document.getElementById('logo');
    const botoes = document.querySelectorAll('.tab-button');
    const menuInferior = document.querySelectorAll('.nav-button');

    if (temaSelecionado === 'Escuro') {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = 'white';
        logo.src = '../../assets/images/logo_swift2.png';

        botoes.forEach(botao => {
            botao.style.backgroundColor = '#333';
            botao.style.color = 'white';
            botao.style.border.active = '1px solid #666';
        });

        menuInferior.forEach(botao => {
            botao.style.background = '#121212';
        });
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.src = '../../assets/images/logo_swift.png';

        botoes.forEach(botao => {
            botao.style.backgroundColor = ''; // remove estilo inline
            botao.style.color = 'black';
            botao.style.border = '';
            botao.classList.remove('btn-outline-light');
            botao.classList.add('btn-ligth');

            menuInferior.forEach(botao => {
            botao.style.background = '#fff';
        });
        });
    }

    // salva a preferência
    localStorage.setItem('tema', temaSelecionado);
});

// Quando for alterar o idioma
document.getElementById('idioma').addEventListener('change', function () {
    const idiomaSelecionado = this.value;

    if (idiomaSelecionado === 'Inglês') {
        alert('Language changed to ENGLISH!');
    } else {
        alert('Idioma alterado para PORTUGUÊS!');
    }

    // salva a preferência
    localStorage.setItem('idioma', idiomaSelecionado);
});

// aplica as preferências
window.addEventListener('load', function () {
    const temaSalvo = localStorage.getItem('tema');
    const idiomaSalvo = localStorage.getItem('idioma');

    if (temaSalvo) {
        document.getElementById('tema').value = temaSalvo;
        document.getElementById('tema').dispatchEvent(new Event('change'));
    }

    if (idiomaSalvo) {
        document.getElementById('idioma').value = idiomaSalvo;
        document.getElementById('idioma').dispatchEvent(new Event('change'));
    }
});