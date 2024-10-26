const main = document.querySelector('main');

fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data => {

    let postsHTML = '';

    data.posts.forEach(post => {
      postsHTML += `
        <div class="flex flex-col items-center">
          <div class="my-5">
            <p class="title">${post.title}</p>
            <p class="font-bold">tags: #${post.tags}</p>
            <img src="https://tse1.mm.bing.net/th?id=OIP.M-5ruDumHIwe6KvvYl1vBwHaEo&pid=Api&P=0&h=220" />

            <div class="flex flex-row items-center mt-2">
              <p>Likes: ${post.reactions.likes}</p>
              <img src="icons/like.png" class="w-5 mx-2" />
              <p>Dislikes: ${post.reactions.dislikes}</p>
              <img src="icons/dislike.png" class="w-5 mx-2" />
            </div>

            <div class="flex flex-row mt-1 items-center">
              <p class="font-semibold">views: ${post.views}</p>
              <img src="icons/view.png" class="w-7 ml-3" />
            </div>
          </div>
        </div>
      `;
    });

    main.innerHTML = postsHTML;

    console.log(data);

  })
  .catch(error => console.error('Error fetching data:', error));
