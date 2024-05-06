const postInput = document.querySelector('#postInput');
const postButton = document.querySelector('#postButton');
const postContainer = document.querySelector('#postContainer');

postButton.addEventListener('click', function() {
  const postId = postInput.value;

  if (postId >= 1 && postId <= 100) {
    getPostById(postId)
      .then(post => {
        const postElement = createPostElement(post);
        clearContainer(postContainer); 
        postContainer.appendChild(postElement);
      })
      .catch(error => {
        const errorMessage = createErrorMessage(`Error: ${error.message}`);
        clearContainer(postContainer); 
        postContainer.appendChild(errorMessage);
      });
  } else {
    const errorMessage = createErrorMessage('Invalid post ID. Please enter a number between 1 and 100.');
    clearContainer(postContainer); 
    postContainer.appendChild(errorMessage);
  }
});

function getPostById(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  const titleElement = document.createElement('h2');
  titleElement.textContent = post.title;

  const bodyElement = document.createElement('p');
  bodyElement.textContent = post.body;

  const fetchCommentsButton = document.createElement('button');
  fetchCommentsButton.textContent = 'Fetch Comments';
  fetchCommentsButton.addEventListener('click', function() {
    fetchComments(post.id);
  });

  postElement.appendChild(titleElement);
  postElement.appendChild(bodyElement);
  postElement.appendChild(fetchCommentsButton);

  return postElement;
}

function fetchComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      return response.json();
    })
    .then(comments => {
      displayComments(comments);
    })
    .catch(error => {
      console.error('Error fetching comments:', error.message);
    });
}

function displayComments(comments) {
  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments');

  comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    const nameElement = document.createElement('h3');
    nameElement.textContent = comment.name;

    const bodyElement = document.createElement('p');
    bodyElement.textContent = comment.body;

    commentElement.appendChild(nameElement);
    commentElement.appendChild(bodyElement);

    commentsContainer.appendChild(commentElement);
  });

  postContainer.appendChild(commentsContainer);
}

function createErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  return errorMessage;
}
function clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }