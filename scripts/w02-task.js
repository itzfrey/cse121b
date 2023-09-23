/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Godfrey Hogan Eyo';
const currentYear = 2023;
const profilePicture = 'images/profile-picture.jpg';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFood = ['Beans', 'Indomie and Plantain', 'Jollof Rice', 'Egusi Soup'];
foodElement.textContent = favoriteFood;

let anotherFavoriteFood = ['Fried Yam'];
favoriteFood.push(...anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;

//Removes the first element in the favorite food array
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

//Removes the last element in the favorite food array
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;


