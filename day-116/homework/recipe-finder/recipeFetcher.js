const APIId = 'baf0023c';
const APIKey = '10b0be3c80aa6c44a02362eadb2b2b5a';



async function fetchRecipe(value) {
  try {
    const response = await fetch(`https://api.edamam.com/search?q=${value}&app_id=${APIId}&app_key=${APIKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export default fetchRecipe;