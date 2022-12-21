import { resetWebpage } from './reset-webpage'
import { drawHomePage } from './home'
import { drawMenuPage } from './menu'

export function drawContactPage() {
    let content = document.querySelector('#content');

    //Create header section
    let header = document.createElement('div');
    header.setAttribute('id', 'header');

    let title = document.createElement('span');
    title.textContent = "Tyler's Steakhouse";
    title.setAttribute('id', 'title');

    let buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttons');

    let homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.setAttribute('id', 'btn');
    let menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.setAttribute('id', 'btn');
    let contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    contactButton.setAttribute('id', 'btn-active');

    function homeButtonFunction() { // Run function when home button is pressed
        resetWebpage();
        drawHomePage();
    }
    function menuButtonFunction() { // Run function when menu button is pressed
        resetWebpage();
        drawMenuPage();
    }
    function contactButtonFunction() { // Run function when contact button is pressed
        resetWebpage();
        drawContactPage();
    }

    homeButton.addEventListener('click', () => { // Attach event listener to home button
        homeButtonFunction();
    });
    menuButton.addEventListener('click', () => { // Attach event listener to menu button
        menuButtonFunction();
    });
    contactButton.addEventListener('click', () => { // Attach event listener to contact button
        contactButtonFunction();
    });

    buttons.appendChild(homeButton); // Add individual button to buttons div
    buttons.appendChild(menuButton); // Add individual button to buttons div
    buttons.appendChild(contactButton); // Add individual button to buttons div

    header.appendChild(title);
    header.appendChild(buttons);

    content.appendChild(header);

    // Create middle section
    let middleContact = document.createElement('div');
    middleContact.setAttribute('id', 'middle-contact');

    let phoneNumber = document.createElement('span');
    phoneNumber.textContent = "📞\u00A0\u00A0(123)-456-7890";

    let email = document.createElement('span');
    email.textContent = "✉️\u00A0\u00A0inquiries@tylerssteakhouse.com";

    let address = document.createElement('span');
    address.textContent = "📍\u00A0\u00A06627 Hollywood Blvd, Hollywood, CA 90028";

    let map = document.createElement('iframe');
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7426935381795!2d-118.3344444!3d34.1017315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3cab531d6d%3A0x93c9d88bc0add84c!2s6627%20Hollywood%20Blvd%2C%20Los%20Angeles%2C%20CA%2090028!5e0!3m2!1sen!2sus!4v1671587574519!5m2!1sen!2sus');
    map.setAttribute('style', 'border:0;');
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('loading', 'lazy');
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    middleContact.appendChild(phoneNumber);
    middleContact.appendChild(email);
    middleContact.appendChild(address);
    middleContact.appendChild(map);
    content.appendChild(middleContact);

    // Create footer
    let footerDiv = document.createElement('div');
    footerDiv.setAttribute('id', 'footer')
    let footerContents = document.createElement('div');
    footerContents.setAttribute('id', 'footer-contents')
    let footerText = document.createElement('span');
    footerText.textContent = "Copyright © 2022 Tyler Tran\u00A0";
    let footerLink = document.createElement('a');
    footerLink.setAttribute('href', 'https://github.com/tylertran349');
    footerLink.setAttribute('target', '_blank');
    let githubIcon = document.createElement('i');
    githubIcon.setAttribute('class', 'fa fa-github');
    githubIcon.setAttribute('aria-hidden', 'true');

    footerLink.appendChild(githubIcon);
    footerContents.appendChild(footerText);
    footerContents.appendChild(footerLink);
    footerDiv.appendChild(footerContents);

    content.appendChild(footerDiv);
}