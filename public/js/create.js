const createFormHandler = async (event) => {
  event.preventDefault();

  const { title: titleInput, content: contentInput } = event.target.elements;
  console.log(titleInput, contentInput);

  const postData = {
    title: titleInput.value,
    content: contentInput.value,
  };

  fetch(`/api/blogposts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (response.status === 200) {
        document.location.replace('/dashboard');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

document
  .querySelector('.create-post')
  .addEventListener('submit', createFormHandler);
