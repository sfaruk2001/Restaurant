import "./home.css";

export default function homepageLoad() {
    let divContainer = document.getElementById('content');
    
    let homeDescription = document.createElement("div");
    homeDescription.classList.add('home-description');

    let pizzaHeader = document.createElement("div");
    pizzaHeader.classList.add('pizza-header');
    pizzaHeader.innerText = "Authentic Italian Pizza!";

    let pizzaBlurb = document.createElement("div");
    pizzaBlurb.classList.add('pizza-blurb');
    pizzaBlurb.innerText = "Delicious Italian pizza straight from the oven - with delivery to your door!";

    let orderButton = document.createElement("button");
    orderButton.classList.add('order-button');
    orderButton.innerText = "Order online";

    let homePizza = document.createElement("div");
    homePizza.classList.add('home-pizza');


    divContainer.appendChild(homeDescription);
    homeDescription.appendChild(pizzaHeader);
    homeDescription.appendChild(pizzaBlurb);
    homeDescription.appendChild(orderButton);
    divContainer.appendChild(homePizza);
}