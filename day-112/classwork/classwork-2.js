const main = document.querySelector('main');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const searchPost = document.querySelector('.searchPost');

fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data => {
    let postsHTML = '';

    data.posts.forEach(post => {
      postsHTML += `
        <div class="flex flex-col items-center">
          <div class="my-5">
            <p class="title">${post.title}</p>
            <p class="font-bold">tags: #${post.tags.join(', #')}</p>
            <img src="https://tse1.mm.bing.net/th?id=OIP.M-5ruDumHIwe6KvvYl1vBwHaEo&pid=Api&P=0&h=220" />

            <div class="flex flex-row items-center mt-2">
               <p class="">Likes: ${post.reactions.likes}</p>
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
  })
  .catch(error => console.error('Error fetching data:', error));

btn.addEventListener('click', () => {
  fetch(`https://dummyjson.com/posts/search?q=${input.value}`)
    .then(res => res.json())
    .then(data => {
      searchPost.innerHTML = '';
      data.posts.forEach(post => {
        searchPost.innerHTML += `
          <div class="my-5">
            <p class="title">${post.title}</p>
            <p class="font-bold">tags: #${post.tags.join(', #')}</p>
            <img src="https://tse1.mm.bing.net/th?id=OIP.M-5ruDumHIwe6KvvYl1vBwHaEo&pid=Api&P=0&h=220" />

            <div class="flex flex-row items-center mt-2">
               <p class="">Likes: ${post.reactions.likes}</p>
               <img src="icons/like.png" class="w-5 mx-2" />
               <p>Dislikes: ${post.reactions.dislikes}</p>
               <img src="icons/dislike.png" class="w-5 mx-2" />
            </div>

            <div class="flex flex-row mt-1 items-center">
              <p class="font-semibold">views: ${post.views}</p>
              <img src="icons/view.png" class="w-7 ml-3" />
            </div>
          </div>
        `;
      });
      console.log(data);
    })
    .catch(error => console.error('Error searching posts:', error));
});
