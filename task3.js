
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()
// Щоб перевірити правильність виконання введіть команду: npx jest test3.jest.js




function applyStyles() {
    
    // Створення основних елементів та їх атрибутів
    const mainElement = document.createElement('main');
    mainElement.className = 'mainClass check item';

    const divElement = document.createElement('div');
    divElement.id = 'myDiv';

    const pElement = document.createElement('p');
    pElement.textContent = 'First paragraph';

    // Збирання структури
    divElement.appendChild(pElement);
    mainElement.appendChild(divElement);

    // Знаходимо елемент з класом "create_elements" в DOM
    const createElementsContainer = document.querySelector('.create_elements');

    // Вставляємо створену структуру в елемент "create_elements"
    createElementsContainer.appendChild(mainElement);
}

applyStyles();

module.exports = applyStyles;
