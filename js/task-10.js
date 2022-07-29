function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает
//  один параметр - число. Функция создает столько <div>,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше 
// предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате
//  HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое
//  div#boxes, тем самым удаляя все созданные элементы.


  const controls = document.querySelector('#controls');
 const boxes = document.querySelector('#boxes');

  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");

const createBoxes = (amount) => {
   let box = document.createElement('div');
   if(amount === 1) {
    box.classList.add('box');
    box.style.width = '(30 + 10)px';
    box.style.height = '(30 + 10)px';
    box.style.backgroundColor = getRandomHexColor();
   }

}
const destroyBoxes = () => {
  boxes.innerHTML = '';
}


// пока не получается:), еще буду пробовать