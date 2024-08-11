//  let postsData = [
//             { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
//             { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
//             { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
//             { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
//         ];

//         const likedPosts = new Set();

//         function renderPosts() {
//             const postsContainer = document.getElementById('posts');
//             postsContainer.innerHTML = '';

//             postsData.forEach((post) => {
//                 const postElement = document.createElement('div');
//                 postElement.classList.add('post');

//                 const authorElement = document.createElement('h3');
//                 authorElement.textContent = post.author;

//                 const contentElement = document.createElement('p');
//                 contentElement.textContent = post.content;

//                 const imageElement = document.createElement('img');
//                 imageElement.src = post.image;
//                 imageElement.alt = 'Post Image';

//                 const likeButton = document.createElement('button');
//                 likeButton.textContent = `Like`;
//                 likeButton.classList.add('like-button');
//                 likeButton.addEventListener('click', () => {
//                     if (!likedPosts.has(post.id)) {
//                         likePost(post.id);
//                         likedPosts.add(post.id);
//                         likeButton.disabled = true;
//                         likeButton.style.background = "red";
//                         update();
//                     }
//                 });

//                 const commentInput = document.createElement('input');
//                 commentInput.type = 'text';
//                 commentInput.placeholder = 'Write a comment...';

//                 const commentButton = document.createElement('button');
//                 commentButton.textContent = 'Comment';
//                 commentButton.classList.add('comment-button');
//                 commentButton.addEventListener('click', () => {
//                     if (commentInput.value !== "") {
//                         let newP = document.createElement("p");
//                         post.comments.push(commentInput.value);
//                         newP.textContent = commentInput.value;
//                         commentsContainer.appendChild(newP);
//                         update();
//                     }
//                     commentInput.value = '';
//                 });

//                 function update() {
//                     postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
//                 }

//                 const postFooter = document.createElement('div');
//                 postFooter.classList.add('post-footer');
//                 postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

//                 const commentsContainer = document.createElement('div');
//                 commentsContainer.classList.add('comments-container');
//                 commentsContainer.style.display = 'none';

//                 post.comments.forEach((comment) => {
//                     const commentElement = document.createElement('p');
//                     commentElement.textContent = comment;
//                     commentsContainer.appendChild(commentElement);
//                 });

//                 postElement.appendChild(authorElement);
//                 postElement.appendChild(imageElement);
//                 postElement.appendChild(contentElement);
//                 postElement.appendChild(likeButton);
//                 postElement.appendChild(commentInput);
//                 postElement.appendChild(commentButton);
//                 postElement.appendChild(postFooter);
//                 postElement.appendChild(commentsContainer);

//                 postFooter.addEventListener('click', () => {
//                     if (commentsContainer.style.display === 'none') {
//                         commentsContainer.style.display = 'block';
//                     } else {
//                         commentsContainer.style.display = 'none';
//                     }
//                 });

//                 postsContainer.appendChild(postElement);
//             });
//         }

//         // Function to handle post liking
//         function likePost(postId) {
//             const post = postsData.find(post => post.id === postId);
//             if (post) {
//                 post.likes++;
//             }
//         }

//         function createPost(event) {
//             event.preventDefault();
//             const postInput = document.getElementById("postInput");
//             const imageInput = document.getElementById("imageInput");

//             if (imageInput.files.length > 0) {
//                 const file = imageInput.files[0];

//                 if (!file.type.startsWith('image/')) {
//                     alert('Only image files are allowed.');
//                     return;
//                 }

//                 const reader = new FileReader();
//                 reader.onload = function(e) {
//                     const imageSource = e.target.result;

//                     const newPost = {
//                         id: postsData.length + 1,
//                         author: 'You',
//                         content: postInput.value.trim(),
//                         likes: 0,
//                         comments: [],
//                         image: imageSource
//                     };

//                     postsData.push(newPost);
//                     postInput.value = "";
//                     appendPost(newPost);
//                 };

//                 reader.readAsDataURL(file);
//             } else {
//                 alert('Please select an image file.');
//             }
//         }

//         function appendPost(post) {
//             const postsContainer = document.getElementById('posts');

//             const postElement = document.createElement('div');
//             postElement.classList.add('post');

//             const authorElement = document.createElement('h3');
//             authorElement.textContent = post.author;

//             const contentElement = document.createElement('p');
//             contentElement.textContent = post.content;

//             const imageElement = document.createElement('img');
//             imageElement.src = post.image;
//             imageElement.alt = 'Post Image';

//             const likeButton = document.createElement('button');
//             likeButton.textContent = `Like`;
//             likeButton.classList.add('like-button');
//             likeButton.addEventListener('click', () => {
//                 if (!likedPosts.has(post.id)) {
//                     likePost(post.id);
//                     likedPosts.add(post.id);
//                     likeButton.disabled = true;
//                     likeButton.style.background = "red";
//                     update();
//                 }
//             });

//             const commentInput = document.createElement('input');
//             commentInput.type = 'text';
//             commentInput.placeholder = 'Write a comment...';

//             const commentButton = document.createElement('button');
//             commentButton.textContent = 'Comment';
//             commentButton.classList.add('comment-button');
//             commentButton.addEventListener('click', () => {
//                 if (commentInput.value !== "") {
//                     let newP = document.createElement("p");
//                     post.comments.push(commentInput.value);
//                     newP.textContent = commentInput.value;
//                     commentsContainer.appendChild(newP);
//                     update();
//                 }
//                 commentInput.value = '';
//             });

//             function update() {
//                 postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
//             }

//             const postFooter = document.createElement('div');
//             postFooter.classList.add('post-footer');
//             postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

//             const commentsContainer = document.createElement('div');
//             commentsContainer.classList.add('comments-container');
//             commentsContainer.style.display = 'none';

//             post.comments.forEach((comment) => {
//                 const commentElement = document.createElement('p');
//                 commentElement.textContent = comment;
//                 commentsContainer.appendChild(commentElement);
//             });

//             postElement.appendChild(authorElement);
//             postElement.appendChild(imageElement);
//             postElement.appendChild(contentElement);
//             postElement.appendChild(likeButton);
//             postElement.appendChild(commentInput);
//             postElement.appendChild(commentButton);
//             postElement.appendChild(postFooter);
//             postElement.appendChild(commentsContainer);

//             postFooter.addEventListener('click', () => {
//                 if (commentsContainer.style.display === 'none') {
//                     commentsContainer.style.display = 'block';
//                 } else {
//                     commentsContainer.style.display = 'none';
//                 }
//             });

//             postsContainer.appendChild(postElement);
//         }

//         // Add Event listeners to listen to the submit event of the form.
//         document.getElementById("postForm").addEventListener("submit", createPost);

//         // Initial rendering
//         renderPosts();




















     
let postsData = [
  { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
  { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
  { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
  { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
];
const likedPosts = new Set();
function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  postsData.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const authorElement = document.createElement('h3');
    authorElement.textContent = post.author;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    const imageElement = document.createElement('img');
    imageElement.src = post.image;
    imageElement.alt = 'Post Image';

    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');
    likeButton.addEventListener('click', () => {
      if (!likedPosts.has(post.id)) {
          likePost(post.id);
          likedPosts.add(post.id);
          likeButton.disabled = true;  
          for(let ind of likedPosts){
              const button = document.querySelectorAll('.like-button')[ind-1];
              button.style.backgroundColor = 'red';
      
          }
  }
});

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button');
    commentButton.addEventListener('click', () => {
      addComment(post.id, commentInput.value);
      commentInput.value = '';
    });

    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none';

    post.comments.forEach((comment) => {
      const commentElement = document.createElement('p');
      commentElement.textContent = comment;
      commentsContainer.appendChild(commentElement);
    });

    postElement.appendChild(authorElement);

    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);

    postFooter.addEventListener('click', () => {
      if (commentsContainer.style.display === 'none') {
        commentsContainer.style.display = 'block';
      } else {
        commentsContainer.style.display = 'none';
      }
    });

    postsContainer.appendChild(postElement);
  });
}

// Function to handle post liking
function likePost(postId) {
  const post = postsData.find(post => post.id === postId);
  if (post) {
    post.likes++;
    renderPosts();
  }
}

// Function to handle adding a comment
function addComment(postId, comment) {
  const post = postsData.find(post => post.id === postId);
  if (post) {
    post.comments.push(comment);
    renderPosts();
  }
}

  // Function to handle post submission

  function submitPost(event) {
      event.preventDefault();
    
      const postInput = document.getElementById('postInput');
      const imageInput = document.getElementById('imageInput');
      const content = postInput.value;
      const image = imageInput.files[0];
    
      if (content.trim() === '' || !image) {
        return;
      }
    
      const imageURL = URL.createObjectURL(image);
    
      const newPost = {
        id: postsData.length + 1,
        author: 'You',
        content: content,
        likes: 0,
        comments: [],
        image: imageURL
      };
    
      postsData.push(newPost);
      postInput.value = '';
      imageInput.value = '';
      renderPosts();
    }
// Event listeners
document.getElementById('postForm').addEventListener('submit', submitPost);

// Initial rendering                      
renderPosts();