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
    homeButton.setAttribute('id', 'btn');
    let menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.setAttribute('id', 'btn-active');
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
    menuSectionTwo.setAttribute('id', 'menu-section');

    let menuSectionTwoTitle = document.createElement('span');
    menuSectionTwoTitle.textContent = "Entrees";
    menuSectionTwoTitle.setAttribute('id', 'menu-section-title');

    let menuItemThree = document.createElement('div');
    menuItemThree.setAttribute('id', 'menu-item');

    let menuItemThreeName = document.createElement('span');
    menuItemThreeName.textContent = "New York Strip 35";
    menuItemThreeName.setAttribute('id', 'menu-item-name');
    let menuItemThreeDescription = document.createElement('span');
    menuItemThreeDescription.textContent = "Served with mashed potatoes and sauteed mushrooms.";

    let menuItemFour = document.createElement('div');
    menuItemFour.setAttribute('id', 'menu-item');

    let menuItemFourName = document.createElement('span');
    menuItemFourName.textContent = "Ribeye 46";
    menuItemFourName.setAttribute('id', 'menu-item-name');
    let menuItemFourDescription = document.createElement('span');
    menuItemFourDescription.textContent = "Served with mashed potatoes grilled vegetables, and herbed compound butter.";

    let menuItemFive = document.createElement('div');
    menuItemFive.setAttribute('id', 'menu-item');

    let menuItemFiveName = document.createElement('span');
    menuItemFiveName.textContent = "Surf 'n' Turf 43";
    menuItemFiveName.setAttribute('id', 'menu-item-name');
    let menuItemFiveDescription = document.createElement('span');
    menuItemFiveDescription.textContent = "Grilled top sirloin and one lobster tail. Served with mashed potatoes.";

    let menuItemSix = document.createElement('div');
    menuItemSix.setAttribute('id', 'menu-item');

    let menuItemSixName = document.createElement('span');
    menuItemSixName.textContent = "Grilled Salmon 29";
    menuItemSixName.setAttribute('id', 'menu-item-name');
    let menuItemSixDescription = document.createElement('span');
    menuItemSixDescription.textContent = "Served with garlic parmesean grilled broccoli and rice pilaf.";

    menuItemThree.appendChild(menuItemThreeName);
    menuItemThree.appendChild(menuItemThreeDescription);
    menuItemFour.appendChild(menuItemFourName);
    menuItemFour.appendChild(menuItemFourDescription);
    menuItemFive.appendChild(menuItemFiveName);
    menuItemFive.appendChild(menuItemFiveDescription);
    menuItemSix.appendChild(menuItemSixName);
    menuItemSix.appendChild(menuItemSixDescription);
    menuSectionTwo.appendChild(menuSectionTwoTitle);
    menuSectionTwo.appendChild(menuItemThree);
    menuSectionTwo.appendChild(menuItemFour);
    menuSectionTwo.appendChild(menuItemFive);
    menuSectionTwo.appendChild(menuItemSix);
    middleMenu.appendChild(menuSectionTwo);

    let menuSectionThree = document.createElement('div');
    menuSectionThree.setAttribute('id', 'menu-section');

    let menuSectionThreeTitle = document.createElement('span');
    menuSectionThreeTitle.textContent = "Desserts";
    menuSectionThreeTitle.setAttribute('id', 'menu-section-title');

    let menuItemSeven = document.createElement('div');
    menuItemSeven.setAttribute('id', 'menu-item');

    let menuItemSevenName = document.createElement('span');
    menuItemSevenName.textContent = "New York Cheesecake 12";
    menuItemSevenName.setAttribute('id', 'menu-item-name');
    let menuItemSevenDescription = document.createElement('span');
    menuItemSevenDescription.textContent = "Served with strawberry sauce.";

    let menuItemEight = document.createElement('div');
    menuItemEight.setAttribute('id', 'menu-item');

    let menuItemEightName = document.createElement('span');
    menuItemEightName.textContent = "Key Lime Pie 10";
    menuItemEightName.setAttribute('id', 'menu-item-name');
    let menuItemEightDescription = document.createElement('span');
    menuItemEightDescription.textContent = "Topped with whipped cream and key lime slices.";

    menuItemSeven.appendChild(menuItemSevenName);
    menuItemSeven.appendChild(menuItemSevenDescription);
    menuItemEight.appendChild(menuItemEightName);
    menuItemEight.appendChild(menuItemEightDescription);
    menuSectionThree.appendChild(menuSectionThreeTitle);
    menuSectionThree.appendChild(menuItemSeven);
    menuSectionThree.appendChild(menuItemEight);
    middleMenu.appendChild(menuSectionThree);

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