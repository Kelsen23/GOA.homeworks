
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    const valueOfInput = document.querySelector('.movieName').value;
    request(valueOfInput, 'ef5fa30d');
  })  

  async function request(movieTitle, APIKey) {

    try {
  
      const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${APIKey}`);
    
      const data = await response.json()
      
        if (!response.ok) {
          alert(data.Error);
          return;
        }
  
        document.querySelector('main').innerHTML = 
        ` <img src="${data.Poster}" style="width: 300rm; margin-top: 10px;" />
          <p>Movie Name: ${data.Title}</p>
          <p>Release Year: ${data.Year}</p>
          <p>Production: ${data.Production}</p>
          <p>Rated: ${data.Rated}</p>
          <p>Imdb Rating: ${data.imdbRating}</p>
          <p>Genre: ${data.Genre}</p>
          <p>Country: ${data.Country}</p>
          <p>Awards: ${data.Awards}</p>
          <p>Runtime: ${data.Runtime}</p>
          <p>Actors: ${data.Actors}</p>
          <p>Plot: ${data.Plot}</p>
          <p>Director: ${data.Director}</p>
          <p>Writer(s): ${data.Writer}</p>`
        
      } catch(error) {
        alert('Somethin went wrong:', error);
      }
  
  }