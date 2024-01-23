// Sample recipes data
const recipes = [
    { name: 'Spaghetti Bolognese', type: 'Non-vegetarian', details: 'A classic Italian dish with meat sauce.' },
    { name: 'Vegetable Stir Fry', type: 'Vegetarian', details: 'A healthy stir-fry with a variety of colorful vegetables.' },
    // Add more recipes as needed
];

// Sample image gallery data
const imageGallery = [
    'images/recipe1.jpg',
    'images/recipe2.jpg',
    // Add more image paths as needed
];

// Function to display recipes dynamically
function displayRecipes(recipeList) {
    const recipesSection = document.getElementById('recipes');
    recipesSection.innerHTML = '';

    recipeList.forEach((recipe, index) => {
        const article = document.createElement('article');
        article.innerHTML = `<h2>${recipe.name}</h2><p>Type: ${recipe.type}</p>`;
        article.addEventListener('click', () => showRecipeDetails(index));
        recipesSection.appendChild(article);
    });
}

// Function to display image gallery
function displayImageGallery(images) {
    const gallerySection = document.getElementById('imageGallery');
    gallerySection.innerHTML = '<h2>Image Gallery</h2>';

    const galleryDiv = document.createElement('div');
    galleryDiv.className = 'gallery';

    images.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Recipe Image';
        galleryDiv.appendChild(img);
    });

    gallerySection.appendChild(galleryDiv);
}

// Function to display recipe details dynamically
function showRecipeDetails(index) {
    const recipeDetailSection = document.getElementById('recipeDetail');
    const recipe = recipes[index];
    recipeDetailSection.innerHTML = `<h3>${recipe.name}</h3><p>Type: ${recipe.type}</p><p>${recipe.details}</p>`;
}

// Event listener for "Show All Recipes" link
document.getElementById('showAll').addEventListener('click', function () {
    displayRecipes(recipes);
});

// Event listener for "Show Vegetarian Recipes" link
document.getElementById('showVegetarian').addEventListener('click', function () {
    const vegetarianRecipes = recipes.filter(recipe => recipe.type === 'Vegetarian');
    displayRecipes(vegetarianRecipes);
});

// Event listener for image gallery initialization
document.addEventListener('DOMContentLoaded', function () {
    displayImageGallery(imageGallery);
});

// Event listener for form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form submission handling (e.g., send data to a server)
    console.log('Form submitted:', { name, email, message });

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Initial display of all recipes
displayRecipes(recipes);
