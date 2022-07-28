function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт, который изменяет цвета фона элемента
//  <body> через инлайн стиль при клике на 
//   button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>



const backgroundColor = document.querySelector('.color');
const buttonColor = document.querySelector('.change-color');
const widget = document.querySelector('.widget');

backgroundColor.textContent = widget.style.backgroundColor;
buttonColor.addEventListener('click', () => {
document.body.style.backgroundColor = getRandomHexColor();
});



