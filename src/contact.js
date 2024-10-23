import "./contact.css";

export default function createContract() {
    let container = document.getElementById('content'); 

    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    let title = document.createElement('h1');
    title.classList.add('contact-title');
    title.innerText = "CONTACT US";

    let restPhone = document.createElement('div');
    restPhone.classList.add('rest-phone');
    restPhone.innerText = "917-333-8857";

    let restMail = document.createElement('div');
    restMail.classList.add('rest-mail');
    restMail.innerText = "vpizza456@gmail.com";

    let contactForm = document.createElement('form');
    contactForm.classList.add('pizza-form');

    let name = document.createElement('div');
    name.classList.add('in-usr');
    let nLabel = document.createElement('label');
    nLabel.setAttribute('for', 'name');
    nLabel.textContent = "Name:";
    let nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('name','name');
    nameInput.setAttribute('id', 'inName');
    name.appendChild(nLabel);
    name.appendChild(nameInput);

    let phone = document.createElement('div');
    phone.classList.add('in-usr');
    let pLabel = document.createElement('label');
    pLabel.setAttribute('for', 'phone');
    pLabel.textContent = "Phone:";
    let phoneInput = document.createElement('input');
    phoneInput.setAttribute('type','text');
    phoneInput.setAttribute('name','phone');
    phoneInput.setAttribute('id', 'inPhone');
    phone.appendChild(pLabel);
    phone.appendChild(phoneInput);

    let email = document.createElement('div');
    email.classList.add('in-usr');
    let eLabel = document.createElement('label');
    eLabel.setAttribute('for', 'email');
    eLabel.textContent = "Email:";
    let emailInput = document.createElement('input');
    emailInput.setAttribute('type','text');
    emailInput.setAttribute('name','email');
    emailInput.setAttribute('id', 'inEmail');
    email.appendChild(eLabel);
    email.appendChild(emailInput);

    let msg = document.createElement('div');
    msg.classList.add('in-usr');
    let mLabel = document.createElement('label');
    mLabel.setAttribute('for', 'message');
    mLabel.textContent = "Message:";
    let msgInput = document.createElement('input');
    msgInput.setAttribute('type','text');
    msgInput.setAttribute('name','message');
    msgInput.setAttribute('id', 'inMessage');
    msg.appendChild(mLabel);
    msg.appendChild(msgInput);

    let submit = document.createElement('button');
    submit.classList.add('sub-button');
    submit.innerText = "Submit";



    contactForm.appendChild(name);
    contactForm.appendChild(phone);
    contactForm.appendChild(email);
    contactForm.appendChild(msg);
    contactForm.appendChild(submit);


    container.appendChild(contactContainer);
    contactContainer.appendChild(title);
    contactContainer.appendChild(restPhone);
    contactContainer.appendChild(restMail);
    contactContainer.appendChild(contactForm);
    
}