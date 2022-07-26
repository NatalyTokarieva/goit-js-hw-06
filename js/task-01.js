const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items,(element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemLength = element.querySelectorAll('li').length;
    console.log(`Category ${title}  Elements ${itemLength}`);
})
