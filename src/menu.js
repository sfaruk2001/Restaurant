import "./menu.css";
import cheeseSlice from "./img/cheeseSlice.jpg";
import pepSlice from "./img/pepSlice.jpg";
import churro from "./img/churro.jpg";
import gelatto from "./img/chocoGelatto.jpg";
import lasagna from "./img/lasagna.jpg";
import pasta from "./img/pasta.jpg";
import spag from "./img/spaghetti.jpg";
import tira from "./img/Tiramisu.jpg";

export default function createMenu() {
    let container = document.getElementById('content');

    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    let title = document.createElement('div');
    title.classList.add('menu-title');
    title.textContent = "Vinny's Menu";

    let menu = document.createElement('div');
    menu.classList.add('menu-items');

    let item1 = document.createElement('div');
    item1.classList.add('item');
    let img1 = document.createElement('img');
    img1.src = cheeseSlice;
    let name1 = document.createElement('div');
    name1.classList.add('item-name');
    name1.innerText = "Cheese Slice";
    let price1 = document.createElement('div');
    price1.classList.add('item-price');
    price1.innerText = "$2.50";
    item1.appendChild(img1);
    item1.appendChild(name1);
    item1.appendChild(price1);
    

    let item2 = document.createElement('div');
    item2.classList.add('item');
    let img2 = document.createElement('img');
    img2.src = pepSlice;
    let name2 = document.createElement('div');
    name2.classList.add('item-name');
    name2.innerText = "Pepperoni Slice";
    let price2 = document.createElement('div');
    price2.classList.add('item-price');
    price2.innerText = "$3.50";
    item2.appendChild(img2);
    item2.appendChild(name2);
    item2.appendChild(price2);

    let item3 = document.createElement('div');
    item3.classList.add('item');
    let img3 = document.createElement('img');
    img3.src = churro;
    let name3 = document.createElement('div');
    name3.classList.add('item-name');
    name3.innerText = "Churro";
    let price3 = document.createElement('div');
    price3.classList.add('item-price');
    price3.innerText = "$1.50";
    item3.appendChild(img3);
    item3.appendChild(name3);
    item3.appendChild(price3);

    let item4 = document.createElement('div');
    item4.classList.add('item');
    let img4 = document.createElement('img');
    img4.src = gelatto;
    let name4 = document.createElement('div');
    name4.classList.add('item-name');
    name4.innerText = "Gelatto";
    let price4 = document.createElement('div');
    price4.classList.add('item-price');
    price4.innerText = "$4.50";
    item4.appendChild(img4);
    item4.appendChild(name4);
    item4.appendChild(price4);

    let item5 = document.createElement('div');
    item5.classList.add('item');
    let img5 = document.createElement('img');
    img5.src = lasagna;
    let name5 = document.createElement('div');
    name5.classList.add('item-name');
    name5.innerText = "Lasagna";
    let price5 = document.createElement('div');
    price5.classList.add('item-price');
    price5.innerText = "$8.50";
    item5.appendChild(img5);
    item5.appendChild(name5);
    item5.appendChild(price5);

    let item6 = document.createElement('div');
    item6.classList.add('item');
    let img6 = document.createElement('img');
    img6.src = pasta;
    let name6 = document.createElement('div');
    name6.classList.add('item-name');
    name6.innerText = "Pasta";
    let price6 = document.createElement('div');
    price6.classList.add('item-price');
    price6.innerText = "$12.50";
    item6.appendChild(img6);
    item6.appendChild(name6);
    item6.appendChild(price6);

    let item7 = document.createElement('div');
    item7.classList.add('item');
    let img7 = document.createElement('img');
    img7.src = spag;
    let name7 = document.createElement('div');
    name7.classList.add('item-name');
    name7.innerText = "Spaghetti";
    let price7 = document.createElement('div');
    price7.classList.add('item-price');
    price7.innerText = "$12.50";
    item7.appendChild(img7);
    item7.appendChild(name7);
    item7.appendChild(price7);

    let item8 = document.createElement('div');
    item8.classList.add('item');
    let img8 = document.createElement('img');
    img8.src = tira;
    let name8 = document.createElement('div');
    name8.classList.add('item-name');
    name8.innerText = "Tiramisu";
    let price8 = document.createElement('div');
    price8.classList.add('item-price');
    price8.innerText = "$9.50";
    item8.appendChild(img8);
    item8.appendChild(name8);
    item8.appendChild(price8);



    

    container.appendChild(menuContainer);
    menuContainer.appendChild(title);
    menuContainer.appendChild(menu);
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menu.appendChild(item6);
    menu.appendChild(item7);
    menu.appendChild(item8);

    

}