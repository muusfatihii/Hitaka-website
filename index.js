

const hamburger_menu_icon = document.getElementById("hamburger-menu");


hamburger_menu_icon.addEventListener('click',function(){

    const hamburger_menu = document.getElementById('nav-bar-mobile');

    hamburger_menu.classList.toggle("hamburger-visible");
    //hamburger_menu.setAttribute('style','visibility:visible; height: fit-content;');
});