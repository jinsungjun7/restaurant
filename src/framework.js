export default function framework() {
    // header menu bar
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = '패스트리';

    const menuBar = document.createElement('div');
    const home = document.createElement('div');
    home.textContent = 'Home';
    home.setAttribute('id', 'home');
    const menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'menu');
    const contact = document.createElement('div');
    contact.textContent = 'Contact Us';
    contact.setAttribute('id', 'contact');

    menuBar.classList.add("menuBar");
    menuBar.setAttribute('id', 'home');
    home.classList.add('tab');
    menu.classList.add('tab');
    contact.classList.add('tab');
    menuBar.appendChild(home);
    menuBar.appendChild(menu);
    menuBar.appendChild(contact);

    
    header.appendChild(title);
    header.appendChild(menuBar);

    
    // body 
    const body = document.createElement('div');
    body.classList.add('body');
    body.setAttribute('id', 'home');
    
    // footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = 'Copyright &copy; 2022 Jinsungjun';


    return [header, body, footer];
}