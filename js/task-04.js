// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const value_button = {
     sub: document.querySelector("[data-action='decrement']"),
     add: document.querySelector("[data-action='increment']"),
     span: document.querySelector('#value'),
     counter: document.querySelector('#counter')
};

let counterValue = 0;
const increment = () => {
    counterValue +=1;
    document.getElementById('value').textContent = counterValue;
};

const decrement = () =>{
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};
value_button.add.addEventListener('click', increment);
value_button.sub.addEventListener('click', decrement);