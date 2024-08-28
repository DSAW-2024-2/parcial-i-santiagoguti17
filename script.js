// Get the share button element
const shareButton = document.querySelector('.share-button');

// Get the menu element
const menu = document.createElement('div');
menu.classList.add('menu');

// Create a text element with the word "SHARE"
const shareText = document.createElement('span');
shareText.textContent = 'S H A R E';
shareText.classList.add('share-text');

// Append the text element to the menu
menu.appendChild(shareText);

// Create an array of image URLs
const imageUrls = [
    'images/icon-facebook.svg',
    'images/icon-pinterest.svg',
    'images/icon-twitter.svg',
];

// Create image elements and append them to the menu
imageUrls.forEach((imageUrl) => {
    const image = document.createElement('img');
    image.src = imageUrl;
    menu.appendChild(image);
});

// Append the menu to the document body
document.body.appendChild(menu);

// Hide the menu initially
menu.style.display = 'none';

// Add a click event listener to the share button
shareButton.addEventListener('click', () => {
    // Toggle the menu visibility
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});