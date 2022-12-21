import { resetWebpage } from './reset-webpage'
import { drawHomePage } from './home'
import { drawContactPage } from './contact'

export function drawMenuPage() {
    console.log("Drawing menu page...")
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
        console.log("Button 1 was pressed");
        resetWebpage();
        drawHomePage();
    }
    function menuButtonFunction() { // Run function when menu button is pressed
        console.log("Button 2 was pressed");
        resetWebpage();
        drawMenuPage();
    }
    function contactButtonFunction() { // Run function when contact button is pressed
        console.log("Button 3 was pressed");
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
    let middleMenu = document.createElement('div');
    middleMenu.setAttribute('id', 'middle-menu');

    let menuSectionOne = document.createElement('div');
    menuSectionOne.setAttribute('id', 'menu-section');

    let menuSectionOneTitle = document.createElement('span');
    menuSectionOneTitle.textContent = "Appetizers";
    menuSectionOneTitle.setAttribute('id', 'menu-section-title');

    let menuItemOne = document.createElement('div');
    menuItemOne.setAttribute('id', 'menu-item');

    let menuItemOneName = document.createElement('span');
    menuItemOneName.textContent = "Oysters Rockefeller 10";
    menuItemOneName.setAttribute('id', 'menu-item-name');
    let menuItemOneDescription = document.createElement('span');
    menuItemOneDescription.textContent = "Four oysters on the half-shell, broiled and topped with butter, parsley, and breadcrumbs."

    let menuItemTwo = document.createElement('div');
    menuItemTwo.setAttribute('id', 'menu-item');

    let menuItemTwoName = document.createElement('span');
    menuItemTwoName.textContent = "French Onion Soup 6";
    menuItemTwoName.setAttribute('id', 'menu-item-name');
    let menuItemTwoDescription = document.createElement('span');
    menuItemTwoDescription.textContent = "Slow-simmered soup with beef broth and onions. Topped with melted Gruyère cheese and croutons."

    menuItemOne.appendChild(menuItemOneName);
    menuItemOne.appendChild(menuItemOneDescription);
    menuItemTwo.appendChild(menuItemTwoName);
    menuItemTwo.appendChild(menuItemTwoDescription);
    menuSectionOne.appendChild(menuSectionOneTitle);
    menuSectionOne.appendChild(menuItemOne);
    menuSectionOne.appendChild(menuItemTwo);
    menuSectionOne.appendChild(menuItemOne);
    middleMenu.appendChild(menuSectionOne);

    let menuSectionTwo = document.createElement('div');


    let menuSectionThree = document.createElement('div');

    content.appendChild(middleMenu);

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