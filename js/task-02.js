const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.createElement('ul');

  for (let i = 0; i < ingredients.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = ingredients[i];
    list.appendChild(listItem);
  }
  document.body.appendChild(list);
  console.log(list);

// list.textContent =  'Ingredients'
// const itemIngredient = ingredients.map((ingredient) => `<li class="list-item">${ingredient}</li>`).join(" ");
// console.log(itemIngredient);
// list.innerHTML = itemIngredient;

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.