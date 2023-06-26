const commentForm = document.getElementsById('comment');

// POST new comment when form is submitted
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { content: contentInput } = event.target.elements;

  const commentData = {
    content: contentInput.value,
    blogpost_id: event.target.dataset.blogpostid,
  };

  const blogpostid = event.target.dataset.blogpostid;

  fetch(`/api/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  })
    .then((response) => {
      if (response.status === 200) {
        window.location.href = `/post/${blogpostid}`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
