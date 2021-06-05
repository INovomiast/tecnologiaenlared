const loading_screen = document.getElementById('loading_screen');
const website_content = document.getElementById('content');
const h_text_display = document.getElementById('h_t_disp');

var phrases = ['Bienvenido a TecnologiaEnLaRed!', 'Creado por INovomiast'];

function load(){
    website_content.style.display = 'none';
    loading_screen.style.display = 'block';
    document.body.style.overflow = 'hidden';
    loading_screen.style.cursor = 'none';
    h_text_display.innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
    setTimeout(function(){  
        website_content.style.animation = 'website_appear 2s';
        website_content.style.display = 'block';
        website_content.style.cursor = 'cursor';
        loading_screen.style.display = 'none';
        loading_screen.style.animation = 'loading_screen_disappear 2s';

    }, 5000);
}