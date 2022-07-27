const numberOfCategories = document.querySelectorAll('.item');

    console.log(`Number of Categories: ${numberOfCategories.length}`)
numberOfCategories.forEach.call(numberOfCategories, (element) => {

    const title = element.querySelector('h2').innerHTML;
    const itemLength = element.querySelectorAll('li').length;
    console.log(` 
    Category: ${title} 
    Elements: ${itemLength}`);
})



