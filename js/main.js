document.addEventListener('DOMContentLoaded', function() {
    console.log('Liga Swift - Aplicação carregada com sucesso!');
    
    initializeComponents();
    
    addEventListeners();
});

function initializeComponents() {
    console.log('Componentes inicializados');
}

function addEventListeners() {
    console.log('Event listeners adicionados');
}

window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    if (!logo) return;
    if (window.scrollY > 0) {
        logo.classList.add('logo-bg');
    } else {
        logo.classList.remove('logo-bg');
    }
});

const bottomNav = document.querySelector('.bottom-nav');
const footer = document.querySelector('footer');

if (bottomNav && footer) {
    bottomNav.style.transition = 'opacity 0.3s';
    let isHidden = false;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!isHidden) {
                        bottomNav.style.opacity = '0';
                        setTimeout(() => {
                            bottomNav.style.pointerEvents = 'none';
                        }, 300);
                        isHidden = true;
                    }
                } else {
                    if (isHidden) {
                        bottomNav.style.opacity = '1';
                        bottomNav.style.pointerEvents = '';
                        isHidden = false;
                    }
                }
            });
        },
        { root: null, threshold: 0 }
    );
    observer.observe(footer);
}