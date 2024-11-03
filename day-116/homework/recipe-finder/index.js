import fetchRecipe from './recipeFetcher.js';

const btn = document.querySelector('button');
const input = document.querySelector('input');
const section = document.querySelector('section');

btn.addEventListener('click', async () => {
  const data = await fetchRecipe(input.value); 
  console.log(data);
  if (data && data.hits.length > 0) { 
    const calories = data.hits[0].recipe.calories; 
    section.innerHTML = 
    `
      Calories of ${input.value} is: ${calories} kcal
    `;
  } else {
    section.innerHTML = `No recipes found for ${input.value}.`;
  }
});