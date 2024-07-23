// script.js

document.getElementById('add-ingredient').addEventListener('click', function() {
    const ingredientInputs = document.createElement('div');
    ingredientInputs.className = 'ingredient-inputs';
    ingredientInputs.innerHTML = `
        <input type="text" name="ingredient" placeholder="Enter an ingredient">
        <input type="text" name="quantity" placeholder="Quantity">
    `;
    document.querySelector('.ingredients').insertBefore(ingredientInputs, document.getElementById('add-ingredient'));
});

document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
});
