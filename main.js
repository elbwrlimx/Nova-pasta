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

    // Variáveis para controlar o tempo
    let startTime1, startTime2;
    
    if (button && container) {
        button.addEventListener('mousedown', function() {
            startTime1 = new Date().getTime();
        });

        button.addEventListener('mouseup', function() {
            const endTime = new Date().getTime();
            const segundos = (endTime - startTime1) / 1000;
            console.log(`Botão 1 ficou pressionado por ${segundos} segundos`);
            container.innerHTML = '<h1>teste</h1>';
        });
    }

    if (button2 && container) {
        button2.addEventListener('mousedown', function() {
            startTime2 = new Date().getTime();
        });

        button2.addEventListener('mouseup', function() {
            const endTime = new Date().getTime();
            const segundos = (endTime - startTime2) / 1000;
            console.log(`Botão 2 ficou pressionado por ${segundos} segundos`);
            container.innerHTML = '<h2>teste2</h2>';
        });
    }
});