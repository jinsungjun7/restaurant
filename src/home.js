export default function home() {
    //main title
    const title = document.createElement('div');
    title.classList.add("homeTitle");
    title.textContent = '패스트리';

    const description = document.createElement('div');
    description.classList.add('homeDescription');
    description.textContent = 'We serve award-winning Korean pastries and desserts.';

    const btn = document.createElement('div');
    btn.textContent = 'Our Menu';
    btn.classList.add('tab');
    btn.classList.add('menuBtn')
    btn.setAttribute('id', 'menu');
    
    return [title, description, btn];
};

