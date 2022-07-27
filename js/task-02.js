const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.createElement("li");
list.textContent =  'Ingredients'
const itemIngredient = ingredients
.map((ingredient) => `<li class="list-item">${ingredient}</li>`)
.join(" ");
console.log(itemIngredient);
list.innerHTML = itemIngredient;

