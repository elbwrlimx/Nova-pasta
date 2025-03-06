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
    
    // Event listener para o botão
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
        console.log('Button clicked');
    });
});