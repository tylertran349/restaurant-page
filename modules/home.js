import { resetWebpage } from './reset-webpage'
import { drawMenuPage } from './menu'
import { drawContactPage } from './contact'

export function drawHomePage() {
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
    homeButton.setAttribute('id', 'btn-active');
    let menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.setAttribute('id', 'btn');
    let contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    contactButton.setAttribute('id', 'btn');

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
    let middle = document.createElement('div');
    middle.setAttribute('id', 'middle');

    let description1 = document.createElement('span');
    description1.textContent = "Tender, perfectly cooked steaks, seafood, and more!";

    let description2 = document.createElement('span');
    description2.textContent = "Made with ❤️ since 1951";

    let image = document.createElement('img');
    image.setAttribute('src', 'images/steak-picture.webp');
    image.setAttribute('id', 'steak-picture')

    let description3 = document.createElement('span');
    description3.textContent = "Order online or visit us today!";

    middle.appendChild(description1);
    middle.appendChild(description2);
    middle.appendChild(image);
    middle.appendChild(description3);

    content.appendChild(middle);

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