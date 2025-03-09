document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is loaded');
    
    // Event listeners para os links de navegação
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    
    home.addEventListener('click', function() {
        console.log('Home clicked');
    });
    
    about.addEventListener('click', function() {
        console.log('About clicked');
    });
    
    contact.addEventListener('click', function() {
        console.log('Contact clicked');
    });
    
    // Event listeners para os botões
    const button = document.getElementById('button');
    const button2 = document.getElementById('button2');
    const container = document.getElementById('container');

    // Verificar se os elementos existem antes de adicionar os listeners
    if (button && container) {
        button.addEventListener('click', function() {
            console.log('Button clicked');
            container.innerHTML = '<h1>teste</h1>';
        });
    }

    if (button2 && container) {
        button2.addEventListener('click', function() {
            console.log('Button2 clicked');
            container.innerHTML = '<h2>teste2</h2>';
        });
    }
});