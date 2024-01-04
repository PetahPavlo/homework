// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку, в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінн secondEl
// четвертний елемент - змінна fourthEl
//третій елемент - змінна thirdEl
// для перевірки завдання запустити команду npx jest task1.test.js



const list = document.getElementById('list');
const listItems = list.getElementsByTagName('li');
const firstEl = listItems[0].innerHTML;
const lastEl = listItems[listItems.length - 1].innerHTML;
const secondtEl = listItems[1].innerHTML;
const fourthEl = listItems[3].innerHTML;
const thirdtEl = listItems[2].innerHTML;


 module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
 };