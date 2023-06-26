const templatePostHandler = async (event) => {
  event.preventDefault();

  document.location.replace('/createpost');
};

document
  .querySelector('.new-post-template')
  .addEventListener('click', templatePostHandler);
