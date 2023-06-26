const updateBlogPost = document.getElementsByClassName('updateBlogPost');

updateBlogPost.addEventListener('submit', (event) => {
  event.preventDefault();

  const { title: titleInput, content: contentInput } = event.target.elements;

  const updatedPostData = {
    title: titleInput.value,
    content: contentInput.value,
  };

  const blogpostid = event.target.dataset.blogpostid;

  if (event.submitter.innerhtml === 'Update Post') {
    fetch(`/api/blogposts/${blogpostid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPostData),
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = '/dashboard';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (event.submitter.innerhtml === 'Delete') {
    fetch(`/api/blogposts/${blogpostid}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = '/dashboard';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
