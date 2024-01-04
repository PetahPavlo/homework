// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npm jest task2.test.js

function applyStyles() {
    const headerElement = document.getElementById('title');
    const firstParagraph = document.querySelector('#myDiv p:first-child');
    const secondParagraph = document.querySelector('#myDiv p:nth-child(2)');
    const thirdParagraph = document.querySelector('#myDiv p:nth-child(3)');
    const fourthParagraph = document.querySelector('#myDiv p:nth-child(4)');
    const listItems = document.querySelectorAll('#myList li');
    
    headerElement.style.backgroundColor = 'lightgreen';
    firstParagraph.style.fontWeight = 'bold';
    secondParagraph.style.color = 'red';
    thirdParagraph.style.textDecoration = 'underline';
    fourthParagraph.style.fontStyle = 'italic';
    listItems.forEach(item => {
      item.style.display = 'inline';
    });
    
    const spanElement = document.querySelector('span');
    spanElement.style.display = 'none';
}

module.exports = applyStyles;