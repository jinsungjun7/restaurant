import fishPastry from './fishPastry.jpg';
import shavedIce from './shavedIce.jpg';
import riceCake from './riceCake.jpg';


export default function menu() {
    const menuItem1 = document.createElement('div')
    menuItem1.classList.add('menuItem');
    const menuItem1Title = document.createElement('div');
    menuItem1Title.classList.add('menuTitle');
    menuItem1Title.textContent = '붕어빵 Bungeoppang';
    const menuItem1Desc = document.createElement('div');
    menuItem1Desc.classList.add('menuDesc');
    menuItem1Desc.textContent = 'A Korean fish-shaped pastry bursting with sweetness from red bean filling';
    const fishImg = new Image();
    fishImg.src = fishPastry;
    fishImg.classList.add('menuImg');

    const menuItem2 = document.createElement('div')
    menuItem2.classList.add('menuItem');
    const menuItem2Title = document.createElement('div');
    menuItem2Title.classList.add('menuTitle');
    menuItem2Title.textContent = '팥빙수 Patbingsu';
    const menuItem2Desc = document.createElement('div');
    menuItem2Desc.classList.add('menuDesc');
    menuItem2Desc.textContent = 'A Korean shaved ice dessert with sweet toppings like chopped fruit, condensed milk, syrup and red beans';
    const shavedIceImg = new Image();
    shavedIceImg.src = shavedIce;
    shavedIceImg.classList.add('menuImg');

    const menuItem3 = document.createElement('div')
    menuItem3.classList.add('menuItem');
    const menuItem3Title = document.createElement('div');
    menuItem3Title.classList.add('menuTitle');
    menuItem3Title.textContent = '송편 Songpyeon';
    const menuItem3Desc = document.createElement('div');
    menuItem3Desc.classList.add('menuDesc');
    menuItem3Desc.textContent = 'A traditional Korean food made with rice flour and stuffed with sweetened sesame seeds';
    const riceCakeImg = new Image();
    riceCakeImg.src = riceCake;
    riceCakeImg.classList.add('menuImg');

    // Add everything to menu item container
    menuItem1.appendChild(fishImg);
    menuItem1.appendChild(menuItem1Title);
    menuItem1.appendChild(menuItem1Desc);    
    menuItem2.appendChild(shavedIceImg);
    menuItem2.appendChild(menuItem2Title);
    menuItem2.appendChild(menuItem2Desc);    
    menuItem3.appendChild(riceCakeImg);
    menuItem3.appendChild(menuItem3Title);
    menuItem3.appendChild(menuItem3Desc);    

    return [menuItem1, menuItem2, menuItem3];
};