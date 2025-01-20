
//Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
mobile_btn.addEventListener("click", function() {
   mobile_menu.classList.add("flex");
   //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVA uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
   mobile_menu.classList.remove("flex");
});