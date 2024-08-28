
const shareButton = document.querySelector('.share-button');

const menu = document.createElement('div');
menu.classList.add('menu');


const imageUrls = [
    'images/icon-facebook.svg',
    'images/icon-pinterest.svg',
    'images/icon-twitter.svg',
    
];

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