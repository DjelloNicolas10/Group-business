// Seleção dos elementos
const mobileBtn = document.getElementById('mobile_btn');
const closeButton = document.getElementById('closeButton');
const mobileMenu = document.getElementById('mobile_menu');

// Abrir o menu móvel
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Fechar o menu móvel
closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});
